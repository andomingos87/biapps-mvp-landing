
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import AIAgents from "./pages/AIAgents";
import Automation from "./pages/Automation";
import AdminCaseStudies from "./pages/AdminCaseStudies";
import Auth from "./pages/Auth";
import ClientLogin from "./pages/ClientLogin";
import ClientDashboard from "./pages/ClientDashboard";
import AdminClients from "./pages/AdminClients";
import ClientRoute from "@/components/ClientRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/cases" element={<AdminCaseStudies />} />
          <Route path="/ClientLogin" element={<ClientLogin />} />
          <Route path="/ClientDashboard" element={
  <ClientRoute>
    <ClientDashboard />
  </ClientRoute>
} />
          <Route path="/admin/clients" element={<AdminClients />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
