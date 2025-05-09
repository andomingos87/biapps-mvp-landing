
import { Code, Smartphone, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites responsivos, aplicações web e plataformas personalizadas com as melhores tecnologias do mercado.",
      icon: <Code className="h-10 w-10 text-primary" />,
      features: ["Sistemas Web", "E-commerce", "Portais", "Dashboards"],
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android que oferecem a melhor experiência ao usuário.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      features: ["Apps iOS", "Apps Android", "Flutter", "React Native"],
    },
    {
      title: "Agentes de IA",
      description: "Soluções inteligentes com IA para automatizar processos e melhorar a tomada de decisão.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      features: ["Chatbots", "Assistentes Virtuais", "Análise de Dados", "Machine Learning"],
    },
    {
      title: "Automação de Processos",
      description: "Otimize suas operações com automações inteligentes que economizam tempo e recursos.",
      icon: <Settings className="h-10 w-10 text-primary" />,
      features: ["RPA", "Integração de Sistemas", "Fluxos de Trabalho", "ETL"],
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Oferecemos soluções completas de desenvolvimento para transformar suas ideias em produtos digitais de sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-secondary p-0">
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
