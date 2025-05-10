
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AIAgents = () => {
  const technologies = [
    { name: "OpenAI GPT-4", description: "Modelos avançados de linguagem para conversação natural" },
    { name: "TensorFlow", description: "Framework para machine learning e sistemas de IA" },
    { name: "PyTorch", description: "Biblioteca de machine learning para pesquisa e produção" },
    { name: "Langchain", description: "Framework para desenvolver aplicações com LLMs" },
    { name: "Hugging Face", description: "Plataforma para modelos de NLP e IA generativa" },
    { name: "Amazon Bedrock", description: "Serviço gerenciado para modelos de IA generativa" },
  ];

  const faqs = [
    {
      question: "O que é um agente de IA e como ele pode ajudar minha empresa?",
      answer: "Um agente de IA é um sistema de software que usa inteligência artificial para realizar tarefas específicas com autonomia. Eles podem ajudar sua empresa automatizando processos, fornecendo atendimento ao cliente 24/7, analisando grandes volumes de dados para insights de negócio, personalizando experiências de usuário e muito mais. Os agentes de IA são especialmente úteis para tarefas repetitivas, análise de dados complexos e interações com clientes em escala."
    },
    {
      question: "Quanto tempo leva para desenvolver e implementar um agente de IA?",
      answer: "O tempo de desenvolvimento varia de acordo com a complexidade do agente e seus requisitos. Projetos simples, como chatbots básicos, podem ser implementados em 4-8 semanas. Agentes mais complexos, como sistemas de recomendação avançados ou assistentes virtuais com múltiplas integrações, podem levar de 3 a 6 meses. Fornecemos um cronograma detalhado após a fase inicial de descoberta e planejamento."
    },
    {
      question: "Quais dados são necessários para treinar um agente de IA eficaz?",
      answer: "Os dados necessários dependem do tipo de agente e sua finalidade. Geralmente, precisamos de dados históricos relevantes para a tarefa que o agente executará. Para chatbots de atendimento, por exemplo, são úteis registros de conversas anteriores, FAQs, documentação de produtos e bases de conhecimento. Para sistemas de recomendação, dados de interações do usuário e preferências são essenciais. Trabalhamos com você para identificar, coletar e preparar os dados necessários, sempre seguindo práticas de privacidade e conformidade com regulamentações como LGPD e GDPR."
    },
    {
      question: "Como garantir que os agentes de IA sejam éticos e não contenham vieses?",
      answer: "Implementamos várias práticas para garantir que os agentes de IA sejam éticos e minimizem vieses: utilizamos conjuntos de dados diversos para treinamento, aplicamos técnicas de detecção e mitigação de viés, estabelecemos sistemas de monitoramento contínuo, realizamos testes extensivos com diversos grupos de usuários, e implementamos mecanismos de feedback humano. Também seguimos diretrizes éticas de IA estabelecidas internacionalmente e adaptamos nossos agentes para cumprir regulamentações específicas de cada setor e região."
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
              Agentes de Inteligência Artificial
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Automatize e potencialize com <span className="text-primary">agentes de IA</span> personalizados
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Desenvolva assistentes virtuais inteligentes, sistemas de recomendação e automações avançadas que transformam dados em resultados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg shadow-lg shadow-primary/30 transition-all">
                Solicitar demonstração
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
                alt="Agentes de IA em ação" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nossos Agentes de IA</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Criamos soluções de inteligência artificial que ajudam empresas a automatizar processos, melhorar experiências de cliente e obter insights valiosos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Desenvolvimento de agentes de IA" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">IA Aplicada aos Negócios</h3>
              <p className="text-gray-700 mb-6">
                Nossas soluções de inteligência artificial são desenvolvidas para resolver problemas reais de negócios. Combinamos expertise técnica com compreensão profunda dos desafios empresariais para criar agentes de IA que geram valor mensurável.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Chatbots e Assistentes Virtuais</h4>
                    <p className="text-gray-700">
                      Automatize o atendimento ao cliente com assistentes inteligentes que entendem linguagem natural.
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
                    <h4 className="font-semibold text-lg mb-1">Sistemas de Recomendação</h4>
                    <p className="text-gray-700">
                      Personalize experiências e aumente conversões com recomendações baseadas em dados.
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
                    <h4 className="font-semibold text-lg mb-1">Análise Preditiva</h4>
                    <p className="text-gray-700">
                      Antecipe tendências e comportamentos para tomar decisões baseadas em dados.
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
              Os agentes de IA transformam operações e impulsionam resultados tangíveis para seu negócio.
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
                <h3 className="text-xl font-bold mb-3">Eficiência Operacional</h3>
                <p className="text-gray-700">
                  Automatize processos repetitivos e reduza custos operacionais com agentes de IA que trabalham 24/7.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">-70%</span>
                  <span className="ml-2 text-gray-500">em tempo operacional</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Experiência do Cliente</h3>
                <p className="text-gray-700">
                  Melhore a satisfação do cliente com respostas instantâneas e experiências personalizadas.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+90%</span>
                  <span className="ml-2 text-gray-500">em satisfação</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Crescimento de Receita</h3>
                <p className="text-gray-700">
                  Aumente conversões e vendas com recomendações personalizadas e cross-selling inteligente.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+35%</span>
                  <span className="ml-2 text-gray-500">em conversões</span>
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
              Uma abordagem estruturada para criar agentes de IA eficazes e alinhados aos objetivos de negócio.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Descoberta e Definição</h3>
                <p className="text-gray-700 mb-4">
                  Identificamos os problemas específicos que seu agente de IA resolverá, definimos métricas de sucesso e mapeamos os requisitos técnicos e de dados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Análise de requisitos de negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Definição de casos de uso e KPIs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Avaliação de dados disponíveis</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Descoberta e Definição" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Design e Arquitetura" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Design e Arquitetura</h3>
                <p className="text-gray-700 mb-4">
                  Projetamos a arquitetura técnica do agente, definimos os modelos de IA a serem utilizados e elaboramos o fluxo de interações e tomada de decisões.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Arquitetura de solução</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Seleção de modelos e algoritmos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Design de interface e interações</span>
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
                <h3 className="text-2xl font-bold mb-4">Desenvolvimento e Treinamento</h3>
                <p className="text-gray-700 mb-4">
                  Desenvolvemos o agente de IA, realizamos o treinamento com dados relevantes e implementamos mecanismos de aprendizado contínuo e refinamento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Desenvolvimento do agente</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Treinamento e calibração de modelos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Implementação de feedback loops</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Desenvolvimento e Treinamento" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Implementação e Otimização" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Implementação e Otimização</h3>
                <p className="text-gray-700 mb-4">
                  Implantamos o agente em seu ambiente, realizamos testes de desempenho e estabelecemos sistemas de monitoramento e melhoria contínua.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Integração e implantação</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Testes e validação</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Monitoramento e otimização contínua</span>
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
              Utilizamos tecnologias de ponta para desenvolver agentes de IA eficientes e escaláveis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-primary mr-2" />
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
              {["Google Cloud AI", "Azure AI", "RASA", "FastAPI", "Flask", "Scikit-learn", "Pandas", "NumPy", "Docker", "Kubernetes", "RabbitMQ", "Redis"].map((item, index) => (
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
              Conheça alguns dos projetos de IA de sucesso que desenvolvemos.
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
                    {["Chatbot", "Sistema de Recomendação", "Análise Preditiva"][item-1]}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {["AssistBot - Suporte Inteligente", "RecommendAI - E-commerce", "PredictHealth - Saúde"][item-1]}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {["Assistente virtual inteligente para suporte técnico que reduziu em 85% o tempo de resolução de problemas.", 
                      "Sistema de recomendação personalizada para e-commerce que aumentou as vendas cruzadas em 45%.", 
                      "Modelo preditivo para previsão de riscos de saúde com 92% de precisão em detecção precoce."][item-1]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      ["OpenAI GPT-4", "Python", "Django"],
                      ["TensorFlow", "PyTorch", "AWS"],
                      ["Scikit-learn", "Python", "Google Cloud"]
                    ][item-1].map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      <strong className="block text-primary">
                        {["-85% tempo resolução", "+45% vendas cruzadas", "92% precisão"][item-1]}
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
              O que nossos clientes dizem sobre nossos agentes de IA.
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
                    "{["O chatbot desenvolvido pela BiApps transformou nosso suporte ao cliente. Agora respondemos dúvidas 24/7 e nosso time pode focar em casos mais complexos. A taxa de satisfação dos clientes aumentou significativamente.",
                      "Implementar o sistema de recomendação da BiApps foi um divisor de águas para nossa loja online. As vendas cruzadas aumentaram 45% e os clientes elogiam constantemente as recomendações personalizadas.",
                      "O modelo preditivo desenvolvido para nossa clínica tem uma precisão impressionante. Estamos detectando riscos de saúde precocemente e melhorando significativamente os resultados dos tratamentos."][item-1]}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-semibold">
                        {["Fernanda Lima", "Ricardo Oliveira", "Dra. Juliana Santos"][item-1]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {["CTO, TechSupport Inc", "Diretor de E-commerce, ShopMax", "Diretora Médica, HealthCare Labs"][item-1]}
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
              Respostas para as dúvidas mais comuns sobre agentes de IA.
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
              Pronto para implementar IA no seu negócio?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Transforme dados em resultados com nossos agentes de IA
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
              Entre em contato hoje mesmo para uma demonstração gratuita e descubra como nossos agentes de IA podem resolver desafios específicos do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                Solicitar demonstração
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

export default AIAgents;
