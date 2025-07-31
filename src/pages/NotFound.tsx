import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Página Não Encontrada | AmberGlass';
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-white">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertCircle size={40} className="text-red-600" />
      </div>
      
      <h1 className="text-5xl font-bold mb-4 text-gray-900">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Página Não Encontrada
      </h2>
      
      <p className="text-lg mb-8 max-w-md text-gray-600">
        A página que você está procurando não existe ou foi removida.
        Retorne à página inicial para continuar navegando em nosso site.
      </p>
      
      <NavLink to="/">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white">
          Voltar para a Página Inicial
        </Button>
      </NavLink>
    </div>
  );
};

export default NotFound;