
import { z } from "zod";

// Form validation schema with enhanced validation
export const formSchema = z.object({
  fullName: z.string().min(3, { message: "Nome completo é obrigatório" }),
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(5, { message: "E-mail é obrigatório" }),
  whatsapp: z
    .string()
    .min(10, { message: "WhatsApp inválido" })
    .refine(
      (val) => {
        // More flexible validation that accepts common Brazilian phone formats
        // Removes all non-digit characters for validation
        const digits = val.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 13; // Allow 10-13 digits (considering country code variations)
      },
      { message: "Formato de WhatsApp inválido" }
    ),
  projectStage: z.string({
    required_error: "Por favor selecione uma opção",
  }),
  solutionTypes: z
    .array(z.string())
    .min(1, { message: "Selecione pelo menos uma opção" }),
  businessSegment: z.string().min(1, { message: "Campo obrigatório" }),
  projectGoal: z.string().min(1, { message: "Campo obrigatório" }),
  deadline: z.string({
    required_error: "Por favor selecione uma opção",
  }),
  budget: z.string({
    required_error: "Por favor selecione uma opção",
  }),
  budgetAmount: z
    .string()
    .optional()
    .refine(
      (val) => {
        // If val is empty (undefined, null, or empty string), return true
        if (!val) return true;
        // Otherwise, make sure it contains numbers and optionally "R$" and currency formatting
        return /^(?:R\$\s?)?(?:\d{1,3}(?:\.\d{3})*(?:,\d{2})?|\d+(?:,\d{2})?)$/.test(val);
      },
      {
        message: "Valor deve ser um formato monetário válido",
      }
    ),
  scheduleCall: z.string({
    required_error: "Por favor selecione uma opção",
  }),
});

export type FormData = z.infer<typeof formSchema>;

// Form step structure with added icon names for better UI
export const formSteps = [
  {
    title: "Dados pessoais",
    description: "Conte-nos quem você é",
    icon: "User",
    fields: ["fullName", "email", "whatsapp"]
  },
  {
    title: "Sobre o projeto",
    description: "Detalhes iniciais do seu projeto",
    icon: "Briefcase",
    fields: ["projectStage", "solutionTypes", "businessSegment"]
  },
  {
    title: "Expectativas",
    description: "Prazos e orçamento",
    icon: "Calendar",
    fields: ["projectGoal", "deadline", "budget", "budgetAmount"]
  },
  {
    title: "Finalizar",
    description: "Último passo",
    icon: "CheckCircle",
    fields: ["scheduleCall"]
  },
];

// Form options
export const stageOptions = [
  { id: "idea", label: "Apenas uma ideia" },
  { id: "prototype", label: "Já tenho um protótipo" },
  { id: "working", label: "Já tenho um sistema funcionando" },
  { id: "redesign", label: "Estou reformulando um produto existente" }
];

export const solutionOptions = [
  { id: "mvp", label: "Desenvolvimento de MVP" },
  { id: "website", label: "Site institucional" },
  { id: "system", label: "Sistema interno personalizado" },
  { id: "mobile", label: "Aplicação mobile" },
  { id: "integration", label: "Integrações e automações" },
  { id: "ai", label: "IA aplicada ao negócio" },
];

export const deadlineOptions = [
  { id: "30days", label: "Sim, dentro de 30 dias" },
  { id: "60days", label: "Sim, dentro de 2 meses" },
  { id: "no-urgency", label: "Sem urgência" },
  { id: "evaluating", label: "Ainda estou avaliando" }
];

export const budgetOptions = [
  { id: "yes", label: "Sim" },
  { id: "estimate", label: "Tenho uma estimativa" },
  { id: "no", label: "Ainda não" }
];

export const callOptions = [
  { id: "yes", label: "Sim, quero conversar com um especialista" },
  { id: "no", label: "Não por agora, só estou pesquisando" }
];
