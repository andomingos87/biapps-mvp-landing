
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, AlertCircle } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../schema";
import { isValidEmail, isValidPhone } from "../api";

interface PersonalInfoStepProps {
  form: UseFormReturn<FormData>;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ form }) => {
  // Monitor field states to provide real-time feedback
  const emailValue = form.watch("email");
  const whatsappValue = form.watch("whatsapp");
  
  // Client-side validation for immediate feedback
  const emailError = emailValue && !isValidEmail(emailValue) 
    ? "Por favor, use um email válido" 
    : "";
  
  const phoneError = whatsappValue && !isValidPhone(whatsappValue) 
    ? "Por favor, digite um número de WhatsApp válido com DDD" 
    : "";

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
                  className={`h-12 text-base ${form.formState.errors.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...field} 
                />
              </FormControl>
              <FormMessage className="flex items-center gap-1 text-destructive">
                {form.formState.errors.fullName && (
                  <AlertCircle size={14} className="inline-block" />
                )}
                {form.formState.errors.fullName?.message}
              </FormMessage>
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
                  className={`h-12 text-base ${(form.formState.errors.email || emailError) ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs text-gray-500">
                Usaremos este email para enviar sua proposta
              </FormDescription>
              <FormMessage className="flex items-center gap-1 text-destructive">
                {(form.formState.errors.email || emailError) && (
                  <AlertCircle size={14} className="inline-block" />
                )}
                {form.formState.errors.email?.message || emailError}
              </FormMessage>
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
                  className={`h-12 text-base ${(form.formState.errors.whatsapp || phoneError) ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  {...field} 
                />
              </FormControl>
              <FormMessage className="flex items-center gap-1 text-destructive">
                {(form.formState.errors.whatsapp || phoneError) && (
                  <AlertCircle size={14} className="inline-block" />
                )}
                {form.formState.errors.whatsapp?.message || phoneError}
              </FormMessage>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
