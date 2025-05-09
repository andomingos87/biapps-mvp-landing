
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            Vamos trabalhar juntos para desenvolver a solução digital que o seu negócio precisa. 
            Entre em contato hoje mesmo e agende uma consulta gratuita com nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Iniciar projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Agendar conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
