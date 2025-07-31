import { useEffect } from 'react';
import { Accordion } from '@/components/ui/accordion';
import SectionHeader from '@/components/shared/SectionHeader';
import FaqItem from '@/components/shared/FaqItem';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { faqItems } from '@/data/faqData';

const Faq = () => {
  useEffect(() => {
    document.title = 'Perguntas Frequentes | AmberGlass';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/faq-hero.jpg"
            alt="Perguntas Frequentes AmberGlass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Dúvidas Frequentes"
            subtitle="Respostas para as perguntas mais comuns sobre nossos produtos e serviços"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <FaqItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  value={item.id}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="FAQ por Categoria"
            subtitle="Navegue pelas categorias para encontrar respostas específicas"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Produtos',
                description: 'Informações sobre tipos de vidro, modelos, tamanhos e acabamentos',
                icon: '/images/icon-products.svg',
              },
              {
                title: 'Instalação',
                description: 'Como funciona o processo de instalação, prazos e garantia',
                icon: '/images/icon-installation.svg',
              },
              {
                title: 'Manutenção',
                description: 'Cuidados, limpeza e conservação dos produtos em vidro',
                icon: '/images/icon-maintenance.svg',
              },
              {
                title: 'Orçamentos',
                description: 'Detalhes sobre preços, formas de pagamento e prazos de entrega',
                icon: '/images/icon-pricing.svg',
              },
              {
                title: 'Segurança',
                description: 'Informações sobre segurança, resistência e certificações',
                icon: '/images/Safety.jpg',
              },
              {
                title: 'Projetos Especiais',
                description: 'Dúvidas sobre projetos personalizados e sob medida',
                icon: '/images/icon-projects.svg',
              },
              {
                title: 'Garantia',
                description: 'Termos de garantia, cobertura e assistência técnica',
                icon: '/images/icon-warranty.svg',
              },
              {
                title: 'Contato',
                description: 'Como entrar em contato, horário de atendimento e localização',
                icon: '/images/icon-contact.svg',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-8 h-8"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Questions Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Se você não encontrou a resposta para a sua dúvida, entre em contato conosco.
            Nossa equipe está pronta para ajudar e fornecer todas as informações que você precisa.
          </p>
          
          <NavLink to="/contato">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Fale Conosco
            </Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Faq;