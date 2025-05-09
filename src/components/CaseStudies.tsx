
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "FinTech Mobile App",
      category: "Aplicativo Mobile",
      description: "Desenvolvimento de um aplicativo financeiro completo para iOS e Android que permite aos usuários gerenciar investimentos e realizar transações.",
      image: "/placeholder.svg",
      tags: ["React Native", "API RESTful", "Firebase"],
      results: "+200% em transações"
    },
    {
      title: "E-commerce B2B",
      category: "Plataforma Web",
      description: "Criação de uma plataforma de e-commerce B2B completa com catálogo personalizado, gestão de pedidos e integração com ERP.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      results: "-40% em custos operacionais"
    },
    {
      title: "Assistente Virtual",
      category: "Agente de IA",
      description: "Desenvolvimento de um assistente virtual baseado em IA para automatizar atendimento ao cliente e direcionar leads qualificados.",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "API Integration"],
      results: "+75% em satisfação"
    },
  ];

  return (
    <section id="cases" className="section bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            Casos de Sucesso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos que entregam resultados</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100">
              <div className="h-52 bg-gray-200 relative overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-white shadow-md">
                  {caseStudy.category}
                </Badge>
                <div className="absolute bottom-0 right-0 bg-white py-1 px-3 font-bold text-primary rounded-tl-lg">
                  {caseStudy.results}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" className="text-secondary p-0 flex items-center group">
                  Ver caso completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-2 text-lg transition-colors">
            Ver mais casos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
