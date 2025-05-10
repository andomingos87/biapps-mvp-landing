
import { Code, Smartphone, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites responsivos, aplicações web e plataformas personalizadas com as melhores tecnologias do mercado.",
      icon: <Code className="h-10 w-10 text-primary" />,
      features: ["Sistemas Web", "E-commerce", "Portais", "Dashboards"],
      gradient: "from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      path: "/web-development"
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android que oferecem a melhor experiência ao usuário.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      features: ["Apps iOS", "Apps Android", "Flutter", "React Native"],
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      path: "/mobile-development"
    },
    {
      title: "Agentes de IA",
      description: "Soluções inteligentes com IA para automatizar processos e melhorar a tomada de decisão.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      features: ["Chatbots", "Assistentes Virtuais", "Análise de Dados", "Machine Learning"],
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      path: "/ai-agents"
    },
    {
      title: "Automação de Processos",
      description: "Otimize suas operações com automações inteligentes que economizam tempo e recursos.",
      icon: <Settings className="h-10 w-10 text-primary" />,
      features: ["RPA", "Integração de Sistemas", "Fluxos de Trabalho", "ETL"],
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      path: "/automation"
    },
  ];

  return (
    <section id="services" className="section bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${service.gradient} overflow-hidden group cursor-pointer`}
              onClick={() => navigate(service.path)}
            >
              <CardHeader className="pb-0">
                <div className={`${service.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-700 mb-6 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="text-secondary p-0 group-hover:text-primary transition-colors">
                  Saiba mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
