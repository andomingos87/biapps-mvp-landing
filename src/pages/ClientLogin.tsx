import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

export default function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Consulta cliente pelo email
      const { data, error } = await supabase
        .from('clients')
        .select('id, password')
        .eq('email', email)
        .single();
      if (error || !data) {
        setError('Credenciais inválidas.');
        setLoading(false);
        return;
      }
      // Comparação de senha usando hash
      const passwordMatch = await bcrypt.compare(password, data.password);
      if (!passwordMatch) {
        setError('Credenciais inválidas.');
        setLoading(false);
        return;
      }
      // Login OK: salva id no localStorage e navega
      localStorage.setItem('client_id', data.id);
      navigate('/ClientDashboard');
    } catch (err) {
      setError('Erro ao conectar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 border border-slate-100">
        <img src="/lovable-uploads/0a5cb9e3-308c-4f90-b50a-1ab6d500a9d9.png" alt="BiApps Logo" className="h-12 mb-2" />
        <h1 className="text-2xl font-bold text-primary mb-2">Área do Cliente</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </div>
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm animate-shake">
              {error}
            </div>
          )}
          <Button type="submit" className="w-full mt-2" size="lg" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 text-sm animate-shake mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
      <p className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} BiApps. Todos os direitos reservados.</p>
    </div>
  );
}
