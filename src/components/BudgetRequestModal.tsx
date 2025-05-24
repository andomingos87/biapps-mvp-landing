import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formSchema, FormData, formSteps } from "./budget-request/schema";
// import { submitBudgetRequest } from "./budget-request/api"; // Removido para envio direto via fetch
import { useFormNavigation } from "./budget-request/hooks/useFormNavigation";
import StepIndicator from "./budget-request/StepIndicator";
import PersonalInfoStep from "./budget-request/steps/PersonalInfoStep";
import ProjectDetailsStep from "./budget-request/steps/ProjectDetailsStep";
import ExpectationsStep from "./budget-request/steps/ExpectationsStep";
import FinalStep from "./budget-request/steps/FinalStep";

interface BudgetRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: string;
}

const BudgetRequestModal = ({
  open,
  onOpenChange,
  service,
}: BudgetRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado do passo movido para o componente principal
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      projectStage: "",
      solutionTypes: service ? [service] : [],
      businessSegment: "",
      projectGoal: "",
      deadline: "",
      budget: "",
      budgetAmount: "",
      scheduleCall: "",
    },
    mode: "onChange",
  });

  // Funções de navegação customizadas
  const totalSteps = 4;
  const nextStep = async () => {
    // Validar campos do step atual
    const currentStepFields = formSteps[currentStep].fields;
    console.log('Valores antes do trigger:', form.getValues());
    const isValid = await form.trigger(currentStepFields as any);
    console.log('Tentando avançar etapa', {
      currentStep,
      currentStepFields,
      isValid,
      errors: form.formState.errors,
      values: form.getValues()
    });
    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      return true;
    }
    if (!isValid) {
      setStepError('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
    return isValid;
  };

  const prevStep = () => {
    if (currentStep > 0) {
      console.log('Voltando etapa', currentStep);
      setCurrentStep(currentStep - 1);
    }
  };
  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) setCurrentStep(step);
  };
  const isCurrentStepValid = async () => {
    const currentStepFields = formSteps[currentStep].fields;
    return await form.trigger(currentStepFields as any);
  };

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  // Function to handle form submission and step navigation
  const [stepError, setStepError] = useState<string | null>(null);

  // Renomeado de onSubmit para handleFinalFormSubmit e simplificado para apenas a submissão final
  const handleFinalFormSubmit = async (data: FormData) => {
    console.log('submit chamado', data, currentStep);
    setStepError(null);
    setIsSubmitting(true);
    try {
      // Envio direto para o endpoint fornecido
      console.log('Enviando formulário FINAL', data);
      const response = await fetch(
        "https://biapps-teste-n8n.t9frad.easypanel.host/webhook/orcamento-site",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error("Erro no envio do formulário");
      toast({
        title: "Solicitação enviada!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      onOpenChange(false);
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setStepError('Erro ao enviar formulário. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle navigation between form steps
  const handleBackStep = () => {
    prevStep();
  };

  // Conditionally click on steps but only allow going back
  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      goToStep(stepIndex);
    }
  };

  // Render the appropriate step content based on currentStep
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep form={form} />;
      case 1:
        return <ProjectDetailsStep form={form} />;
      case 2:
        return <ExpectationsStep form={form} />;
      case 3:
        return <FinalStep form={form} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={(openState) => {
      if (!openState) {
        setTimeout(() => {
          setCurrentStep(0);
          form.reset();
        }, 300);
      }
      onOpenChange(openState);
    }}>
      <DialogContent className="max-w-xl w-full max-h-[90vh] overflow-y-auto bg-white border border-gray-200 rounded-2xl shadow-none p-0 md:p-0">
        {/* Glassmorphism ainda mais leve, mais espaço em branco, borda/sombra mais suave */}
        <DialogHeader className="px-6 pt-8 pb-2">
          <DialogTitle className="text-xl font-semibold text-gray-900 leading-tight">
            Solicite um orçamento
          </DialogTitle>
          <DialogDescription className="text-sm mt-1 text-gray-500">
            Conte um pouco sobre seu projeto e retornaremos rapidamente.
          </DialogDescription>
        </DialogHeader>

        <StepIndicator 
          currentStep={currentStep} 
          progressPercentage={progressPercentage} 
          onStepClick={handleStepClick} 
        />

        <Form {...form}>
          {/* O onSubmit do form agora usa handleFinalFormSubmit */}
          <form onSubmit={form.handleSubmit(handleFinalFormSubmit)} className="space-y-8 px-6 pb-8 pt-2">
            <div className="min-h-[220px] flex flex-col justify-center bg-white rounded-lg p-0">
              {renderStepContent()}
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
              {currentStep > 0 ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBackStep}
                  className="px-4 py-2 text-sm font-normal rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
                </Button>
              ) : <span />}
              {/* Lógica do botão Próximo/Enviar ajustada */}
              {currentStep < totalSteps - 1 ? (
                <Button
                  type="button" // Para navegação, não submissão final
                  onClick={nextStep} // Chama diretamente a função de validação da etapa e navegação
                  className="px-6 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition"
                  disabled={isSubmitting} // Pode ser desabilitado se algo estiver em progresso
                >
                  Próximo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit" // Para submissão final do formulário
                  className="px-6 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 animate-pulse">Enviando...</span>
                  ) : (
                    <>
                      Enviar <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
            {stepError && (
              <div className="mt-2 text-sm text-red-600 text-center font-medium animate-pulse">{stepError}</div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetRequestModal;
