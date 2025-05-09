
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Zap, 
  Users, 
  Settings
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Ágil",
      description: "Metodologia que permite entregas rápidas e contínuas, com flexibilidade para adaptações durante o processo."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Equipe Multidisciplinar",
      description: "Profissionais especializados em diversas áreas da tecnologia para oferecer soluções completas."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Tecnologias de Ponta",
      description: "Utilizamos as tecnologias mais modernas e eficientes do mercado para garantir a qualidade dos nossos projetos."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Compromisso com Prazos",
      description: "Entregas dentro do prazo acordado, com transparência e comunicação constante durante todo o processo."
    },
  ];

  return (
    <section id="differentials" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary mb-4">O QUE NOS DIFERENCIA</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Nossos diferenciais são o que nos tornam a escolha certa para o desenvolvimento do seu próximo projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentials.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto bg-white p-6 rounded-full shadow-md inline-flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Processo de Trabalho Eficiente</h3>
                <p className="text-gray-700 mb-6">
                  Nosso processo de trabalho é focado em resultados, com etapas claras e bem definidas para garantir o sucesso do seu projeto.
                </p>
                
                <div className="space-y-4">
                  {["Discovery e Planejamento", "Design e Prototipação", "Desenvolvimento Ágil", "Testes e Validação", "Lançamento e Suporte"].map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">
                        {idx + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-secondary p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Por que escolher a BiApps?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Mais de 5 anos de experiência em desenvolvimento</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Mais de 50 projetos entregues com sucesso</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Equipe de especialistas em diversas tecnologias</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>98% de clientes satisfeitos</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Suporte contínuo após o lançamento</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
