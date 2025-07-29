import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Excelente atendimento! Minha TV Samsung foi reparada rapidamente e com garantia. Super recomendo!',
      platform: 'Google',
      date: '2 semanas atrás'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Profissional muito competente. Diagnóstico preciso e preço justo. Minha TV ficou como nova!',
      platform: 'GetNinja',
      date: '1 mês atrás'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Atendimento nota 10! Técnico muito educado e explicou todo o problema. Recomendo de olhos fechados.',
      platform: 'Google',
      date: '3 semanas atrás'
    },
    {
      name: 'Carlos Oliveira',
      rating: 5,
      comment: 'Serviço rápido e eficiente. Problema resolvido no mesmo dia. Preço muito bom comparado a outros.',
      platform: 'GetNinja',
      date: '2 meses atrás'
    },
    {
      name: 'Patricia Lima',
      rating: 5,
      comment: 'Muito profissional! Explicou o problema, deu dicas de cuidados e a TV está funcionando perfeitamente.',
      platform: 'Google',
      date: '1 semana atrás'
    },
    {
      name: 'Roberto Alves',
      rating: 5,
      comment: 'Melhor assistência técnica da região. Já indiquei para vários amigos e todos ficaram satisfeitos.',
      platform: 'GetNinja',
      date: '1 mês atrás'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Avaliações dos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços no Google e GetNinja.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-foreground mr-2">4.9</span>
                <div className="flex">
                  {renderStars(5)}
                </div>
              </div>
              <div className="text-muted-foreground">Google Reviews</div>
              <div className="text-sm text-muted-foreground">127 avaliações</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-foreground mr-2">4.8</span>
                <div className="flex">
                  {renderStars(5)}
                </div>
              </div>
              <div className="text-muted-foreground">GetNinja</div>
              <div className="text-sm text-muted-foreground">89 avaliações</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-muted rounded-xl p-6 hover:bg-accent transition-all duration-200 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{review.platform}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex space-x-4">
            <button 
              onClick={() => window.open('https://g.page/r/your-google-business-url/review', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Avaliar no Google
            </button>
            <button 
              onClick={() => window.open('https://www.getninjas.com.br/avaliar/sua-empresa', '_blank')}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Avaliar no GetNinja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;