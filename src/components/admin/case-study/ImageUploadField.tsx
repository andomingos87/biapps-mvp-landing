
import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Image, Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadFieldProps {
  control: Control<any>;
  name: string;
  label: string;
}

const ImageUploadField = ({ control, name, label }: ImageUploadFieldProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Por favor, selecione uma imagem válida");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("A imagem deve ser menor que 5MB");
      return;
    }

    setIsUploading(true);

    try {
      // Create a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}-${Date.now()}.${fileExt}`;
      const filePath = `case-studies/${fileName}`;

      // Upload image to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('case_study_images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('case_study_images')
        .getPublicUrl(filePath);

      // Set the image URL value in the form
      onChange(publicUrl);
      setPreview(publicUrl);
      toast.success("Imagem carregada com sucesso!");

    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error("Erro ao carregar imagem");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="space-y-4">
            {preview || field.value && field.value !== '/placeholder.svg' ? (
              <div className="relative w-full max-w-md h-48 border rounded-md overflow-hidden">
                <img
                  src={preview || field.value}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-48 bg-muted/20 border border-dashed rounded-md">
                <Image className="h-10 w-10 text-muted-foreground opacity-50" />
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <FormControl>
                <Input 
                  type="text" 
                  className="flex-1"
                  placeholder="URL da imagem" 
                  {...field} 
                />
              </FormControl>
              <div className="flex-none">
                <Input
                  type="file"
                  accept="image/*"
                  id={`image-upload-${name}`}
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, field.onChange)}
                  disabled={isUploading}
                />
                <label htmlFor={`image-upload-${name}`}>
                  <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer"
                    disabled={isUploading}
                    asChild
                  >
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      {isUploading ? "Carregando..." : "Carregar imagem"}
                    </span>
                  </Button>
                </label>
              </div>
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageUploadField;
