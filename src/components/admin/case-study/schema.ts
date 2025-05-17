
import { z } from "zod";

// Schema for the case study form
export const caseStudySchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  category: z.string().min(1, "A categoria é obrigatória"),
  description: z.string().min(10, "A descrição precisa ter pelo menos 10 caracteres"),
  image_url: z.string().default("/placeholder.svg"),
  tags: z.string().transform(value => 
    value.split(",").map(tag => tag.trim()).filter(tag => tag !== "")
  ),
  results: z.string().min(1, "O resultado é obrigatório"),
});

// Form input types (before transformation)
export type CaseStudyFormValues = {
  title: string;
  category: string;
  description: string;
  image_url: string;
  tags: string;
  results: string;
};

// Case study data interface
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  tags: string[];
  results: string;
}
