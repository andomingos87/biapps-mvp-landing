
import { supabase } from "@/integrations/supabase/client";
import { FormData } from "./schema";

// Error types for budget request submission
export type BudgetRequestError = {
  message: string;
  code: string;
  details?: string;
};

// Function to submit form data to Supabase
export async function submitBudgetRequest(data: FormData): Promise<void> {
  try {
    // Prepare the data for Supabase
    const budgetRequestData = {
      full_name: data.fullName,
      email: data.email,
      whatsapp: data.whatsapp,
      project_stage: data.projectStage,
      solution_types: data.solutionTypes,
      business_segment: data.businessSegment,
      project_goal: data.projectGoal,
      deadline: data.deadline,
      budget: data.budget,
      budget_amount: data.budgetAmount,
      schedule_call: data.scheduleCall
    };
    
    // Insert the data into the budget_requests table
    const { error } = await supabase
      .from('budget_requests')
      .insert(budgetRequestData);
      
    if (error) {
      console.error("Erro ao salvar solicitação:", error);
      
      // Create a more meaningful error object
      const budgetRequestError: BudgetRequestError = {
        message: "Falha ao enviar solicitação de orçamento",
        code: error.code || "unknown",
        details: error.message
      };
      
      throw budgetRequestError;
    }
  } catch (error) {
    // If it's not already our error type, wrap it
    if (!(error as BudgetRequestError).code) {
      const wrappedError: BudgetRequestError = {
        message: "Erro inesperado ao processar solicitação",
        code: "unexpected_error",
        details: String(error)
      };
      throw wrappedError;
    }
    throw error;
  }
}

// Helper function to validate email format (can be used for client-side validation)
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to validate phone number format (can be used for client-side validation)
export const isValidPhone = (phone: string): boolean => {
  // Brazilian phone number with or without formatting
  const phoneRegex = /^(?:\+55|55)?(?:\s|\()?(\d{2})(?:\s|\))?(?:\s|\-)?(9?\d{4})(?:\s|\-)?(\d{4})$/;
  return phoneRegex.test(phone);
};
