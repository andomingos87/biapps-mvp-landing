
import React from "react";
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onCancel: () => void;
  isSubmitting: boolean;
  isEditing: boolean;
}

const FormActions = ({ onCancel, isSubmitting, isEditing }: FormActionsProps) => {
  return (
    <div className="flex justify-end space-x-4 pt-4">
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancelar
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Salvando..." : isEditing ? "Atualizar" : "Criar"}
      </Button>
    </div>
  );
};

export default FormActions;
