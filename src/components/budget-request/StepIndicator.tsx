
import React from 'react';
import { CheckCircle, CircleDot } from 'lucide-react';
import { cn } from "@/lib/utils";
import { formSteps } from './schema';

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="relative mt-4 mb-6">
      <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2"></div>
      <div 
        className="absolute top-1/2 h-0.5 bg-primary -translate-y-1/2 transition-all duration-300" 
        style={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
      ></div>
      
      <div className="relative flex justify-between">
        {formSteps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
          >
            <div 
              className={cn(
                "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                index <= currentStep 
                  ? "border-primary bg-primary text-white" 
                  : "border-gray-300 bg-white text-gray-400"
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
