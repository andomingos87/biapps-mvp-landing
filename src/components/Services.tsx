
import { Code, Smartphone, Zap, Clock, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "MVP Web",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Transforme sua ideia em uma aplicação web funcional, responsiva e pronta para validar com clientes reais.",
      delivery: "Entrega em até 4 semanas",
      benefits: [
        "Interface responsiva para desktop e mobile",
        "Integração com APIs e serviços externos",
        "Dashboard de gerenciamento personalizado",
        "Hospedagem e suporte técnico por 1 mês"
      ],
      price: "A partir de R$17.900",
      gradient: "from-amber-50 via-amber-100 to-amber-200",
      iconBg: "bg-amber-100",
      path: "/web-development",
      ctaText: "Solicitar orçamento"
    },
    {
      title: "MVP Mobile",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      description: "Desenvolva um aplicativo mobile nativo para iOS e Android com experiência de usuário otimizada.",
      delivery: "Entrega em até 4 semanas",
      benefits: [
        "Apps nativos para iOS e Android",
        "Interface intuitiva e design moderno",
        "Notificações push e recursos offline",
        "Publicação nas lojas App Store e Google Play"
      ],
      price: "A partir de R$19.900",
      gradient: "from-blue-50 via-blue-100 to-blue-200",
      iconBg: "bg-blue-100",
      path: "/mobile-development",
      ctaText: "Solicitar orçamento"
    },
    {
      title: "MVP Agente de IA",
      icon: <Zap className="h-10 w-10 text-primary" />,
      description: "Crie um assistente virtual inteligente que automatiza tarefas e oferece suporte 24/7 para seus clientes.",
      delivery: "Entrega em até 4 semanas",
      benefits: [
        "IA treinada com dados do seu negócio",
        "Integração com WhatsApp e Telegram",
        "Painel de administração e relatórios",
        "Melhoria contínua com machine learning"
      ],
      price: "A partir de R$19.900",
      gradient: "from-purple-50 via-purple-100 to-purple-200",
      iconBg: "bg-purple-100",
      path: "/ai-agents",
      ctaText: "Solicitar orçamento"
    },
  ];

  return (
    <section id="services" className="section bg-white py-20">
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
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${service.gradient} overflow-hidden group cursor-pointer h-full`}
            >
              <CardHeader className="pb-2">
                <div className={`${service.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <div className="flex items-center text-gray-600 mt-2 gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm font-medium">{service.delivery}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-3 flex flex-col h-full">
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-secondary">Benefícios</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <Check className="min-w-5 h-5 text-green-600 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto space-y-4">
                  <p className="font-bold text-xl text-secondary">{service.price}</p>
                  
                  <Button 
                    className="w-full text-base font-semibold py-6"
                    onClick={() => navigate(service.path)}
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
