import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactFormProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const ContactForm = ({ 
  variant = 'default',
  className = ''
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setLoading(false);
  };
  
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 gap-4">
        <div className={variant === 'compact' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''}>
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/80 border-gray-300"
            />
          </div>
          
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/80 border-gray-300"
            />
          </div>
        </div>
        
        <div className={variant === 'compact' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''}>
          <div className="mb-4">
            <Input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white/80 border-gray-300"
            />
          </div>
          
          <div className="mb-4">
            <Input
              type="text"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-white/80 border-gray-300"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            rows={variant === 'compact' ? 4 : 6}
            className="bg-white/80 border-gray-300"
          />
        </div>
        
        <Button 
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white w-full"
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;