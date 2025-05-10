
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Smartphone, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileDevelopment = () => {
  const technologies = [
    { name: "React Native", description: "Framework para desenvolvimento cross-platform" },
    { name: "Flutter", description: "SDK do Google para apps nativos multiplataforma" },
    { name: "Swift", description: "Linguagem para desenvolvimento iOS nativo" },
    { name: "Kotlin", description: "Linguagem para desenvolvimento Android nativo" },
    { name: "Firebase", description: "Plataforma para desenvolvimento de apps" },
    { name: "AWS Amplify", description: "Framework para desenvolvimento mobile escalável" },
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um aplicativo mobile?",
      answer: "O tempo de desenvolvimento de um aplicativo móvel varia dependendo da complexidade. Aplicativos simples podem levar de 2 a 3 meses, enquanto aplicativos mais complexos podem levar de 4 a 8 meses. Durante nossa reunião inicial, forneceremos uma estimativa detalhada com base nos seus requisitos específicos."
    },
    {
      question: "Vocês desenvolvem para iOS e Android?",
      answer: "Sim, desenvolvemos aplicativos para ambas as plataformas. Utilizamos tecnologias cross-platform como React Native e Flutter para criar aplicativos que funcionam em iOS e Android a partir de uma base de código única, economizando tempo e recursos. Também oferecemos desenvolvimento nativo quando necessário para requisitos específicos de performance ou acesso a recursos da plataforma."
    },
    {
      question: "Como funciona o processo de publicação nas lojas de aplicativos?",
      answer: "Gerenciamos todo o processo de publicação nas lojas App Store (iOS) e Google Play (Android). Isso inclui a preparação dos assets necessários (ícones, screenshots, descrições), configuração das contas de desenvolvedor, submissão do aplicativo, e acompanhamento do processo de revisão. Também cuidamos das atualizações subsequentes do aplicativo conforme necessário."
    },
    {
      question: "É possível integrar meu aplicativo com sistemas existentes?",
      answer: "Sim, nossos aplicativos móveis podem ser integrados com sistemas existentes como ERPs, CRMs, e-commerce, APIs de pagamento, entre outros. Desenvolvemos APIs personalizadas quando necessário para garantir uma comunicação eficiente entre seu aplicativo mobile e seus sistemas atuais."
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
              Desenvolvimento Mobile
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Aplicativos <span className="text-primary">inovadores</span> que transformam experiências
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Criamos aplicativos móveis para iOS e Android que oferecem experiências excepcionais e impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg shadow-lg shadow-primary/30 transition-all">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-6 text-lg transition-colors">
                Ver portfolio
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Desenvolvimento Mobile" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosso Desenvolvimento Mobile</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Desenvolvemos aplicativos que elevam a experiência do usuário e geram resultados tangíveis para seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Equipe de desenvolvimento mobile" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Especialistas em Experiências Móveis</h3>
              <p className="text-gray-700 mb-6">
                Nossa equipe especializada em desenvolvimento mobile cria aplicativos que não só impressionam visualmente, mas também oferecem funcionalidade excepcional e desempenho otimizado em todos os dispositivos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Aplicativos Multiplataforma</h4>
                    <p className="text-gray-700">
                      Soluções para iOS e Android a partir de uma base de código única, economizando tempo e recursos.
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
                    <h4 className="font-semibold text-lg mb-1">Design Centrado no Usuário</h4>
                    <p className="text-gray-700">
                      Interfaces intuitivas e experiências envolventes que mantêm os usuários engajados.
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
                    <h4 className="font-semibold text-lg mb-1">Desenvolvimento Nativo quando Necessário</h4>
                    <p className="text-gray-700">
                      Soluções nativas para iOS e Android quando requisitos específicos de performance são essenciais.
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
              Descubra como nossos aplicativos móveis geram resultados significativos para os negócios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Engajamento do Usuário</h3>
                <p className="text-gray-700">
                  Aplicativos móveis oferecem experiências personalizadas que aumentam significativamente o engajamento e retenção de usuários.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+280%</span>
                  <span className="ml-2 text-gray-500">em engajamento</span>
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
                <h3 className="text-xl font-bold mb-3">Fidelidade de Cliente</h3>
                <p className="text-gray-700">
                  Apps bem desenvolvidos aumentam a fidelidade da marca e criam relacionamentos mais duradouros com os clientes.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+65%</span>
                  <span className="ml-2 text-gray-500">em retenção</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Aumento de Receita</h3>
                <p className="text-gray-700">
                  Apps podem gerar novas fontes de receita através de vendas in-app, assinaturas e aumento de conversões.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+200%</span>
                  <span className="ml-2 text-gray-500">em transações</span>
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
              Uma abordagem estruturada para entregar aplicativos móveis de alta qualidade.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Estratégia e Planejamento</h3>
                <p className="text-gray-700 mb-4">
                  Definimos a estratégia do aplicativo, identificando público-alvo, objetivos de negócio, funcionalidades essenciais e diferenciadores competitivos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Análise de mercado e concorrência</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Definição de KPIs e métricas de sucesso</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Arquitetura da solução</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Estratégia e Planejamento" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Design UX/UI" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Design UX/UI</h3>
                <p className="text-gray-700 mb-4">
                  Criamos wireframes, protótipos interativos e designs visuais que priorizam a experiência do usuário e seguem as diretrizes das plataformas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Wireframes e fluxos de usuário</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Design visual alinhado à identidade da marca</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Protótipos interativos e testes de usabilidade</span>
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
                <h3 className="text-2xl font-bold mb-4">Desenvolvimento</h3>
                <p className="text-gray-700 mb-4">
                  Nossa equipe de desenvolvimento transforma os designs em código funcional, seguindo as melhores práticas e arquiteturas modernas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Desenvolvimento ágil com sprints</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Implementação de funcionalidades</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Integração com APIs e serviços</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Desenvolvimento" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Testes e Lançamento" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Testes e Lançamento</h3>
                <p className="text-gray-700 mb-4">
                  Realizamos testes rigorosos para garantir a qualidade, seguidos pelo lançamento nas lojas de aplicativos e suporte contínuo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>QA e testes em múltiplos dispositivos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Publicação nas lojas de aplicativos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Monitoramento e analytics</span>
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
              Utilizamos as tecnologias mais avançadas para desenvolver aplicativos móveis de alta qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-6 w-6 text-primary mr-2" />
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
              {["TypeScript", "Redux", "GraphQL", "REST APIs", "Auth0", "OneSignal", "AWS", "Google Cloud", "CI/CD", "Jest", "Detox", "Appium"].map((item, index) => (
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
              Conheça alguns dos aplicativos móveis de sucesso que desenvolvemos.
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
                    {["App de Finanças", "App de Delivery", "App de Saúde"][item-1]}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {["FinApp - Gestão Financeira", "FastFood - Delivery", "HealthTrack - Monitoramento"][item-1]}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {["Aplicativo de gestão financeira pessoal com controle de gastos, investimentos e metas financeiras.", 
                      "Sistema de delivery com rastreamento em tempo real, pedidos personalizados e programa de fidelidade.", 
                      "Aplicativo de monitoramento de saúde com integração de dispositivos vestíveis e análise de dados."][item-1]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      ["React Native", "Firebase", "Redux"],
                      ["Flutter", "Node.js", "MongoDB"],
                      ["Swift", "Kotlin", "AWS"]
                    ][item-1].map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      <strong className="block text-primary">
                        {["+185% usuários ativos", "+220% em pedidos", "-40% abandono"][item-1]}
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
              O que nossos clientes dizem sobre nossos serviços de desenvolvimento mobile.
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
                    "{["A BiApps entregou um aplicativo excepcional que superou nossas expectativas. O processo foi transparente e o aplicativo tem sido fundamental para o crescimento do nosso negócio.",
                      "Desde o lançamento do nosso aplicativo de delivery, desenvolvido pela BiApps, vimos um crescimento de 220% nos pedidos online. A equipe foi incrivelmente profissional e dedicada.",
                      "O aplicativo de saúde desenvolvido pela BiApps revolucionou a forma como interagimos com nossos pacientes. A interface intuitiva e as funcionalidades avançadas têm recebido elogios constantes."][item-1]}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-semibold">
                        {["João Silva", "Mariana Costa", "Dr. Paulo Mendes"][item-1]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {["CEO, FinTech Ltda", "COO, FastFood Delivery", "Diretor Médico, HealthTrack"][item-1]}
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
              Respostas para as dúvidas mais comuns sobre desenvolvimento de aplicativos móveis.
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
              Pronto para criar seu aplicativo?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Transforme sua ideia em um aplicativo de sucesso
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
              Entre em contato hoje mesmo para uma consulta gratuita e descubra como podemos ajudar a desenvolver o aplicativo móvel perfeito para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                Solicitar orçamento
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

export default MobileDevelopment;
