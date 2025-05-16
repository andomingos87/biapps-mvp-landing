
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileText, 
  Mail, 
  Phone, 
  List, 
  Calendar, 
  Send,
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  CheckCircle,
  CircleDot
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
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
  scheduleCall: z.string({
    required_error: "Por favor selecione uma opção",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface BudgetRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service?: string;
}

const formSteps = [
  {
    title: "Dados pessoais",
    description: "Conte-nos quem você é",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Sobre o projeto",
    description: "Detalhes iniciais do seu projeto",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Expectativas",
    description: "Prazos e orçamento",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "Finalizar",
    description: "Último passo",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const BudgetRequestModal = ({
  open,
  onOpenChange,
  service,
}: BudgetRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      projectStage: "",
      solutionTypes: service ? [service] : [],
      businessSegment: "",
      projectGoal: "",
      deadline: "",
      budget: "",
      scheduleCall: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would normally send the form data to your backend
      console.log("Form submitted:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Solicitação enviada!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      
      onOpenChange(false);
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const isStepComplete = () => {
    if (currentStep === 0) {
      const { fullName, email, whatsapp } = form.getValues();
      return fullName.length >= 3 && z.string().email().safeParse(email).success && whatsapp.length >= 10;
    }
    
    if (currentStep === 1) {
      const { projectStage, solutionTypes, businessSegment } = form.getValues();
      return !!projectStage && solutionTypes.length >= 1 && businessSegment.length >= 1;
    }
    
    if (currentStep === 2) {
      const { projectGoal, deadline, budget } = form.getValues();
      return projectGoal.length >= 1 && !!deadline && !!budget;
    }

    return true;
  };

  const solutionOptions = [
    { id: "mvp", label: "Desenvolvimento de MVP" },
    { id: "website", label: "Site institucional" },
    { id: "system", label: "Sistema interno personalizado" },
    { id: "mobile", label: "Aplicação mobile" },
    { id: "integration", label: "Integrações e automações" },
    { id: "ai", label: "IA aplicada ao negócio" },
  ];

  const stageOptions = [
    { id: "idea", label: "Apenas uma ideia" },
    { id: "prototype", label: "Já tenho um protótipo" },
    { id: "working", label: "Já tenho um sistema funcionando" },
    { id: "redesign", label: "Estou reformulando um produto existente" }
  ];

  const deadlineOptions = [
    { id: "30days", label: "Sim, dentro de 30 dias" },
    { id: "60days", label: "Sim, dentro de 2 meses" },
    { id: "no-urgency", label: "Sem urgência" },
    { id: "evaluating", label: "Ainda estou avaliando" }
  ];

  const budgetOptions = [
    { id: "yes", label: "Sim" },
    { id: "estimate", label: "Tenho uma estimativa" },
    { id: "no", label: "Ainda não" }
  ];

  const callOptions = [
    { id: "yes", label: "Sim, quero conversar com um especialista" },
    { id: "no", label: "Não por agora, só estou pesquisando" }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
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
      case 1:
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
      case 2:
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
          </div>
        );
      case 3:
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
      default:
        return null;
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={(openState) => {
      if (!openState) {
        setTimeout(() => {
          setCurrentStep(0);
          form.reset();
        }, 300);
      }
      onOpenChange(openState);
    }}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Vamos entender o que você precisa?
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Conte um pouco sobre seu projeto. Em poucos minutos, vamos entender se somos o time certo para ajudar a tirar sua ideia do papel.
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-4 mb-6">
          <div className="absolute top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2"></div>
          <div className="absolute top-1/2 h-0.5 bg-primary -translate-y-1/2 transition-all duration-300" 
               style={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}></div>
          
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="min-h-[280px]">
              {renderStepContent()}
            </div>
            
            <div className="flex items-center justify-between gap-4 pt-4 border-t">
              {currentStep > 0 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleBackStep}
                  className="px-6 py-6 text-base"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button
                type="submit"
                className="px-6 py-6 text-base"
                disabled={isSubmitting || !isStepComplete()}
              >
                {currentStep < formSteps.length - 1 ? (
                  <>
                    Próximo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar solicitação
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetRequestModal;
