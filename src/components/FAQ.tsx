
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um MVP?",
      answer: "O tempo de desenvolvimento de um MVP varia de acordo com a complexidade do projeto. Em geral, conseguimos entregar MVPs funcionais em 6 a 12 semanas. Durante nossa reunião inicial, poderemos fornecer uma estimativa mais precisa para o seu projeto específico."
    },
    {
      question: "Qual é o investimento necessário para desenvolver um aplicativo?",
      answer: "O custo de desenvolvimento de um aplicativo depende de diversos fatores, como complexidade, plataformas (iOS, Android ou ambas), funcionalidades e integrações necessárias. Trabalhamos com orçamentos personalizados para atender às necessidades específicas de cada cliente. Entre em contato para uma avaliação gratuita do seu projeto."
    },
    {
      question: "Vocês oferecem suporte após o lançamento do projeto?",
      answer: "Sim, oferecemos planos de suporte e manutenção contínuos após o lançamento do seu projeto. Isso inclui correções de bugs, atualizações de segurança, e pequenas melhorias. Também podemos discutir contratos de desenvolvimento contínuo para implementação de novas funcionalidades."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo de desenvolvimento segue a metodologia ágil, com sprints de 1-2 semanas e entregas contínuas. Iniciamos com uma fase de discovery para entender os requisitos, seguida por design, desenvolvimento, testes e lançamento. Durante todo o processo, mantemos uma comunicação transparente e envolvemos o cliente em cada etapa."
    },
    {
      question: "Vocês assinam acordo de confidencialidade (NDA)?",
      answer: "Sim, respeitamos totalmente a confidencialidade dos nossos clientes. Estamos dispostos a assinar acordos de não divulgação (NDA) antes de discutir detalhes do seu projeto."
    },
    {
      question: "É possível integrar o sistema com outras plataformas que já utilizamos?",
      answer: "Sim, desenvolvemos soluções que se integram com sistemas e APIs existentes. Nossa equipe tem experiência em criar integrações personalizadas com uma ampla variedade de plataformas, incluindo ERPs, CRMs, sistemas de pagamento, e muito mais."
    },
  ];

  return (
    <section id="faq" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos.
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
  );
};

export default FAQ;
