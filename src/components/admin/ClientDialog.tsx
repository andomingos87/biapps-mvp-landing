import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import bcrypt from 'bcryptjs';

interface ClientDialogProps {
  onSave: (client: {
    companyname: string;
    contactname: string;
    email: string;
    whatsapp: string;
    projectname: string;
    category: string;
    contracttype: string;
    password: string;
  }) => void;
  onClose: () => void;
  open: boolean;
}

export default function ClientDialog({ open, onClose, onSave }: ClientDialogProps) {
  const [companyname, setCompanyname] = useState('');
  const [contactname, setContactname] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [projectname, setProjectname] = useState('');
  const [category, setCategory] = useState('CRM');
  const [contracttype, setContracttype] = useState('Pontual');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Hash da senha
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      onSave({
        companyname,
        contactname,
        email,
        whatsapp,
        projectname,
        category,
        contracttype,
        password: hashedPassword,
      });
      setCompanyname('');
      setContactname('');
      setEmail('');
      setWhatsapp('');
      setProjectname('');
      setCategory('CRM');
      setContracttype('Pontual');
      setPassword('');
      onClose();
    } catch (err) {
      setError('Erro ao gerar hash da senha. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">×</button>
        <h2 className="text-xl font-semibold mb-4">Cadastrar Cliente</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome da empresa</label>
            <Input value={companyname} onChange={e => setCompanyname(e.target.value)} required placeholder="Ex: BiApps Tecnologia" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nome do contato</label>
            <Input value={contactname} onChange={e => setContactname(e.target.value)} required placeholder="Ex: João Silva" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email do contato" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Whatsapp</label>
            <Input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required placeholder="(99) 99999-9999" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Projeto</label>
            <Input value={projectname} onChange={e => setProjectname(e.target.value)} required placeholder="Ex: Plataforma de CRM" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Categoria</label>
            <select className="w-full border rounded px-3 py-2" value={category} onChange={e => setCategory(e.target.value)} required>
              <option value="CRM">CRM</option>
              <option value="SAAS">SAAS</option>
              <option value="Agente IA">Agente IA</option>
              <option value="App Web">App Web</option>
              <option value="App Mobile">App Mobile</option>
              <option value="Automação">Automação</option>
              <option value="Bot Telegram">Bot Telegram</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tipo de contrato</label>
            <select className="w-full border rounded px-3 py-2" value={contracttype} onChange={e => setContracttype(e.target.value)} required>
              <option value="Pontual">Pontual</option>
              <option value="Recorrente">Recorrente</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Senha provisória" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm animate-shake mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
