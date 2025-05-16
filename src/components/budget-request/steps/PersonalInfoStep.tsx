
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../schema";

interface PersonalInfoStepProps {
  form: UseFormReturn<FormData>;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-base">
                <User size={18} className="text-primary" />
                Seu nome completo
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Digite seu nome" 
                  className="h-12 text-base" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-base">
                <Mail size={18} className="text-primary" />
                E-mail profissional
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12 text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-base">
                <Phone size={18} className="text-primary" />
                WhatsApp (com DDD)
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="(00) 00000-0000" 
                  className="h-12 text-base" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
