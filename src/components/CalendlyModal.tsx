
import React, { useEffect } from "react";
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
  // Load Calendly script when the modal is opened
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
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
                data-url="https://calendly.com/d/demo"
                style={{ minWidth: '320px' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 calendly-loading">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <span className="ml-2 text-gray-700">Carregando calendário...</span>
              </div>
            </>
          )}
        </div>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                if (window.Calendly) {
                  const loaders = document.querySelectorAll('.calendly-loading');
                  loaders.forEach(loader => {
                    loader.style.display = 'none';
                  });
                }
              }
            `,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
