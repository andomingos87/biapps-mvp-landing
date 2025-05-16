
import { supabase } from "@/integrations/supabase/client";
import { FormData } from "./schema";

// Function to submit form data to Supabase
export async function submitBudgetRequest(data: FormData): Promise<void> {
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
    throw error;
  }
}
