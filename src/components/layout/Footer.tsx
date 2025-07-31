import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-300 text-sm mt-4">
              Especialistas em soluções completas em vidro, atendendo projetos 
              residenciais e comerciais com excelência, inovação e qualidade.
            </p>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors"
              >
                <Facebook size={18} className="text-blue-400" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-600/20 flex items-center justify-center hover:bg-pink-600/40 transition-colors"
              >
                <Instagram size={18} className="text-pink-400" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-700/20 flex items-center justify-center hover:bg-blue-700/40 transition-colors"
              >
                <Linkedin size={18} className="text-blue-300" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobre" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Sobre Nós
                </NavLink>
              </li>
              <li>
                <NavLink to="/servicos" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Produtos
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-gray-300 hover:text-blue-300 transition-colors">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contato" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nossos Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/produtos#porta" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Portas de Vidro
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos#janela" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Janelas de Vidro
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos#cortina" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Cortinas de Vidro
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos#guarda-corpo" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Guarda Corpo
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos#fachada" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Fachadas de Vidro
                </NavLink>
              </li>
              <li>
                <NavLink to="/produtos#box" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Box para Banheiro
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-blue-300" />
                <span className="text-gray-300">(11) 9876-5432</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-blue-300" />
                <a href="mailto:contato@amberglass.com.br" className="text-gray-300 hover:text-blue-300 transition-colors">
                  contato@amberglass.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-blue-300" />
                <span className="text-gray-300">
                  Av. Paulista, 1000<br />
                  São Paulo, SP - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AmberGlass. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;