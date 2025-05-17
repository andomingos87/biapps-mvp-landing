
import { useState, useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormData, formSteps } from '../schema';

type UseFormNavigationProps = {
  form: UseFormReturn<FormData>;
};

export const useFormNavigation = ({ form }: UseFormNavigationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = formSteps.length;
  
  const nextStep = useCallback(async () => {
    if (currentStep < totalSteps - 1) {
      // Validate fields for the current step
      const currentStepFields = formSteps[currentStep].fields;
      const isValid = await form.trigger(currentStepFields as any);
      
      if (isValid) {
        setCurrentStep(currentStep + 1);
        return true;
      }
      return false;
    }
    return false;
  }, [currentStep, totalSteps, form]);
  
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
  const isCurrentStepValid = useCallback(async () => {
    const currentStepFields = formSteps[currentStep].fields;
    return await form.trigger(currentStepFields as any);
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
