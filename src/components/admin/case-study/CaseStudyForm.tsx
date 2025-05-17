
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { caseStudySchema, CaseStudyFormValues, CaseStudy } from "./schema";
import FormTextField from "./FormTextField";
import FormTextareaField from "./FormTextareaField";
import FormActions from "./FormActions";
import ImageUploadField from "./ImageUploadField";

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
        <FormTextField 
          control={form.control} 
          name="title" 
          label="Título" 
          placeholder="Digite o título do caso"
        />
        
        <FormTextField 
          control={form.control} 
          name="category" 
          label="Categoria" 
          placeholder="Ex: Aplicativo Mobile, Plataforma Web"
        />
        
        <FormTextareaField 
          control={form.control} 
          name="description" 
          label="Descrição" 
          placeholder="Descreva o caso de sucesso"
        />
        
        <FormTextField 
          control={form.control} 
          name="tags" 
          label="Tags (separadas por vírgulas)" 
          placeholder="Ex: React, Node.js, MongoDB"
        />
        
        <FormTextField 
          control={form.control} 
          name="results" 
          label="Resultados" 
          placeholder="Ex: +200% em vendas, -40% em custos"
        />
        
        <ImageUploadField 
          control={form.control} 
          name="image_url" 
          label="Imagem"
        />

        <FormActions 
          onCancel={() => onClose()} 
          isSubmitting={isSubmitting} 
          isEditing={isEditing}
        />
      </form>
    </Form>
  );
};

export default CaseStudyForm;
