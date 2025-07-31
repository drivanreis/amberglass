import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ContactForm from '@/components/shared/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contato | AmberGlass';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contato AmberGlass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Estamos prontos para atender às suas necessidades e transformar seus projetos em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Informações de Contato"
                subtitle="Entre em contato através dos nossos canais de atendimento"
                centered={false}
              />
              
              <div className="mt-8 space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-600 mb-1">(11) 9876-5432</p>
                    <p className="text-gray-600">Horário de atendimento: Segunda a Sexta, das 8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:contato@amberglass.com.br" className="text-blue-600 hover:underline">
                        contato@amberglass.com.br
                      </a>
                    </p>
                    <p className="text-gray-600">Respondemos em até 24 horas úteis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-600 mb-1">
                      Av. Paulista, 1000 - Bela Vista
                    </p>
                    <p className="text-gray-600 mb-1">
                      São Paulo - SP, 01310-100
                    </p>
                    <p className="text-gray-600">
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Nossa Localização</h3>
                <div className="h-80 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975790004735!2d-46.65529072599378!3d-23.561349860761954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689093456789!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização AmberGlass"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeader
                title="Envie sua Mensagem"
                subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível"
                centered={false}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Visite Nossa Showroom"
            subtitle="Conheça nossos produtos e converse pessoalmente com nossa equipe"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9h às 13h</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Agendamento</h3>
              <p className="text-gray-600">
                Para um atendimento personalizado, você pode agendar uma visita com um de nossos consultores. Solicite um agendamento por telefone ou e-mail.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Estacionamento</h3>
              <p className="text-gray-600">
                Oferecemos estacionamento gratuito para clientes em nossa loja. Basta informar na recepção que você veio visitar a AmberGlass.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;