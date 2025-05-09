
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/0a5cb9e3-308c-4f90-b50a-1ab6d500a9d9.png" 
              alt="BiApps Logo" 
              className="h-10 mb-4"
            />
            <p className="text-gray-700">
              Especialistas em desenvolvimento ágil de MVPs com desenvolvimento web, 
              mobile, agentes de IA e automações.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="bg-secondary text-white p-2 rounded-full hover:bg-primary transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-secondary text-white p-2 rounded-full hover:bg-primary transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-700 hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Casos de Sucesso</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-700">(11) 9999-8888</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-700">contato@biapps.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-700">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Newsletter</h3>
            <p className="text-gray-700 mb-4">Inscreva-se para receber novidades e conteúdo exclusivo.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Seu e-mail" className="border-gray-300" />
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BiApps. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
