
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BudgetRequestModal from "./BudgetRequestModal";
import CalendlyModal from "./CalendlyModal";

const CallToAction = () => {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  
  const openBudgetModal = (serviceType?: string) => {
    setSelectedService(serviceType);
    setIsBudgetModalOpen(true);
  };
  
  const openCalendlyModal = () => {
    setIsCalendlyModalOpen(true);
  };
  
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-secondary skew-y-2 transform origin-bottom-right z-0"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-2xl p-10 md:p-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
            Vamos tornar sua ideia realidade
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            Vamos trabalhar juntos para desenvolver a solução digital que o seu negócio precisa. 
            Entre em contato hoje mesmo e agende uma consulta gratuita com nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              onClick={() => openBudgetModal("mvp")}
            >
              Iniciar projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg transition-colors"
              onClick={openCalendlyModal}
            >
              Agendar conversa
            </Button>
          </div>
          
          <div className="mt-10 bg-gray-50 p-4 rounded-lg inline-flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">Consultoria inicial <span className="font-bold">gratuita</span> e sem compromisso</span>
          </div>
        </div>
      </div>
      
      <BudgetRequestModal 
        open={isBudgetModalOpen} 
        onOpenChange={setIsBudgetModalOpen}
        service={selectedService}
      />
      
      <CalendlyModal 
        open={isCalendlyModalOpen} 
        onOpenChange={setIsCalendlyModalOpen} 
      />
    </section>
  );
};

export default CallToAction;
