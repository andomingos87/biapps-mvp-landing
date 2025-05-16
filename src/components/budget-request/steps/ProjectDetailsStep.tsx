
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { List, Briefcase } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData, solutionOptions, stageOptions } from "../schema";

interface ProjectDetailsStepProps {
  form: UseFormReturn<FormData>;
}

const ProjectDetailsStep: React.FC<ProjectDetailsStepProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="projectStage"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <List size={18} className="text-primary" />
              Estágio atual do projeto
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
                {stageOptions.map(option => (
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
        name="solutionTypes"
        render={() => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <List size={18} className="text-primary" />
              Qual tipo de solução você procura?
            </FormLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {solutionOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="solutionTypes"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={option.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...(field.value || []),
                                    option.id,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== option.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer text-base">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessSegment"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-base">
              <Briefcase size={18} className="text-primary" />
              Seu segmento ou tipo de negócio
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Ex: Saúde, Educação, Varejo..."
                className="h-12 text-base"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProjectDetailsStep;
