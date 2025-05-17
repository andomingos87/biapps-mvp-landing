
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { caseStudySchema, CaseStudyFormValues, CaseStudy } from "./schema";

interface CaseStudyFormProps {
  caseStudy: CaseStudy | null;
  onClose: (refetch?: boolean) => void;
}

const CaseStudyForm = ({ caseStudy, onClose }: CaseStudyFormProps) => {
  const isEditing = !!caseStudy;
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form configuration with react-hook-form and zod
  const form = useForm<CaseStudyFormValues>({
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

  // Fill form when editing an existing case study
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

  const handleSubmit = async (data: CaseStudyFormValues) => {
    setIsSubmitting(true);
    
    // Transform data according to schema (convert tags to array)
    const transformedData = caseStudySchema.parse(data);

    try {
      if (isEditing && caseStudy) {
        // Update existing case
        const { error } = await supabase
          .from("case_studies")
          .update({
            title: transformedData.title,
            category: transformedData.category,
            description: transformedData.description,
            image_url: transformedData.image_url,
            tags: transformedData.tags,
            results: transformedData.results,
          })
          .eq("id", caseStudy.id);

        if (error) throw error;
        toast.success("Caso de sucesso atualizado com sucesso!");
      } else {
        // Create new case
        const { error } = await supabase
          .from("case_studies")
          .insert([{
            title: transformedData.title,
            category: transformedData.category,
            description: transformedData.description,
            image_url: transformedData.image_url,
            tags: transformedData.tags,
            results: transformedData.results,
          }]);

        if (error) throw error;
        toast.success("Caso de sucesso criado com sucesso!");
      }

      // Close dialog and update the list
      onClose(true);
    } catch (error) {
      console.error("Erro ao salvar caso:", error);
      toast.error("Erro ao salvar caso de sucesso");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
};

export default CaseStudyForm;
