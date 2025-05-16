
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
import { FileText, Mail, Phone, List, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const BudgetRequestModal = ({
  open,
  onOpenChange,
  service,
}: BudgetRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  });

  const onSubmit = async (data: FormData) => {
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

  const solutionOptions = [
    { id: "mvp", label: "Desenvolvimento de MVP" },
    { id: "website", label: "Site institucional" },
    { id: "system", label: "Sistema interno personalizado" },
    { id: "mobile", label: "Aplicação mobile" },
    { id: "integration", label: "Integrações e automações" },
    { id: "ai", label: "IA aplicada ao negócio" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Vamos entender o que você precisa?
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Preencha o formulário abaixo para receber uma proposta personalizada
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <FileText size={16} className="text-primary" />
                      Seu nome completo
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
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
                    <FormLabel className="flex items-center gap-2">
                      <Mail size={16} className="text-primary" />
                      E-mail profissional
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone size={16} className="text-primary" />
                      WhatsApp (com DDD)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectStage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <List size={16} className="text-primary" />
                      Estágio atual do projeto
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="idea">Apenas uma ideia</SelectItem>
                        <SelectItem value="prototype">
                          Já tenho um protótipo
                        </SelectItem>
                        <SelectItem value="working">
                          Já tenho um sistema funcionando
                        </SelectItem>
                        <SelectItem value="redesign">
                          Estou reformulando um produto existente
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="solutionTypes"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <List size={16} className="text-primary" />
                    Qual tipo de solução você procura?
                  </FormLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {solutionOptions.map((option) => (
                      <FormField
                        key={option.id}
                        control={form.control}
                        name="solutionTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
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
                              <FormLabel className="font-normal cursor-pointer">
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

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="businessSegment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <FileText size={16} className="text-primary" />
                      Seu segmento ou tipo de negócio
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Saúde, Educação, Varejo..."
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
                    <FormLabel className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      Tem prazo definido para lançar?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="30days">
                          Sim, dentro de 30 dias
                        </SelectItem>
                        <SelectItem value="60days">
                          Sim, dentro de 2 meses
                        </SelectItem>
                        <SelectItem value="no-urgency">Sem urgência</SelectItem>
                        <SelectItem value="evaluating">
                          Ainda estou avaliando
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <FileText size={16} className="text-primary" />
                    Qual é o seu objetivo com esse projeto?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Vender mais, automatizar processos, validar ideia, etc."
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <List size={16} className="text-primary" />
                      Já tem um orçamento definido para esse projeto?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Sim</SelectItem>
                        <SelectItem value="estimate">
                          Tenho uma estimativa
                        </SelectItem>
                        <SelectItem value="no">Ainda não</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="scheduleCall"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <List size={16} className="text-primary" />
                      Deseja agendar uma conversa?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">
                          Sim, quero conversar com um especialista
                        </SelectItem>
                        <SelectItem value="no">
                          Não por agora, só estou pesquisando
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-lg font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitação"} 
              <Send className="ml-2" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetRequestModal;
