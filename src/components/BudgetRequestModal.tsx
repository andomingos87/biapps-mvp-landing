
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
import { formSchema, FormData } from "./budget-request/schema";
import { submitBudgetRequest } from "./budget-request/api";
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
    mode: "onChange", // This enables real-time validation
  });
  
  // Use our custom form navigation hook
  const { 
    currentStep, 
    nextStep, 
    prevStep, 
    goToStep,
    isCurrentStepValid,
    progressPercentage 
  } = useFormNavigation({ form });

  // Function to handle form submission and step navigation
  const onSubmit = async (data: FormData) => {
    if (currentStep < 3) {
      // Move to the next step if validation is successful
      const success = await nextStep();
      if (!success) {
        // If validation failed, show a toast
        toast({
          title: "Validação falhou",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Log the data being submitted for debugging
      console.log("Submitting form data:", data);
      
      await submitBudgetRequest(data);
      
      toast({
        title: "Solicitação enviada!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      
      onOpenChange(false);
      form.reset();
      goToStep(0);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
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
          goToStep(0);
          form.reset();
        }, 300);
      }
      onOpenChange(openState);
    }}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Vamos entender o que você precisa?
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Conte um pouco sobre seu projeto. Em poucos minutos, vamos entender se somos o time certo para ajudar a tirar sua ideia do papel.
          </DialogDescription>
        </DialogHeader>

        <StepIndicator 
          currentStep={currentStep} 
          progressPercentage={progressPercentage} 
          onStepClick={handleStepClick} 
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="min-h-[280px]">
              {renderStepContent()}
            </div>
            
            <div className="flex items-center justify-between gap-4 pt-4 border-t">
              {currentStep > 0 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleBackStep}
                  className="px-6 py-6 text-base"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button
                type="submit"
                className="px-6 py-6 text-base"
                disabled={isSubmitting}
              >
                {currentStep < 3 ? (
                  <>
                    Próximo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar solicitação
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetRequestModal;
