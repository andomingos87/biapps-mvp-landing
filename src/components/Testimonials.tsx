
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "A BiApps transformou nossa ideia em um produto digital incrível em tempo recorde. O processo foi transparente e o resultado superou nossas expectativas. Recomendo fortemente!",
      author: "Ana Silva",
      role: "CEO, TechStart",
      avatar: "AS",
      rating: 5
    },
    {
      text: "Contratar a BiApps foi a melhor decisão que tomamos para o desenvolvimento do nosso aplicativo. Equipe profissional, comprometida e com um conhecimento técnico impressionante.",
      author: "Carlos Mendes",
      role: "CTO, InnovateBR",
      avatar: "CM",
      rating: 5
    },
    {
      text: "Excelente experiência com a BiApps! Conseguimos lançar nosso MVP em apenas 8 semanas, com qualidade e dentro do orçamento. O suporte pós-lançamento também é excepcional.",
      author: "Mariana Costa",
      role: "Fundadora, EduTech",
      avatar: "MC",
      rating: 5
    },
    {
      text: "A BiApps não apenas desenvolveu nosso sistema, mas também contribuiu com ideias valiosas que melhoraram significativamente o produto final. Parceiros de verdade!",
      author: "Roberto Alves",
      role: "Diretor de Produto, FinanceApp",
      avatar: "RA",
      rating: 5
    },
  ];

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
    ));
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            A satisfação dos nossos clientes é o nosso melhor indicador de sucesso. Veja o que eles têm a dizer sobre trabalhar conosco.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="border border-gray-100 shadow-sm h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.text}"
                      </blockquote>
                    </CardContent>
                    <CardFooter>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-16 text-center">
          <p className="text-gray-700 font-medium text-lg mb-2">Empresas que confiam em nosso trabalho</p>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="bg-gray-200 h-12 w-32 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
