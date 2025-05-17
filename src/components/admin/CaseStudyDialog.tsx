
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
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
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

// Schema para validação do formulário
const caseStudySchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  category: z.string().min(1, "A categoria é obrigatória"),
  description: z.string().min(10, "A descrição precisa ter pelo menos 10 caracteres"),
  image_url: z.string().default("/placeholder.svg"),
  tags: z.string().transform(value => 
    value.split(",").map(tag => tag.trim()).filter(tag => tag !== "")
  ),
  results: z.string().min(1, "O resultado é obrigatório"),
});

type FormValues = z.infer<typeof caseStudySchema>;

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  tags: string[];
  results: string;
}

interface CaseStudyDialogProps {
  open: boolean;
  onClose: (refetch?: boolean) => void;
  caseStudy: CaseStudy | null;
}

const CaseStudyDialog: React.FC<CaseStudyDialogProps> = ({
  open,
  onClose,
  caseStudy,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditing = !!caseStudy;
  
  // Configuração do formulário com react-hook-form e zod
  const form = useForm<FormValues>({
    resolver: zodResolver(caseStudySchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      image_url: "/placeholder.svg",
      tags: "",
      results: "",
    },
  });

  // Preencher o formulário quando estiver editando
  useEffect(() => {
    if (caseStudy) {
      form.reset({
        title: caseStudy.title,
        category: caseStudy.category,
        description: caseStudy.description,
        image_url: caseStudy.image_url,
        tags: caseStudy.tags.join(", "),
        results: caseStudy.results,
      });
    }
  }, [caseStudy, form]);

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      if (isEditing && caseStudy) {
        // Atualizar caso existente
        const { error } = await supabase
          .from("case_studies")
          .update({
            title: data.title,
            category: data.category,
            description: data.description,
            image_url: data.image_url,
            tags: data.tags, // Now this is an array from the transform function
            results: data.results,
          })
          .eq("id", caseStudy.id);

        if (error) throw error;
        toast.success("Caso de sucesso atualizado com sucesso!");
      } else {
        // Criar novo caso
        const { error } = await supabase
          .from("case_studies")
          .insert([{
            title: data.title,
            category: data.category,
            description: data.description,
            image_url: data.image_url,
            tags: data.tags, // Now this is an array from the transform function
            results: data.results,
          }]);

        if (error) throw error;
        toast.success("Caso de sucesso criado com sucesso!");
      }

      // Fechar o diálogo e atualizar a lista
      onClose(true);
    } catch (error) {
      console.error("Erro ao salvar caso:", error);
      toast.error("Erro ao salvar caso de sucesso");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isEditing ? "Editar Caso de Sucesso" : "Novo Caso de Sucesso"}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => onClose()}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título do caso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Aplicativo Mobile, Plataforma Web" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva o caso de sucesso"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (separadas por vírgulas)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: React, Node.js, MongoDB" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="results"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resultados</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: +200% em vendas, -40% em custos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input placeholder="URL da imagem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={() => onClose()}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Salvando..." : isEditing ? "Atualizar" : "Criar"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDialog;
