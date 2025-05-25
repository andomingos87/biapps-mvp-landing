import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AlertCircle, CheckCircle, Folder, Bug, ArrowRight, Plus } from 'lucide-react';

// Mocked project data (replace with API integration)
const mockProjects = [
  {
    id: 1,
    name: 'Sistema de Gestão',
    status: 'Em desenvolvimento',
    description: 'Sistema completo para gestão de processos internos.',
    bugs: [
      { id: 1, title: 'Erro ao salvar formulário', status: 'Aberto' },
      { id: 2, title: 'Layout quebrado no mobile', status: 'Resolvido' }
    ]
  },
  {
    id: 2,
    name: 'App de Vendas',
    status: 'Concluído',
    description: 'Aplicativo mobile para equipe de vendas.',
    bugs: []
  }
];

import LogoApp from '@/components/LogoApp';
import { useNavigate } from 'react-router-dom';

export default function ClientDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [bugDialogOpen, setBugDialogOpen] = useState(false);

  // Formulário de bug com validação
  const BugSchema = z.object({
    title: z.string().min(3, 'Título obrigatório'),
    description: z.string().min(5, 'Descrição obrigatória'),
  });
  const form = useForm({
    resolver: zodResolver(BugSchema),
    defaultValues: { title: '', description: '' },
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setBugDialogOpen(false);
  };

  const handleBugSubmit = (values) => {
    // Aqui você faria a requisição para API
    alert(`Bug enviado: ${values.title}\n${values.description}`);
    form.reset();
    setBugDialogOpen(false);
  };

  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem('client_id');
    navigate('/ClientLogin');
  }

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white border-b border-muted-foreground/10 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <LogoApp className="w-9 h-9" />
            <span className="font-bold text-lg tracking-tight text-primary">BiApps</span>
          </div>
          <Button variant="outline" onClick={handleLogout} className="ml-2">Sair</Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-2">Área do Cliente</h1>
      <p className="text-muted-foreground mb-8">Acompanhe seus projetos, veja detalhes e solicite correções de bugs facilmente.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Lista de Projetos */}
        <Card className="md:col-span-1">
          <CardContent className="py-6 px-2">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Folder className="w-5 h-5" />Meus Projetos</h2>
            <ScrollArea className="h-[360px] pr-2">
              <ul className="space-y-2">
                {mockProjects.map((proj) => (
                  <li key={proj.id}>
                    <Button
                      variant={selectedProject?.id === proj.id ? "default" : "outline"}
                      className="w-full justify-start flex items-center gap-2"
                      onClick={() => handleProjectClick(proj)}
                    >
                      <ArrowRight className="w-4 h-4 opacity-50" />
                      <span className="flex-1 text-left">{proj.name}</span>
                      <Badge variant={
                        proj.status === 'Concluído' ? 'default' :
                        proj.status === 'Em desenvolvimento' ? 'secondary' : 'outline'
                      }>{proj.status}</Badge>
                    </Button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Detalhes do Projeto */}
        <div className="md:col-span-3">
          <Card>
            <CardContent className="py-8 px-6">
              {selectedProject ? (
                <Tabs defaultValue="details">
                  <TabsList className="mb-6">
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                    <TabsTrigger value="bugs">Bugs/Solicitações</TabsTrigger>
                  </TabsList>

                  {/* Detalhes do projeto */}
                  <TabsContent value="details">
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Folder className="w-5 h-5" /> {selectedProject.name}
                      </h2>
                      <p className="text-muted-foreground mb-2">{selectedProject.description}</p>
                      <Badge className="mb-2" variant={
                        selectedProject.status === 'Concluído' ? 'default' :
                        selectedProject.status === 'Em desenvolvimento' ? 'secondary' : 'outline'
                      }>{selectedProject.status}</Badge>
                    </div>
                  </TabsContent>

                  {/* Bugs/Solicitações */}
                  <TabsContent value="bugs">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2"><Bug className="w-5 h-5" /> Solicitações</h3>
                      <Dialog open={bugDialogOpen} onOpenChange={setBugDialogOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-1" />Nova Solicitação</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Nova Solicitação de Bug</DialogTitle>
                          </DialogHeader>
                          <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleBugSubmit)} className="space-y-4 mt-2">
                              <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Título</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Ex: Erro ao salvar formulário" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )} />
                              <FormField control={form.control} name="description" render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Descrição</FormLabel>
                                  <FormControl>
                                    <Textarea {...field} placeholder="Descreva o bug encontrado..." />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )} />
                              <DialogFooter>
                                <Button type="submit">Enviar Solicitação</Button>
                                <DialogClose asChild>
                                  <Button type="button" variant="ghost">Cancelar</Button>
                                </DialogClose>
                              </DialogFooter>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Separator className="mb-4" />
                    {selectedProject.bugs.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-muted-foreground py-12">
                        <CheckCircle className="w-12 h-12 mb-2" />
                        <span>Nenhum bug registrado neste projeto.</span>
                      </div>
                    ) : (
                      <ScrollArea className="h-[260px]">
                        <ul className="space-y-4">
                          {selectedProject.bugs.map((bug) => (
                            <li key={bug.id} className="bg-muted rounded-lg p-4 flex items-start gap-4 border border-muted-foreground/10">
                              <Bug className="w-5 h-5 mt-1 text-warning" />
                              <div>
                                <div className="font-medium flex items-center gap-2">
                                  {bug.title}
                                  <Badge variant={bug.status === 'Resolvido' ? 'default' : 'secondary'}>{bug.status}</Badge>
                                </div>
                                <div className="text-muted-foreground text-sm mt-1">{bug.description}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    )}
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-280px)] text-center">
                  <Folder className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">Nenhum projeto selecionado</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                    Selecione um projeto na lista à esquerda para visualizar seus detalhes e gerenciar solicitações.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
