import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../shared/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" onClick={closeMenu} className="z-10">
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink 
              to="/sobre"
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Sobre Nós
            </NavLink>
            <NavLink 
              to="/servicos"
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Serviços
            </NavLink>
            <NavLink 
              to="/produtos"
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              Produtos
            </NavLink>
            <NavLink 
              to="/faq"
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink to="/contato">
              <Button variant="default" size="sm" className="ml-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                Contato
              </Button>
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden z-10 p-2 text-gray-700"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div 
            className={`
              fixed inset-0 bg-white flex flex-col items-center justify-center 
              transition-all duration-300 ease-in-out lg:hidden
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            <nav className="flex flex-col items-center gap-6 text-xl">
              <NavLink 
                to="/" 
                onClick={closeMenu}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Início
              </NavLink>
              <NavLink 
                to="/sobre" 
                onClick={closeMenu}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Sobre Nós
              </NavLink>
              <NavLink 
                to="/servicos" 
                onClick={closeMenu}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Serviços
              </NavLink>
              <NavLink 
                to="/produtos" 
                onClick={closeMenu}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                Produtos
              </NavLink>
              <NavLink 
                to="/faq" 
                onClick={closeMenu}
                className={({ isActive }) => 
                  `font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                }
              >
                FAQ
              </NavLink>
              <NavLink 
                to="/contato" 
                onClick={closeMenu}
                className="mt-2"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                  Contato
                </Button>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;