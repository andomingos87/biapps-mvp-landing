
import { useState } from "react";
import { Code, Smartphone, Zap, Clock, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BudgetRequestModal from "./BudgetRequestModal";

const Services = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  
  const openModal = (serviceType: string) => {
    setSelectedService(serviceType);
    setIsModalOpen(true);
  };

  const services = [{
    title: "MVP Web",
    icon: <Code className="h-8 w-8 text-primary" />,
    description: "Transforme sua ideia em uma aplicação web funcional, responsiva e pronta para validar com clientes reais.",
    delivery: "Entrega em até 4 semanas",
    benefits: ["Interface responsiva para desktop e mobile", "Integração com APIs e serviços externos", "Dashboard de gerenciamento personalizado", "Hospedagem e suporte técnico por 1 mês"],
    price: "A partir de R$17.900",
    iconColor: "text-primary",
    path: "/web-development",
    serviceType: "mvp",
    ctaText: "Solicitar orçamento"
  }, {
    title: "MVP Mobile",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    description: "Desenvolva um aplicativo mobile nativo para iOS e Android com experiência de usuário otimizada.",
    delivery: "Entrega em até 4 semanas",
    benefits: ["Apps nativos para iOS e Android", "Interface intuitiva e design moderno", "Notificações push e recursos offline", "Publicação nas lojas App Store e Google Play"],
    price: "A partir de R$19.900",
    iconColor: "text-primary",
    path: "/mobile-development",
    serviceType: "mobile",
    ctaText: "Solicitar orçamento"
  }, {
    title: "MVP Agente de IA",
    icon: <Zap className="h-8 w-8 text-primary" />,
    description: "Crie um assistente virtual inteligente que automatiza tarefas e oferece suporte 24/7 para seus clientes.",
    delivery: "Entrega em até 4 semanas",
    benefits: ["IA treinada com dados do seu negócio", "Integração com WhatsApp e Telegram", "Painel de administração e relatórios", "Melhoria contínua com machine learning"],
    price: "A partir de R$19.900",
    iconColor: "text-primary",
    path: "/ai-agents",
    serviceType: "ai",
    ctaText: "Solicitar orçamento"
  }];
  
  return <section id="services" className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções completas para seu negócio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Oferecemos soluções completas de desenvolvimento para transformar suas ideias em produtos digitais de sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => <Card key={index} className="border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="rounded-full w-14 h-14 flex items-center justify-center mb-4 bg-gray-50 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <div className="flex items-center text-gray-600 mt-2 gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm font-medium">{service.delivery}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-3 flex flex-col flex-grow">
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-lg mb-3 text-secondary">Benefícios</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <Check className="min-w-5 h-5 text-primary mt-0.5" />
                        <span>{benefit}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="mt-auto space-y-4">
                  <Button 
                    className="w-full text-base font-semibold py-6" 
                    onClick={() => openModal(service.serviceType)}
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>

      <BudgetRequestModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        service={selectedService}
      />
    </section>;
};
export default Services;
