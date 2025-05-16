
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Circle } from "lucide-react";
import BudgetRequestModal from "./BudgetRequestModal";
import CalendlyModal from "./CalendlyModal";
const Hero = () => {
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
  return <section className="bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            Desenvolvimento de Software para Startups
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Desenvolvemos MVPs Web em até 4 semanas <span className="whitespace-nowrap">em até <span className="text-secondary flex items-center inline-flex"><Zap className="h-8 w-8 mr-1 inline" /> 4 semanas</span></span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            Especialistas em desenvolvimento web, mobile, agentes de IA e automações para acelerar o crescimento do seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all" onClick={() => openBudgetModal("mvp")}>
              Iniciar projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-6 text-lg transition-colors" onClick={openCalendlyModal}>
              Agendar conversa
            </Button>
          </div>
          
          <div className="flex items-center mt-10 space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">Mais de <span className="font-bold text-secondary">25+</span> projetos entregues com sucesso</p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>
            <img src="/lovable-uploads/1d5cee63-bf8a-4c13-8331-7f0113f61722.png" alt="Equipe desenvolvendo software" className="relative z-10 max-w-full h-auto object-cover rounded-2xl shadow-2xl border border-gray-100" style={{
            maxHeight: "450px"
          }} />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl z-20">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <p className="font-medium">Agenda aberta para novos projetos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-20">
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          <p className="text-gray-500 font-medium">Utilizado por:</p>
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="grayscale hover:grayscale-0 transition-all">
              <div className="bg-gray-200 h-8 w-24 rounded"></div>
            </div>)}
        </div>
      </div>

      <BudgetRequestModal open={isBudgetModalOpen} onOpenChange={setIsBudgetModalOpen} service={selectedService} />
      
      <CalendlyModal open={isCalendlyModalOpen} onOpenChange={setIsCalendlyModalOpen} />
    </section>;
};
export default Hero;
