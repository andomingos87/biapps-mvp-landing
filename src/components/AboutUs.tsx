
import { Lightbulb } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a BiApps</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Equipe BiApps" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              Na BiApps, acreditamos que a tecnologia deve ser uma aliada dos negócios, não uma complicação. 
              Nossa missão é desenvolver soluções tecnológicas que realmente resolvem problemas e impulsionam 
              o crescimento dos nossos clientes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Inovação Prática</h4>
                  <p className="text-gray-700">
                    Combinamos as mais recentes tecnologias com metodologias ágeis para entregar produtos que realmente funcionam.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Soluções Personalizadas</h4>
                  <p className="text-gray-700">
                    Cada negócio é único. Por isso, nossas soluções são desenvolvidas sob medida para as necessidades específicas de cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Compromisso com Resultados</h4>
                  <p className="text-gray-700">
                    Nosso sucesso é medido pelo sucesso dos nossos clientes. Trabalhamos incansavelmente para garantir que nossas soluções entreguem valor real.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-800 font-medium">
              Desde 2018, ajudamos empresas de todos os tamanhos a transformar ideias em produtos 
              digitais de sucesso, com mais de 50 projetos entregues e uma taxa de satisfação de 98%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
