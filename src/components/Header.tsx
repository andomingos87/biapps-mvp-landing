
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center h-20">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0a5cb9e3-308c-4f90-b50a-1ab6d500a9d9.png" 
            alt="BiApps Logo" 
            className="h-10"
          />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-secondary font-medium transition-colors">Sobre</a>
          <a href="#services" className="text-gray-700 hover:text-secondary font-medium transition-colors">Serviços</a>
          <a href="#differentials" className="text-gray-700 hover:text-secondary font-medium transition-colors">Diferenciais</a>
          <a href="#cases" className="text-gray-700 hover:text-secondary font-medium transition-colors">Casos</a>
          <a href="#faq" className="text-gray-700 hover:text-secondary font-medium transition-colors">FAQ</a>
          <Button className="bg-primary hover:bg-primary/90 text-white">Contato</Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 border-t">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="#about" 
                className="p-2 text-gray-700 hover:text-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#services" 
                className="p-2 text-gray-700 hover:text-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#differentials" 
                className="p-2 text-gray-700 hover:text-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Diferenciais
              </a>
              <a 
                href="#cases" 
                className="p-2 text-gray-700 hover:text-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos
              </a>
              <a 
                href="#faq" 
                className="p-2 text-gray-700 hover:text-secondary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
