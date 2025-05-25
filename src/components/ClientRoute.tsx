import React from 'react';
import { Navigate } from 'react-router-dom';

// Simple auth check: client_id in localStorage
export function ClientRoute({ children }: { children: React.ReactNode }) {
  const isLogged = typeof window !== 'undefined' && !!localStorage.getItem('client_id');
  if (!isLogged) return <Navigate to="/ClientLogin" replace />;
  return <>{children}</>;
}

export default ClientRoute;
