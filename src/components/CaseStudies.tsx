
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  tags: string[];
  results: string;
}

const CaseStudies = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Erro ao buscar casos:", error);
      } else {
        setCases(data || []);
      }
      setIsLoading(false);
    };

    fetchCases();
  }, []);

  return (
    <section id="cases" className="section bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
            Casos de Sucesso
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos que entregam resultados</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
            <p className="mt-4">Carregando casos...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-52 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={caseStudy.image_url} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-white shadow-md">
                    {caseStudy.category}
                  </Badge>
                  <div className="absolute bottom-0 right-0 bg-white py-1 px-3 font-bold text-primary rounded-tl-lg">
                    {caseStudy.results}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                  <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-secondary/5 text-secondary border-secondary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="text-secondary p-0 flex items-center group">
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-2 text-lg transition-colors">
            Ver mais casos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
