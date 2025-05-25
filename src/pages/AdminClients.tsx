import { useEffect, useState } from "react";
import { PlusCircle, Trash2, LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import ClientDialog from "@/components/admin/ClientDialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Client } from '@/types';

export default function AdminClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar autenticação (igual ao AdminCaseStudies)
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        toast.error("Você precisa estar autenticado para acessar esta página");
        window.location.href = "/auth";
        return;
      }
      setIsAuthenticated(true);
      fetchClients();
    };
    checkAuth();
  }, []);

  const fetchClients = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("clients")
      .select("id, companyname, contactname, email, whatsapp, projectname, category, contracttype, name, created_at")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Erro ao carregar clientes");
    } else {
      setClients(data || []);
    }
    setIsLoading(false);
  };

  const handleCreate = async (client: Omit<Client, 'id' | 'created_at'> & { password: string }) => {
    // Adiciona também o campo 'name' para compatibilidade
    const { data, error } = await supabase
      .from("clients")
      .insert([{ ...client, name: client.companyname }]);
    if (error) {
      toast.error("Erro ao cadastrar cliente: " + error.message);
    } else {
      toast.success("Cliente cadastrado com sucesso!");
      fetchClients();
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      const { error } = await supabase.from("clients").delete().eq("id", id);
      if (error) {
        toast.error("Erro ao excluir cliente");
      } else {
        toast.success("Cliente excluído com sucesso");
        fetchClients();
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Erro ao fazer logout");
    } else {
      toast.success("Logout realizado com sucesso");
      window.location.href = "/";
    }
  };

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
          <h1 className="text-3xl font-bold">Gerenciamento de Clientes</h1>
          <div className="flex gap-2">
            <Button onClick={() => setIsDialogOpen(true)} className="bg-primary hover:bg-primary/90">
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo Cliente
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
            <p className="mt-4">Carregando clientes...</p>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Nenhum cliente cadastrado</p>
            <Button onClick={() => setIsDialogOpen(true)} variant="link" className="text-primary mt-2">
              Clique aqui para cadastrar o primeiro
            </Button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contato</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Whatsapp</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projeto</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contrato</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Cadastro</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="px-4 py-4 whitespace-nowrap font-medium">{client.companyname}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.contactname}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.email}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.whatsapp}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.projectname}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.category}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.contracttype}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{client.created_at ? new Date(client.created_at).toLocaleDateString() : '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <Button variant="outline" size="icon" className="text-red-500 hover:text-red-700" onClick={() => handleDelete(client.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <ClientDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSave={handleCreate} />
      </main>
      <Footer />
    </div>
  );
}
