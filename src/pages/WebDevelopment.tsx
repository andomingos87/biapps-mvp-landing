
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebDevelopment = () => {
  const technologies = [
    { name: "React", description: "Biblioteca JavaScript para criar interfaces de usuário" },
    { name: "Next.js", description: "Framework React para produção" },
    { name: "TypeScript", description: "JavaScript com sintaxe para tipos" },
    { name: "Node.js", description: "Ambiente de execução JavaScript server-side" },
    { name: "GraphQL", description: "Linguagem de consulta para APIs" },
    { name: "Tailwind CSS", description: "Framework CSS utilitário" },
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site ou sistema web?",
      answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Websites simples podem ser desenvolvidos em 4-6 semanas, enquanto sistemas web mais complexos podem levar de 3 a 6 meses. Durante nossa reunião inicial, forneceremos uma estimativa detalhada baseada nos seus requisitos específicos."
    },
    {
      question: "Quais tecnologias vocês utilizam para desenvolvimento web?",
      answer: "Trabalhamos com as tecnologias mais modernas e eficientes do mercado, incluindo React, Next.js, TypeScript, Node.js e várias outras. Escolhemos a stack tecnológica mais adequada para cada projeto específico, considerando fatores como escalabilidade, desempenho e necessidades do negócio."
    },
    {
      question: "Como vocês garantem a segurança dos sites e sistemas web?",
      answer: "A segurança é uma prioridade em todos os nossos projetos. Implementamos práticas robustas como autenticação segura, proteção contra injeções SQL, HTTPS/SSL, validação de dados, e conformidade com LGPD/GDPR. Além disso, realizamos testes regulares de segurança e mantemos todas as bibliotecas e dependências atualizadas."
    },
    {
      question: "Os sites desenvolvidos são responsivos para dispositivos móveis?",
      answer: "Sim, todos os nossos sites e aplicações web são desenvolvidos com design responsivo, garantindo uma experiência de usuário excelente em qualquer dispositivo, seja desktop, tablet ou smartphone. Utilizamos abordagens como Mobile First e testes em múltiplos dispositivos para assegurar compatibilidade."
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
              Desenvolvimento Web
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Soluções web <span className="text-primary">personalizadas</span> para impulsionar seu negócio
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Sites responsivos, aplicações web e plataformas customizadas construídas com as melhores práticas e tecnologias de ponta.
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
                alt="Desenvolvimento Web" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosso Desenvolvimento Web</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Combinamos design excepcional com código de alta qualidade para criar experiências web memoráveis que convertem visitantes em clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Equipe de desenvolvimento web" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Excelência em Cada Detalhe</h3>
              <p className="text-gray-700 mb-6">
                Nossa abordagem de desenvolvimento web combina design centrado no usuário com engenharia robusta para criar sites e aplicações que não só impressionam visualmente, mas também oferecem desempenho excepcional e conversões reais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Sites Responsivos</h4>
                    <p className="text-gray-700">
                      Experiências perfeitas em qualquer dispositivo, de smartphones a desktops.
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
                    <h4 className="font-semibold text-lg mb-1">Aplicações Web Escaláveis</h4>
                    <p className="text-gray-700">
                      Sistemas robustos que crescem com seu negócio, desde startups até grandes empresas.
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
                    <h4 className="font-semibold text-lg mb-1">E-commerce Otimizado</h4>
                    <p className="text-gray-700">
                      Plataformas de comércio eletrônico com foco em conversão e experiência de compra.
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
              Nosso desenvolvimento web gera impacto real e mensurável para o seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Aumento de Conversões</h3>
                <p className="text-gray-700">
                  Nossos clientes experimentam em média um aumento de 150% nas taxas de conversão após o lançamento de seus novos sites.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+150%</span>
                  <span className="ml-2 text-gray-500">em conversões</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Tempo de Permanência</h3>
                <p className="text-gray-700">
                  Experiências de usuário otimizadas resultam em visitantes que passam mais tempo explorando seu conteúdo.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">+70%</span>
                  <span className="ml-2 text-gray-500">em tempo no site</span>
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
                <h3 className="text-xl font-bold mb-3">Melhora no SEO</h3>
                <p className="text-gray-700">
                  Otimização técnica completa para melhorar o posicionamento nos resultados de busca do Google.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="text-3xl font-bold text-primary">1ª página</span>
                  <span className="ml-2 text-gray-500">no Google</span>
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
              Metodologia transparente e colaborativa do início ao fim do seu projeto.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Discovery e Planejamento</h3>
                <p className="text-gray-700 mb-4">
                  Iniciamos com uma profunda análise de requisitos, entendendo seus objetivos, público-alvo e necessidades específicas. Definimos o escopo, cronograma e métricas de sucesso.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Análise de requisitos e objetivos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Definição de personas e jornadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Arquitetura de informação</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Discovery e Planejamento" className="rounded-lg w-full" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 bg-gray-50 p-8 rounded-xl">
                <img src="/placeholder.svg" alt="Design e Prototipagem" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Design e Prototipagem</h3>
                <p className="text-gray-700 mb-4">
                  Criamos wireframes e protótipos interativos que demonstram a estrutura, layout e fluxos de navegação. Refinamos o design visual alinhado à sua identidade de marca.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Wireframes e mockups</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Design visual e identidade</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Protótipos interativos</span>
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
                  Nossa equipe de desenvolvimento transforma os designs em código funcional, seguindo as melhores práticas e utilizando as tecnologias mais adequadas para seu projeto.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Desenvolvimento frontend e backend</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Integração de sistemas e APIs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Testes e quality assurance</span>
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
                <img src="/placeholder.svg" alt="Lançamento e Manutenção" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Lançamento e Manutenção</h3>
                <p className="text-gray-700 mb-4">
                  Após todos os testes, lançamos seu projeto e fornecemos suporte contínuo, monitoramento de desempenho e atualizações regulares para garantir o sucesso a longo prazo.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Deploy e lançamento oficial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Monitoramento e análise de desempenho</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Suporte contínuo e atualizações</span>
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
              Utilizamos as tecnologias mais modernas e eficientes para criar soluções web de alta qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{tech.name}</h3>
                  </div>
                  <p className="text-gray-700">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-center">Outras tecnologias e ferramentas que utilizamos</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "MongoDB", "AWS", "Docker", "Git", "Jest", "Redux", "Vue.js"].map((item, index) => (
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
              Conheça alguns dos projetos web de sucesso que desenvolvemos.
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
                    {["E-commerce", "Portal Corporativo", "Web App"][item-1]}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {["Loja Virtual ModaFit", "Portal TechCorp", "Sistema de Gestão EduTech"][item-1]}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {["Desenvolvimento de e-commerce completo com integração de pagamentos e gestão de estoque.", 
                      "Redesign completo do portal corporativo com área de clientes e blog integrado.", 
                      "Sistema web para gestão de cursos online com dashboard analítico e relatórios avançados."][item-1]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      ["React", "Node.js", "MongoDB"],
                      ["WordPress", "PHP", "MySQL"],
                      ["Next.js", "TypeScript", "Firebase"]
                    ][item-1].map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      <strong className="block text-primary">
                        {["+120% em vendas", "+45% tráfego orgânico", "-60% tempo de gestão"][item-1]}
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
              O que nossos clientes dizem sobre nossos serviços de desenvolvimento web.
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
                    "{["A equipe da BiApps entendeu perfeitamente nossas necessidades e entregou um site que superou todas as expectativas. As vendas aumentaram significativamente desde o lançamento.",
                      "O novo portal corporativo desenvolvido pela BiApps trouxe mais credibilidade para nossa marca e facilitou muito a comunicação com nossos clientes. Profissionais extremamente competentes.",
                      "Estamos extremamente satisfeitos com o sistema de gestão desenvolvido. A interface é intuitiva e todas as funcionalidades que precisávamos foram implementadas com perfeição."][item-1]}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <p className="font-semibold">
                        {["Carlos Mendes", "Marina Silva", "Roberto Oliveira"][item-1]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {["CEO, ModaFit", "Diretora de Marketing, TechCorp", "Coordenador, EduTech"][item-1]}
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
              Respostas para as dúvidas mais comuns sobre nosso desenvolvimento web.
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
              Pronto para começar seu projeto web?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
              Vamos criar sua presença digital de sucesso
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
              Entre em contato hoje mesmo para uma consulta gratuita e descubra como podemos transformar sua ideia em uma solução web de alto desempenho.
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

export default WebDevelopment;
