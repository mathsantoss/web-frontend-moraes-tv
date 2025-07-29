import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">MoraesTV</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-muted rounded-lg mb-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('avaliacoes')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
