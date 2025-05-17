
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CaseStudyForm from "./case-study/CaseStudyForm";
import { CaseStudy } from "./case-study/schema";

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
  const isEditing = !!caseStudy;

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

        <CaseStudyForm 
          caseStudy={caseStudy} 
          onClose={onClose} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDialog;
