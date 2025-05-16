
import React from 'react';
import { CheckCircle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils";
import { formSteps } from './schema';
import { Progress } from "@/components/ui/progress";

interface StepIndicatorProps {
  currentStep: number;
  progressPercentage: number;
  onStepClick?: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  currentStep, 
  progressPercentage,
  onStepClick 
}) => {
  return (
    <div className="relative mt-4 mb-6">
      <Progress
        value={progressPercentage}
        className="h-1 mb-6"
      />
      
      <div className="relative flex justify-between">
        {formSteps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
            onClick={() => onStepClick && onStepClick(index)}
          >
            <div 
              className={cn(
                "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                index <= currentStep 
                  ? "border-primary bg-primary text-white" 
                  : "border-gray-300 bg-white text-gray-400",
                onStepClick ? "cursor-pointer hover:border-primary/70" : ""
              )}
            >
              {index < currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <CircleDot className="w-5 h-5" />
              )}
            </div>
            <div className="mt-2 text-xs font-medium text-center hidden sm:block">
              <p className={cn(index <= currentStep ? "text-primary" : "text-gray-500")}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
