
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData, callOptions } from "../schema";

interface FinalStepProps {
  form: UseFormReturn<FormData>;
}

const FinalStep: React.FC<FinalStepProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="scheduleCall"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <Phone size={18} className="text-primary" />
              Deseja agendar uma conversa?
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {callOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
        <h4 className="font-medium flex items-center gap-2 mb-2">
          <CheckCircle size={16} className="text-primary" /> 
          Quase lá!
        </h4>
        <p className="text-sm text-gray-600">
          Ao enviar este formulário, nossa equipe analisará seu projeto e entrará em contato com você o mais breve possível para discutir os próximos passos.
        </p>
      </div>
    </div>
  );
};

export default FinalStep;
