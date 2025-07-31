import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check, Lightbulb, Shield, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/shared/SectionHeader';
import ImageCarousel from '@/components/shared/ImageCarousel';
import ProductCard from '@/components/shared/ProductCard';
import ServiceCard from '@/components/shared/ServiceCard';
import ContactForm from '@/components/shared/ContactForm';
import { homeProducts, homeImages, testimonials } from '@/data/homeData';

const Home = () => {
  useEffect(() => {
    document.title = 'AmberGlass | Soluções em Vidro';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={`/amberglass/images/back-graund/hero-bg.jpg`}
            alt="Caminho do background da imagem = /images/back-graund/hero-bg.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme ambientes com nossas soluções em vidro
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              Desenvolvemos e instalamos produtos em vidro com design inovador, qualidade superior e 
              segurança garantida para projetos residenciais e comerciais.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <NavLink to="/produtos">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Ver Produtos
                </Button>
              </NavLink>
              
              <NavLink to="/contato">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Solicitar Orçamento
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Por que escolher a AmberGlass"
            subtitle="Nossa equipe especializada trabalha com os melhores materiais e tecnologias para garantir resultados excelentes em todos os projetos."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Todos os nossos produtos seguem rigorosas normas de segurança e passam por testes de resistência.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-gray-600">
                Acompanhamos as tendências do mercado e oferecemos soluções modernas e inovadoras.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-600">
                Utilizamos vidros e acessórios de alta qualidade, garantindo durabilidade e acabamento impecável.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agilidade</h3>
              <p className="text-gray-600">
                Nosso processo produtivo é otimizado para entregar projetos com rapidez sem comprometer a qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nossos Produtos"
            subtitle="Conheça nossa linha de produtos em vidro para residências e espaços comerciais"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                images={product.images}
                alt={product.title}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <NavLink to="/produtos">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8">
                Ver Todos os Produtos
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nossos Projetos"
            subtitle="Confira alguns dos nossos projetos realizados em diversas regiões do Brasil"
            light
          />
          
          <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <ImageCarousel 
              images={homeImages}
              autoplay={true}
              interval={5000}
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nossos Serviços"
            subtitle="Oferecemos serviços completos de instalação e montagem de produtos em vidro"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Wrench}
              title="Instalação Profissional"
              description="Nossa equipe qualificada realiza a instalação de todos os produtos com precisão e segurança, seguindo normas técnicas rigorosas."
            />
            
            <ServiceCard
              icon={Shield}
              title="Projetos Sob Medida"
              description="Desenvolvemos projetos personalizados que atendem às necessidades específicas de cada cliente, com soluções criativas e funcionais."
            />
            
            <ServiceCard
              icon={Zap}
              title="Manutenção e Reparos"
              description="Oferecemos serviços de manutenção preventiva e corretiva para garantir a durabilidade e o bom funcionamento dos produtos instalados."
            />
          </div>
          
          <div className="mt-12 text-center">
            <NavLink to="/servicos">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8">
                Conheça Nossos Serviços
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="O que dizem nossos clientes"
            subtitle="Veja a opinião de quem já confiou na AmberGlass para seus projetos"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ContactUs.jpg"
            alt="Entre em contato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para transformar seus ambientes com vidro?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Entre em contato conosco e solicite um orçamento sem compromisso. 
                Nossa equipe está pronta para atender às suas necessidades e criar 
                a solução perfeita para o seu projeto.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Atendimento personalizado',
                  'Orçamento detalhado e transparente',
                  'Projetos sob medida',
                  'Instalação profissional',
                  'Garantia de qualidade',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-100">
                    <Check size={20} className="mr-2 text-blue-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Solicite um orçamento</h3>
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;