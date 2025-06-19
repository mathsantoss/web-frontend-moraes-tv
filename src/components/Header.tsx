
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
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MoraesTV</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('avaliacoes')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
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
