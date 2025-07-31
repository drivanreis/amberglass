import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  CheckCircle2, 
  Ruler, 
  Shield, 
  Truck, 
  Wrench, 
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import ContactForm from '@/components/shared/ContactForm';

const Services = () => {
  useEffect(() => {
    document.title = 'Serviços | AmberGlass';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services-hero.jpg"
            alt="Serviços AmberGlass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluções completas em instalação e montagem de vidros para projetos residenciais e comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Serviços de Instalação e Montagem"
            subtitle="Contamos com profissionais especializados para garantir instalações perfeitas e seguras"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={Ruler}
              title="Medição e Orçamento"
              description="Nossa equipe realiza a medição precisa no local da instalação para garantir a perfeita adequação dos produtos. Oferecemos orçamentos detalhados e transparentes."
            />
            
            <ServiceCard
              icon={Wrench}
              title="Instalação Profissional"
              description="Instalação técnica realizada por profissionais treinados e certificados, seguindo todas as normas de segurança e garantindo acabamento impecável."
            />
            
            <ServiceCard
              icon={Wrench}
              title="Manutenção de Vidros"
              description="Serviços de manutenção preventiva e corretiva para todos os tipos de estruturas em vidro, garantindo maior durabilidade e segurança."
            />
            
            <ServiceCard
              icon={Shield}
              title="Projetos Personalizados"
              description="Desenvolvemos projetos sob medida que atendem às necessidades específicas de cada cliente, com soluções inovadoras e funcionais."
            />
            
            <ServiceCard
              icon={Truck}
              title="Entrega e Logística"
              description="Contamos com frota própria e embalagens especiais para garantir a integridade dos produtos durante o transporte até o local da instalação."
            />
            
            <ServiceCard
              icon={Zap}
              title="Assistência Técnica"
              description="Suporte técnico especializado para solucionar qualquer problema que possa surgir após a instalação, com atendimento rápido e eficiente."
            />
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Processo de Instalação"
            subtitle="Conheça as etapas do nosso processo de trabalho para garantir resultados perfeitos"
          />
          
          <div className="mt-12">
            <div className="relative">
              {/* Process timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              
              {/* Process steps */}
              <div className="space-y-20">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 order-2 md:order-1 md:pr-16 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">1. Visita Técnica e Medição</h3>
                      <p className="text-gray-600">
                        Nossa equipe técnica visita o local para entender o projeto, realizar medições precisas e avaliar as condições de instalação. Isso nos permite propor a solução mais adequada para cada caso.
                      </p>
                    </div>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1 md:order-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-16 hidden md:block">
                    <img 
                      src="/images/service-step-1.jpg" 
                      alt="Visita Técnica" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 order-2 md:pr-16 hidden md:block">
                    <img 
                      src="/images/service-step-2.jpg" 
                      alt="Orçamento e Planejamento" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  
                  <div className="flex-1 order-2 md:order-3 md:pl-16 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">2. Orçamento e Planejamento</h3>
                      <p className="text-gray-600">
                        Elaboramos um orçamento detalhado com especificações técnicas, prazos e condições. Após a aprovação, iniciamos o planejamento da produção e instalação.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 order-2 md:order-1 md:pr-16 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">3. Produção e Preparação</h3>
                      <p className="text-gray-600">
                        Os vidros são cortados, lapidados e temperados de acordo com as especificações do projeto. Todos passam por rigoroso controle de qualidade antes de seguir para instalação.
                      </p>
                    </div>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1 md:order-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-16 hidden md:block">
                    <img 
                      src="/images/service-step-3.jpg" 
                      alt="Produção e Preparação" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 order-2 md:pr-16 hidden md:block">
                    <img 
                      src="/images/service-step-4.jpg" 
                      alt="Instalação" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  
                  <div className="flex-1 order-2 md:order-3 md:pl-16 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">4. Instalação</h3>
                      <p className="text-gray-600">
                        Nossa equipe realiza a instalação com equipamentos adequados e técnicas avançadas, garantindo perfeito acabamento e funcionalidade. Todo o processo segue normas técnicas rigorosas.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 order-2 md:order-1 md:pr-16 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">5. Inspeção e Entrega</h3>
                      <p className="text-gray-600">
                        Após a instalação, realizamos uma inspeção final para garantir que tudo esteja perfeito. Entregamos o serviço ao cliente com orientações de uso e manutenção.
                      </p>
                    </div>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1 md:order-2">
                    <span className="text-white font-bold">5</span>
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-16 hidden md:block">
                    <img 
                      src="/images/service-step-5.jpg" 
                      alt="Inspeção e Entrega" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Por que escolher nossos serviços"
            subtitle="Benefícios de contar com a experiência e qualidade da AmberGlass"
            light
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Instalação Certificada</h3>
              </div>
              <p className="text-blue-100">
                Todas as nossas instalações são realizadas por profissionais certificados, seguindo normas técnicas e de segurança.
              </p>
            </div>
            
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Garantia Estendida</h3>
              </div>
              <p className="text-blue-100">
                Oferecemos garantia estendida para todos os produtos instalados por nossa equipe, proporcionando maior segurança.
              </p>
            </div>
            
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Ferramentas Especializadas</h3>
              </div>
              <p className="text-blue-100">
                Utilizamos equipamentos e ferramentas de última geração que garantem precisão e segurança em todas as etapas do serviço.
              </p>
            </div>
            
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Equipe Qualificada</h3>
              </div>
              <p className="text-blue-100">
                Nossa equipe passa por treinamentos constantes e possui vasta experiência em diferentes tipos de instalações.
              </p>
            </div>
            
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Prazo de Entrega</h3>
              </div>
              <p className="text-blue-100">
                Compromisso com o cumprimento de prazos, respeitando o cronograma estabelecido junto ao cliente.
              </p>
            </div>
            
            <div className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-blue-300 mr-4 mt-1" size={24} />
                <h3 className="text-xl font-semibold">Suporte Pós-Instalação</h3>
              </div>
              <p className="text-blue-100">
                Oferecemos suporte técnico após a conclusão do serviço, garantindo a plena satisfação do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Precisando de serviços de instalação?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Entre em contato conosco para agendar uma visita técnica e obter um orçamento personalizado para o seu projeto.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Orçamento gratuito e sem compromisso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Atendimento personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Profissionais qualificados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Garantia de qualidade</span>
                  </li>
                </ul>
                
                <NavLink to="/contato">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8">
                    Solicitar orçamento
                  </Button>
                </NavLink>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;