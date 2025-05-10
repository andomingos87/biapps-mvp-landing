
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset to account for header height
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If on another page, navigate to home
      navigate('/');
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      <div className="container-custom flex justify-between items-center h-20">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0a5cb9e3-308c-4f90-b50a-1ab6d500a9d9.png" 
            alt="BiApps Logo" 
            className="h-10 cursor-pointer" 
            onClick={handleLogoClick}
          />
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="text-gray-700 hover:text-primary font-medium transition-colors relative nav-link">Sobre</a>
          <a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="text-gray-700 hover:text-primary font-medium transition-colors relative nav-link">Serviços</a>
          <a href="#differentials" onClick={(e) => smoothScroll(e, 'differentials')} className="text-gray-700 hover:text-primary font-medium transition-colors relative nav-link">Diferenciais</a>
          <a href="#cases" onClick={(e) => smoothScroll(e, 'cases')} className="text-gray-700 hover:text-primary font-medium transition-colors relative nav-link">Casos</a>
          <a href="#faq" onClick={(e) => smoothScroll(e, 'faq')} className="text-gray-700 hover:text-primary font-medium transition-colors relative nav-link">FAQ</a>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">Começar agora</Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl z-50 border-t animate-fade-in">
            <div className="flex flex-col p-6 space-y-6">
              <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="p-2 text-lg text-gray-700 hover:text-primary font-medium transition-colors border-b border-gray-100 pb-4">
                Sobre
              </a>
              <a href="#services" onClick={(e) => smoothScroll(e, 'services')} className="p-2 text-lg text-gray-700 hover:text-primary font-medium transition-colors border-b border-gray-100 pb-4">
                Serviços
              </a>
              <a href="#differentials" onClick={(e) => smoothScroll(e, 'differentials')} className="p-2 text-lg text-gray-700 hover:text-primary font-medium transition-colors border-b border-gray-100 pb-4">
                Diferenciais
              </a>
              <a href="#cases" onClick={(e) => smoothScroll(e, 'cases')} className="p-2 text-lg text-gray-700 hover:text-primary font-medium transition-colors border-b border-gray-100 pb-4">
                Casos
              </a>
              <a href="#faq" onClick={(e) => smoothScroll(e, 'faq')} className="p-2 text-lg text-gray-700 hover:text-primary font-medium transition-colors border-b border-gray-100 pb-4">
                FAQ
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full py-6 shadow-md shadow-primary/20" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};

export default Header;
