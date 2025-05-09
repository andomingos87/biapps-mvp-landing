
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Desenvolvimento <span className="gradient-text">ágil</span> de <span className="text-primary">MVPs</span> que transformam ideias em produtos
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Especialistas em desenvolvimento web, mobile, agentes de IA e automações para acelerar o crescimento do seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg">
              Iniciar projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-6 py-6 text-lg">
              Agendar conversa
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <img 
            src="/placeholder.svg" 
            alt="BiApps Development" 
            className="max-w-full h-auto object-cover rounded-lg shadow-lg"
            style={{maxHeight: "400px"}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
