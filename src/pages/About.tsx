import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Award, Check, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/shared/SectionHeader';
import { teamMembers } from '@/data/aboutData';

const About = () => {
  useEffect(() => {
    document.title = 'Sobre Nós | AmberGlass';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero.jpg"
            alt="Sobre a AmberGlass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a AmberGlass
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Há mais de 15 anos transformando ambientes com soluções em vidro de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Nossa História" 
                subtitle="Conheça nossa trajetória de sucesso e compromisso com a excelência"
                centered={false}
              />
              
              <div className="space-y-4 mt-6 text-gray-600">
                <p>
                  A AmberGlass nasceu em 2008 do sonho de três profissionais experientes no setor vidreiro que identificaram a necessidade de uma empresa que unisse qualidade excepcional, inovação tecnológica e atendimento personalizado.
                </p>
                <p>
                  Começamos como uma pequena vidraçaria especializada em box para banheiros e espelhos. Com o passar dos anos, investimos continuamente em tecnologia, treinamento e ampliação de nossa linha de produtos, consolidando-nos como uma referência no mercado de vidros especiais e soluções arquitetônicas.
                </p>
                <p>
                  Hoje, a AmberGlass é reconhecida nacionalmente pela qualidade de seus produtos e serviços, contando com uma moderna fábrica, equipamentos de última geração e uma equipe altamente capacitada para atender projetos de todos os portes, desde residências a grandes empreendimentos comerciais.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/about-1.jpg" 
                alt="História da AmberGlass" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
              <div className="grid grid-rows-2 gap-4">
                <img 
                  src="/images/about-2.jpg" 
                  alt="Nossa fábrica" 
                  className="rounded-lg shadow-lg h-full object-cover"
                />
                <img 
                  src="/images/about-3.jpg" 
                  alt="Nossa equipe" 
                  className="rounded-lg shadow-lg h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Missão, Visão e Valores"
            subtitle="Princípios que guiam nossa empresa e nos inspiram a crescer"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções em vidro inovadoras e de alta qualidade que transformem e valorizem os ambientes, superando as expectativas dos nossos clientes com segurança, funcionalidade e design diferenciado.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como líder no mercado de soluções em vidro, referência em inovação, qualidade e sustentabilidade, expandindo nossa atuação para todo o território nacional até 2030.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Excelência em qualidade e acabamento</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Compromisso com a segurança</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Inovação e aprimoramento constante</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Ética e transparência</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Responsabilidade socioambiental</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-blue-100">Clientes Satisfeitos</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Anos de Experiência</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">3000+</h3>
              <p className="text-blue-100">Projetos Concluídos</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Taxa de Aprovação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nossa Equipe"
            subtitle="Conheça os profissionais dedicados que fazem a diferença em nossos projetos"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm">{member.position}</p>
                  <p className="text-gray-500 text-sm mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça parte do nosso sucesso
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Venha conhecer nossas soluções em vidro e transforme seus projetos. 
            Nossa equipe está pronta para oferecer o melhor atendimento e as 
            melhores soluções para você.
          </p>
          
          <NavLink to="/contato">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white">
              Entre em contato
            </Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;