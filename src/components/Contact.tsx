
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating email sending - in production, you would integrate with a real email service
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: () => window.open('tel:+5511999999999')
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@moraestv.com.br',
      action: () => window.open('mailto:contato@moraestv.com.br')
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Flores, 123 - São Paulo/SP',
      action: () => window.open('https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo+SP')
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h-18h | Sáb: 8h-14h',
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precisa de ajuda com sua TV? Entre em contato conosco e receba um orçamento gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Descreva o problema da sua TV (marca, modelo, sintomas...)"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md ${
                      info.action ? 'cursor-pointer hover:bg-gray-50 transition-colors duration-200' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="bg-blue-100 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4">Nossa Localização</h4>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa da localização</p>
                  <p className="text-sm">Clique no endereço acima para ver no Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
