// File: src/App.tsx

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/utils/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* Mude '/amber-glass' para '/amberglass' */}
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/amberglass'}> {/* <-- CORRIGIDO AQUI! */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="servicos" element={<Services />} />
            <Route path="produtos" element={<Products />} />
            <Route path="contato" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;