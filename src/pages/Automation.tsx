
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Settings, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Automation = () => {
  const technologies = [
    { name: "Zapier", description: "Plataforma de integração e automação de apps" },
    { name: "Power Automate", description: "Ferramenta de automação de fluxos de trabalho da Microsoft" },
    { name: "UiPath", description: "Plataforma líder de automação robótica de processos (RPA)" },
    { name: "Make (Integromat)", description: "Plataforma visual para automação de processos" },
    { name: "Python", description: "Linguagem de programação para automação e scripts personalizados" },
    { name: "Node.js", description: "Ambiente de execução JavaScript para automações backend" },
  ];

  const faqs = [
    {
      question: "Que tipos de processos podem ser automatizados?",
      answer: "Uma grande variedade de processos pode ser automatizada: entrada de dados, geração de relatórios, manipulação de arquivos, verificações de conformidade, integração entre sistemas, processamento de pedidos, aprovações de fluxos de trabalho, e muito mais. Em geral, tarefas repetitivas, baseadas em regras e que seguem padrões previsíveis são excelentes candidatas para automação."
    },
    {
      question: "Quanto tempo leva para implementar uma solução de automação?",
      answer: "O tempo de implementação varia de acordo com a complexidade do processo. Automações simples podem ser implementadas em algumas semanas, enquanto projetos mais complexos podem levar de 2 a 3 meses. Trabalhamos com uma abordagem incremental, entregando valor rapidamente com pequenos lançamentos e adicionando mais funcionalidades ao longo do tempo."
    },
    {
      question: "Como medir o retorno sobre investimento (ROI) da automação?",
      answer: "O ROI da automação pode ser medido de várias maneiras: redução de custos operacionais, economia de tempo, melhoria na precisão, aumento da produtividade, maior satisfação de clientes e funcionários, e redução de erros. Ajudamos nossos clientes a estabelecer métricas claras e sistemas de monitoramento para quantificar os benefícios da automação em termos financeiros e operacionais."
    },
    {
      question: "É possível integrar sistemas legados com novas ferramentas de automação?",
      answer: "Sim, temos experiência em integrar sistemas legados com tecnologias modernas de automação. Utilizamos várias abordagens como APIs, RPA (Automação Robótica de Processos), web scraping, integração com bancos de dados e desenvolvimento de conectores personalizados. Mesmo sistemas antigos sem APIs podem ser integrados através de técnicas avançadas de automação."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
              Automação de Processos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Otimize operações com <span className="text-primary">automação</span> inteligente de processos
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Transforme tarefas manuais e repetitivas em fluxos de trabalho automatizados que economizam tempo, reduzem erros e aumentam a produtividade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg shadow-lg shadow-primary/30 transition-all">
                Solicitar consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-6 text-lg transition-colors">
                Ver casos de uso
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Automação de processos" 
                className="relative z-10 max-w-full h-auto rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nossas Soluções de Automação</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Desenvolvemos soluções de automação sob medida que simplificam operações, integram sistemas e impulsionam a eficiência operacional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Equipe de automação" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Transformação Digital através de Automação</h3>
              <p className="text-gray-700 mb-6">
                Nossa equipe de especialistas em automação identifica processos ineficientes e os transforma em fluxos de trabalho automatizados que economizam recursos valiosos e permitem que sua equipe se concentre em atividades de maior valor.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Automação de Fluxos de Trabalho</h4>
                    <p className="text-gray-700">
                      Transforme processos manuais em fluxos automatizados que seguem regras de negócio personalizadas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Integração de Sistemas</h4>
                    <p className="text-gray-700">
                      Conecte aplicativos, plataformas e sistemas para criar um ecossistema empresarial unificado.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Automação Robótica de Processos (RPA)</h4>
                    <p className="text-gray-700">
                      Implante robôs de software que simulam ações humanas para processar tarefas repetitivas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits and Results */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios e Resultados</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Descubra como a automação pode transformar seu negócio, da redução de custos ao aumento da precisão.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Economia de Tempo</h3>
                <p className="text-gray-700">
                  Reduza drasticamente o tempo gasto em tarefas manuais e repetitivas, permitindo que sua equipe se concentre em trabalhos estratégicos.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">-80%</span>
                  <span className="ml-2 text-gray-500">em tempo operacional</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Redução de Custos</h3>
                <p className="text-gray-700">
                  Diminua custos operacionais ao otimizar processos e reduzir a necessidade de intervenção manual em tarefas rotineiras.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">-45%</span>
                  <span className="ml-2 text-gray-500">em custos operacionais</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Maior Precisão</h3>
                <p className="text-gray-700">
                  Elimine erros humanos e garanta consistência em todos os processos através de automações programadas com precisão.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+99.9%</span>
                  <span className="ml-2 text-gray-500">de precisão</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Uma abordagem estruturada para transformar processos manuais em fluxos de trabalho automatizados.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Análise e Mapeamento de Processos</h3>
                <p className="text-gray-700 mb-4">
                  Identificamos e mapeamos detalhadamente os processos atuais, identificando gargalos, ineficiências e oportunidades de automação.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Mapeamento de processos existentes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Identificação de gargalos e ineficiências</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Priorização de oportunidades</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Análise e Mapeamento de Processos" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Design da Solução" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Design da Solução</h3>
                <p className="text-gray-700 mb-4">
                  Projetamos soluções de automação otimizadas, selecionando as tecnologias mais adequadas e definindo os novos fluxos de trabalho.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Redesenho de processos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Seleção de ferramentas e tecnologias</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Prototipagem e validação</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Desenvolvimento e Implementação</h3>
                <p className="text-gray-700 mb-4">
                  Desenvolvemos e implementamos as soluções de automação, integrando sistemas e configurando fluxos de trabalho automatizados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Desenvolvimento de automações</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Integração de sistemas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Testes e validação</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Desenvolvimento e Implementação" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Treinamento e Monitoramento" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Treinamento e Monitoramento</h3>
                <p className="text-gray-700 mb-4">
                  Realizamos treinamentos para sua equipe e implementamos sistemas de monitoramento e aprimoramento contínuo das automações.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Capacitação de usuários</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Monitoramento de desempenho</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Melhoria contínua</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies and Tools */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias e Ferramentas</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Utilizamos as ferramentas e plataformas mais eficientes para criar soluções de automação robustas e escaláveis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{tech.name}</h3>
                  </div>
                  <p className="text-gray-700">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-center">Outras tecnologias e ferramentas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Automation Anywhere", "Blue Prism", "n8n", "Retool", "Airtable", "Monday.com", "Notion", "Jira", "Microsoft Power Platform", "Google Apps Script", "AWS Lambda", "Webhooks"].map((item, index) => (
                <Badge key={index} variant="outline" className="bg-white text-gray-700 py-2 px-4 text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estudos de Caso</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Conheça alguns dos projetos de automação de sucesso que implementamos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-52 bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Case Study ${item}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-white shadow-md">
                    {["RPA", "Workflow Automation", "Integração de Sistemas"][item-1]}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {["Automação de Backoffice", "Fluxo de Aprovações", "Integração de Vendas"][item-1]}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {["Automação de processos de backoffice para uma empresa financeira, reduzindo 85% do tempo em processamento de documentos.", 
                      "Sistema de workflow para aprovações de pedidos de compra com integrações entre múltiplas plataformas e notificações automatizadas.", 
                      "Integração entre plataforma de e-commerce e sistema ERP para sincronização automática de pedidos, estoque e dados de clientes."][item-1]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      ["UiPath", "Python", "SQL"],
                      ["Power Automate", "SharePoint", "Teams"],
                      ["Zapier", "Make", "REST APIs"]
                    ][item-1].map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      <strong className="block text-primary">
                        {["-85% tempo processo", "-60% ciclo de aprovação", "+99% precisão dados"][item-1]}
                      </strong>
                    </div>
                    <Button variant="link" className="text-secondary p-0 flex items-center group">
                      Ver caso completo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-2 text-lg transition-colors">
              Ver mais projetos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              O que nossos clientes dizem sobre nossas soluções de automação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6">
                    "{["A automação desenvolvida pela BiApps para nosso processo de backoffice reduziu nosso tempo de processamento de documentos em 85%. O impacto na eficiência operacional foi imediato e significativo.",
                      "Nosso fluxo de aprovações era um pesadelo antes da BiApps implementar um sistema automatizado. Agora, o ciclo de aprovação foi reduzido em 60% e temos total visibilidade do processo.",
                      "A integração entre nosso e-commerce e o ERP eliminou a necessidade de entrada manual de dados. A precisão aumentou para 99% e nossa equipe pode se concentrar em atividades estratégicas."][item-1]}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-semibold">
                        {["Pedro Almeida", "Carla Santos", "Marcelo Oliveira"][item-1]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {["Diretor de Operações, FinTech SA", "Gerente de Compras, Indústria ABC", "CEO, E-commerce XYZ"][item-1]}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Respostas para as dúvidas mais comuns sobre automação de processos.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <div className="inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-md text-primary font-medium hover:bg-primary/20 transition-colors">
              contato@biapps.com.br
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-secondary skew-y-2 transform origin-bottom-right z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-2xl p-10 md:p-16">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
              Pronto para automatizar seus processos?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Transforme sua operação com automação inteligente
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
              Entre em contato hoje mesmo para uma consultoria gratuita e descubra como a automação pode transformar seus processos e impulsionar a eficiência do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                Solicitar consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg transition-colors">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Automation;
