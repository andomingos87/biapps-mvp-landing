
import { useState, useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormData, formSteps } from '../schema';

type UseFormNavigationProps = {
  form: UseFormReturn<FormData>;
};

export const useFormNavigation = ({ form }: UseFormNavigationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = formSteps.length;
  
  const nextStep = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      return true;
    }
    return false;
  }, [currentStep, totalSteps]);
  
  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      return true;
    }
    return false;
  }, [currentStep]);
  
  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
      return true;
    }
    return false;
  }, [totalSteps]);
  
  // Check if current form step is valid
  const isCurrentStepValid = useCallback(() => {
    let isValid = true;
    
    switch (currentStep) {
      case 0: // Personal Info
        isValid = !form.getFieldState('fullName').invalid &&
                 !form.getFieldState('email').invalid &&
                 !form.getFieldState('whatsapp').invalid;
        break;
      case 1: // Project Details
        isValid = !form.getFieldState('projectStage').invalid &&
                 !form.getFieldState('solutionTypes').invalid &&
                 !form.getFieldState('businessSegment').invalid;
        break;
      case 2: // Expectations
        isValid = !form.getFieldState('projectGoal').invalid &&
                 !form.getFieldState('deadline').invalid &&
                 !form.getFieldState('budget').invalid;
                 
        // Only validate budget amount if budget is 'yes' or 'estimate'
        const budgetValue = form.getValues('budget');
        if ((budgetValue === 'yes' || budgetValue === 'estimate') && 
            form.getFieldState('budgetAmount').invalid) {
          isValid = false;
        }
        break;
      case 3: // Final
        isValid = !form.getFieldState('scheduleCall').invalid;
        break;
    }
    
    return isValid;
  }, [currentStep, form]);
  
  // Calculate progress percentage
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
  
  return {
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep,
    isCurrentStepValid,
    progressPercentage
  };
};
