
import { Code, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "MVP Web em até 4 semanas",
      icon: <Code className="h-10 w-10 text-primary" />,
      features: ["Aplicações Web Responsivas", "Bubble, Supabase e N8N"],
      details: "Até 3 funcionalidades",
      price: "A partir de R$17.900",
      gradient: "from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      path: "/web-development"
    },
    {
      title: "MVP Mobile em até 4 semanas",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      features: ["Aplicações Mobile", "Flutterflow, Supabase e N8N"],
      details: "Até 3 funcionalidades",
      price: "A partir de R$19.900",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      path: "/mobile-development"
    },
    {
      title: "MVP Agente de IA em até 4 semanas",
      icon: <Zap className="h-10 w-10 text-primary" />,
      features: ["Agentes de IA", "Flutterflow, Supabase e N8N"],
      details: "Até 3 funcionalidades",
      price: "A partir de R$19.900",
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      path: "/ai-agents"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${service.gradient} overflow-hidden group cursor-pointer`}
            >
              <CardHeader className="pb-0">
                <div className={`${service.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col h-full">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto space-y-4">
                  <p className="text-gray-700">{service.details}</p>
                  <p className="font-bold text-lg text-secondary">{service.price}</p>
                  
                  <Button 
                    className="w-full mt-4"
                    onClick={() => navigate(service.path)}
                  >
                    Saiba mais
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
