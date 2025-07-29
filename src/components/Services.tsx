import React from 'react';
import { Monitor, Zap, Volume2, Wifi, Settings, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Problemas de Imagem',
      description: 'Tela escura, riscos, manchas, cores distorcidas ou sem imagem.',
      price: 'A partir de R$ 80'
    },
    {
      icon: Volume2,
      title: 'Problemas de Áudio',
      description: 'Som baixo, chiado, sem áudio ou falhas nos alto-falantes.',
      price: 'A partir de R$ 60'
    },
    {
      icon: Zap,
      title: 'Problemas Elétricos',
      description: 'TV não liga, problemas na fonte, curto-circuito.',
      price: 'A partir de R$ 100'
    },
    {
      icon: Wifi,
      title: 'Smart TV',
      description: 'Configuração, problemas de conexão, aplicativos.',
      price: 'A partir de R$ 50'
    },
    {
      icon: Settings,
      title: 'Manutenção Preventiva',
      description: 'Limpeza interna, troca de componentes preventiva.',
      price: 'A partir de R$ 70'
    },
    {
      icon: Wrench,
      title: 'Reparo Geral',
      description: 'Diagnóstico completo e reparo de qualquer problema.',
      price: 'Orçamento gratuito'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Realizamos todos os tipos de reparo em televisores de todas as marcas. 
            Diagnóstico gratuito e orçamento sem compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="text-primary font-semibold">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trabalhamos com Todas as Marcas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Samsung', 'LG', 'Sony', 'Philips', 'TCL', 'Panasonic'].map((brand, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-xl font-bold text-foreground text-center">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;