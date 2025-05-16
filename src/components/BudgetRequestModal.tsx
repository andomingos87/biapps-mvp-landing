
import React, { useState, useEffect } from "react";
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

  // Function to handle form submission and step navigation
  const onSubmit = async (data: FormData) => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitBudgetRequest(data);
      
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
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle navigation between form steps
  const handleBackStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Check if current step is complete to enable next button
  const isStepComplete = () => {
    // For the last step, verify that scheduleCall is filled
    if (currentStep === 3) {
      const { scheduleCall } = form.getValues();
      return !!scheduleCall;
    }
    
    // For other steps, allow proceeding (validation happens on submit)
    return true;
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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Vamos entender o que você precisa?
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Conte um pouco sobre seu projeto. Em poucos minutos, vamos entender se somos o time certo para ajudar a tirar sua ideia do papel.
          </DialogDescription>
        </DialogHeader>

        <StepIndicator currentStep={currentStep} />

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
                type="button"
                className="px-6 py-6 text-base"
                disabled={isSubmitting || !isStepComplete()}
                onClick={currentStep < 3 ? handleNextStep : form.handleSubmit(onSubmit)}
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
