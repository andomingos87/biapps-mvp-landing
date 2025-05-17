
import React, { useMemo, useEffect } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, List, Calendar } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData, deadlineOptions, budgetOptions } from "../schema";

interface ExpectationsStepProps {
  form: UseFormReturn<FormData>;
}

const ExpectationsStep: React.FC<ExpectationsStepProps> = ({ form }) => {
  // Watch the budget field to conditionally show the budget amount input
  const budgetType = form.watch("budget");
  
  const showBudgetInput = useMemo(() => {
    return budgetType === "yes" || budgetType === "estimate";
  }, [budgetType]);
  
  // Clear budget amount when not showing the field
  useEffect(() => {
    if (!showBudgetInput && form.getValues("budgetAmount")) {
      form.setValue("budgetAmount", "");
    }
  }, [showBudgetInput, form]);

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="projectGoal"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <FileText size={18} className="text-primary" />
              Qual é o seu objetivo com esse projeto?
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Ex: Vender mais, automatizar processos, validar ideia, etc."
                className="resize-none min-h-[120px] text-base"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="deadline"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <Calendar size={18} className="text-primary" />
              Tem prazo definido para lançar?
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {deadlineOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <List size={18} className="text-primary" />
              Já tem um orçamento definido para esse projeto?
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {budgetOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {showBudgetInput && (
        <FormField
          control={form.control}
          name="budgetAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-base">
                <List size={18} className="text-primary" />
                Qual o valor do seu orçamento?
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: R$ 10.000,00"
                  className="h-12 text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default ExpectationsStep;
