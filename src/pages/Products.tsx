import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageCarousel from '@/components/shared/ImageCarousel';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { productCategories } from '@/data/productsData';

const Products = () => {
  useEffect(() => {
    document.title = 'Produtos | AmberGlass';
  }, []);

  // Handle hash in URL for direct access to specific product
  const [activeTab, setActiveTab] = useState<string>('porta');
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && productCategories.some(cat => cat.id === hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products-hero.jpg"
            alt="Produtos AmberGlass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Descubra nossa linha completa de soluções em vidro, com design moderno e alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Catálogo de Produtos"
            subtitle="Conheça nossa variedade de produtos em vidro para projetos residenciais e comerciais"
          />
          
          <Tabs 
            defaultValue="porta" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mt-10"
          >
            <TabsList className="mb-8 flex flex-wrap h-auto gap-2 bg-transparent">
              {productCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="bg-gray-50 p-2 rounded-lg shadow-md mb-8 h-[400px]">
                      <ImageCarousel 
                        images={category.images}
                        className="h-full rounded-md overflow-hidden"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Tipos de Vidro</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.glassTypes.map((type, index) => (
                            <li key={index} className="flex items-center">
                              <ChevronRight size={16} className="text-blue-500 mr-2" />
                              <span>{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {category.thickness && (
                        <div className="border-b pb-4">
                          <h3 className="text-lg font-semibold mb-2 text-blue-600">Espessura</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {category.thickness.map((item, index) => (
                              <li key={index} className="flex items-center">
                                <ChevronRight size={16} className="text-blue-500 mr-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Aplicações Comuns</h3>
                        <ul className="grid grid-cols-1 gap-2">
                          {category.applications.map((app, index) => (
                            <li key={index} className="flex items-center">
                              <ChevronRight size={16} className="text-blue-500 mr-2" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {category.openingSystems && (
                        <div className="border-b pb-4">
                          <h3 className="text-lg font-semibold mb-2 text-blue-600">Sistemas de Abertura/Fixação</h3>
                          <ul className="grid grid-cols-1 gap-2">
                            {category.openingSystems.map((system, index) => (
                              <li key={index} className="flex items-center">
                                <ChevronRight size={16} className="text-blue-500 mr-2" />
                                <span>{system}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="pt-2">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Benefícios</h3>
                        <ul className="grid grid-cols-1 gap-2">
                          {category.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <ChevronRight size={16} className="text-blue-500 mr-2" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Material Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Tipos de Vidros"
            subtitle="Conheça os principais tipos de vidros que utilizamos em nossos produtos"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-1.jpg" 
                  alt="Vidro Temperado" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vidro Temperado</h3>
                <p className="text-gray-600">
                  Vidro de segurança que passou por um processo de têmpera, tornando-o até 5 vezes mais resistente que o vidro comum. Quando quebrado, fragmenta-se em pequenos pedaços não cortantes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-2.jpg" 
                  alt="Vidro Laminado" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vidro Laminado</h3>
                <p className="text-gray-600">
                  Composto por duas ou mais chapas de vidro unidas por uma película de PVB. Mesmo quando quebrado, os fragmentos permanecem presos à película, evitando acidentes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-3.jpg" 
                  alt="Vidro Insulado" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vidro Insulado</h3>
                <p className="text-gray-600">
                  Sistema com duas ou mais chapas de vidro separadas por uma camada de ar ou gás, oferecendo excelente isolamento térmico e acústico.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-4.jpg" 
                  alt="Vidro Jateado" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vidro Jateado</h3>
                <p className="text-gray-600">
                  Vidro com superfície fosca produzida por jateamento de areia ou ácido, proporcionando privacidade sem comprometer a passagem de luz.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-5.jpg" 
                  alt="Vidro Serigrafado" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vidro Serigrafado</h3>
                <p className="text-gray-600">
                  Vidro com impressão de desenhos, padrões ou logotipos através do processo de serigrafia, com tintas cerâmicas que garantem alta durabilidade.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/glass-type-6.jpg" 
                  alt="Espelho" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Espelho</h3>
                <p className="text-gray-600">
                  Vidro com camada refletora na parte posterior, disponível em diferentes tonalidades e espessuras, ideal para decoração e ampliação visual dos ambientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu ambiente?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem valorizar seu projeto.
            Oferecemos soluções personalizadas para atender às suas necessidades específicas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/contato">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Solicitar Orçamento
              </Button>
            </NavLink>
            
            <NavLink to="/servicos">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Conheça Nossos Serviços
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;