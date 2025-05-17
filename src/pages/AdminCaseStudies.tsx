
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Edit, Trash2, LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import CaseStudyDialog from "@/components/admin/CaseStudyDialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  tags: string[];
  results: string;
  created_at: string;
}

const AdminCaseStudies = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<CaseStudy | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Verificar autenticação e redirecionar se não autenticado
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast.error("Você precisa estar autenticado para acessar esta página");
        navigate("/auth");
        return;
      }
      
      setIsAuthenticated(true);
      fetchCases();
    };
    
    checkAuth();
    
    // Monitorar mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchCases = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao buscar casos:", error);
      toast.error("Erro ao carregar casos de sucesso");
    } else {
      setCases(data || []);
    }
    setIsLoading(false);
  };

  const handleEdit = (caseItem: CaseStudy) => {
    setCurrentCase(caseItem);
    setIsDialogOpen(true);
  };

  const handleCreate = () => {
    setCurrentCase(null);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este caso de sucesso?")) {
      const { error } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Erro ao excluir caso:", error);
        toast.error("Erro ao excluir caso de sucesso");
      } else {
        toast.success("Caso de sucesso excluído com sucesso");
        fetchCases();
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast.error("Erro ao fazer logout");
    } else {
      toast.success("Logout realizado com sucesso");
      navigate("/");
    }
  };

  const handleDialogClose = (refetch?: boolean) => {
    setIsDialogOpen(false);
    if (refetch) {
      fetchCases();
    }
  };

  // Mostrar página de carregamento enquanto verifica autenticação
  if (!isAuthenticated && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
          <p className="mt-4">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gerenciamento de Casos de Sucesso</h1>
          <div className="flex gap-2">
            <Button onClick={handleCreate} className="bg-primary hover:bg-primary/90">
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Caso
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em]"></div>
            <p className="mt-4">Carregando casos...</p>
          </div>
        ) : cases.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Nenhum caso de sucesso encontrado</p>
            <Button onClick={handleCreate} variant="link" className="text-primary mt-2">
              Clique aqui para criar o primeiro
            </Button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Resultados</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cases.map((caseItem) => (
                  <TableRow key={caseItem.id}>
                    <TableCell className="font-medium">{caseItem.title}</TableCell>
                    <TableCell>{caseItem.category}</TableCell>
                    <TableCell>
                      {caseItem.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="mr-1 mb-1 bg-secondary/5 text-secondary border-secondary/20">
                          {tag}
                        </Badge>
                      ))}
                    </TableCell>
                    <TableCell>{caseItem.results}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handleEdit(caseItem)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDelete(caseItem.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {isDialogOpen && (
          <CaseStudyDialog
            open={isDialogOpen}
            onClose={handleDialogClose}
            caseStudy={currentCase}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminCaseStudies;
