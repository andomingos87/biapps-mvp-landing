
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Load Calendly script when the modal is opened
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      // Set up event listener to hide loader when Calendly is ready
      script.onload = () => {
        // Wait a bit longer to ensure Calendly is fully initialized
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };

      return () => {
        // Clean up script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        setIsLoading(true);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary">
            Agende uma conversa com nossa equipe
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Escolha um horário conveniente para conversarmos sobre seu projeto.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 h-[600px] relative">
          {open && (
            <>
              <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/biapps-dev1/30min"
                style={{ minWidth: '320px' }}
              ></div>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  <span className="ml-2 text-gray-700">Carregando calendário...</span>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
