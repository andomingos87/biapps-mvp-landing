
import { z } from "zod";

// Form validation schema
export const formSchema = z.object({
  fullName: z.string().min(3, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  whatsapp: z.string().min(10, { message: "WhatsApp inválido" }),
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
  budgetAmount: z.string().optional(),
  scheduleCall: z.string({
    required_error: "Por favor selecione uma opção",
  }),
});

export type FormData = z.infer<typeof formSchema>;

// Form step structure
export const formSteps = [
  {
    title: "Dados pessoais",
    description: "Conte-nos quem você é",
    icon: "User",
  },
  {
    title: "Sobre o projeto",
    description: "Detalhes iniciais do seu projeto",
    icon: "Briefcase",
  },
  {
    title: "Expectativas",
    description: "Prazos e orçamento",
    icon: "Calendar",
  },
  {
    title: "Finalizar",
    description: "Último passo",
    icon: "CheckCircle",
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
