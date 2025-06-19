
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Especialistas em
                <span className="text-blue-700 block">Assistência Técnica</span>
                de TV
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mais de 15 anos de experiência no reparo de televisores. 
                Atendimento rápido, diagnóstico preciso e garantia em todos os serviços.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-200"
              >
                WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">15+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">5000+</div>
                <div className="text-gray-600">TVs Reparadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">98%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:order-2 animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Técnico trabalhando em TV"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-700">Diagnóstico</div>
                <div className="text-gray-600">Gratuito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
