import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Garantia de Diferenciada',
      description: 'Garantia estendida de 12 meses para sua maior tranquilidade.'
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Diagnóstico em até 24h e reparo ágil para você não ficar sem sua TV.'
    },
    {
      icon: Users,
      title: 'Atendimento Delivery',
      description: 'Retirada e entrega grátis: facilidade e comodidade na sua casa.'
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 15 anos no mercado com milhares de clientes satisfeitos.'
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sobre a MoraesTV
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em assistência técnica de televisores, 
            com foco na excelência do atendimento e qualidade dos serviços prestados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
              alt="Assistência técnica especializada"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground">
              Nossa História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2008, a MoraesTV nasceu da paixão por eletrônicos e do 
              desejo de oferecer um serviço de qualidade superior no reparo de televisores. 
              Ao longo dos anos, construímos uma reputação sólida baseada na confiança, 
              transparência e excelência técnica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, somos referência na região, atendendo todas as marcas e modelos 
              de TV com equipamentos modernos e técnicos altamente qualificados. 
              Nossa missão é devolver a diversão e entretenimento para sua casa 
              com rapidez e qualidade.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-muted hover:bg-accent transition-all duration-200 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;