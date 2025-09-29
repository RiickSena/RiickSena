'use client';

import { useState } from 'react';
import { ShoppingBag, Star, Shield, Mail, Phone, Instagram, Facebook, Twitter, Menu, X, ExternalLink, Smartphone, Home, Baby, Shirt, Gamepad2, Heart } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com seu sistema de email
    alert('Obrigado pelo contato! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const marketplaces = [
    {
      name: 'Amazon',
      description: 'Milhões de produtos com entrega rápida',
      icon: '🛒',
      color: 'from-orange-400 to-orange-600',
      link: '/amazon' // Link para página específica da Amazon
    },
    {
      name: 'Mercado Livre',
      description: 'O maior marketplace da América Latina',
      icon: '💛',
      color: 'from-yellow-400 to-yellow-600',
      link: '/mercado-livre' // Link para página específica do Mercado Livre
    },
    {
      name: 'Magazine Luiza',
      description: 'Tecnologia e casa com os melhores preços',
      icon: '💙',
      color: 'from-blue-400 to-blue-600',
      link: '/magazine-luiza' // Link para página específica do Magazine Luiza
    },
    {
      name: 'Americanas',
      description: 'Variedade e conveniência em um só lugar',
      icon: '❤️',
      color: 'from-red-400 to-red-600',
      link: '/americanas' // Link para página específica das Americanas
    },
    {
      name: 'Shopee',
      description: 'Ofertas imperdíveis todos os dias',
      icon: '🧡',
      color: 'from-orange-500 to-pink-500',
      link: '/shopee' // Link para página específica da Shopee
    },
    {
      name: 'AliExpress',
      description: 'Produtos direto da China com frete grátis',
      icon: '🌟',
      color: 'from-purple-400 to-purple-600',
      link: '/aliexpress' // Link para página específica do AliExpress
    }
  ];

  const categories = [
    { name: 'Tecnologia', icon: Smartphone, color: 'text-blue-600', link: '/categoria/tecnologia' },
    { name: 'Casa & Jardim', icon: Home, color: 'text-green-600', link: '/categoria/casa-jardim' },
    { name: 'Moda', icon: Shirt, color: 'text-pink-600', link: '/categoria/moda' },
    { name: 'Bebês', icon: Baby, color: 'text-purple-600', link: '/categoria/bebes' },
    { name: 'Games', icon: Gamepad2, color: 'text-red-600', link: '/categoria/games' },
    { name: 'Beleza', icon: Heart, color: 'text-rose-600', link: '/categoria/beleza' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Meus Descontos Online</span>
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('ofertas')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Ofertas
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>

            {/* Menu Mobile */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Início
                </button>
                <button onClick={() => scrollToSection('ofertas')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Ofertas
                </button>
                <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Seção Hero com Background */}
      <section 
        id="inicio" 
        className="min-h-screen flex items-center justify-center relative"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Todos os Melhores Descontos em um só Lugar
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Acesse rapidamente os melhores links de <strong>Mercado Livre</strong>, <strong>Amazon</strong>, <strong>Magazine Luiza</strong>, <strong>Americanas</strong>, <strong>Shopee</strong> e <strong>AliExpress</strong>. Economize tempo e dinheiro!
          </p>
          <button 
            onClick={() => scrollToSection('ofertas')}
            className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Aproveitar Agora
          </button>
        </div>
      </section>

      {/* Seção Ofertas */}
      <section 
        id="ofertas" 
        className="py-20 relative"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ofertas Exclusivas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clique e seja redirecionado diretamente para as melhores promoções dos principais marketplaces
            </p>
          </div>

          {/* Categorias Clicáveis */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Categorias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={category.link}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <category.icon className={`h-8 w-8 mx-auto mb-2 ${category.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Grid de Marketplaces */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaces.map((marketplace, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className={`h-32 bg-gradient-to-r ${marketplace.color} flex items-center justify-center`}>
                  <span className="text-6xl">{marketplace.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{marketplace.name}</h3>
                  <p className="text-gray-600 mb-4">{marketplace.description}</p>
                  <Link 
                    href={marketplace.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 group"
                  >
                    Ver Ofertas
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section 
        className="py-20 relative"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Por que escolher nosso site?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Seguro e Confiável</h3>
              <p className="text-white/80">Links diretos para os marketplaces oficiais. Sua segurança é nossa prioridade.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Melhores Ofertas</h3>
              <p className="text-white/80">Organizamos as promoções mais vantajosas para você economizar tempo e dinheiro.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <ShoppingBag className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fácil e Prático</h3>
              <p className="text-white/80">Acesso rápido a todos os principais marketplaces em um só lugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section 
        id="contato" 
        className="py-20 relative"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Redes Sociais */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Siga-nos</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-700">@meusdescontosonline</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Meus Descontos Online</span>
                </a>
                <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <Twitter className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-700">@descontosonline</span>
                </a>
                <a href="mailto:contato@meusdescontosonline.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <Mail className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-700">contato@meusdescontosonline.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer 
        className="py-12 relative"
        style={{ 
          backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Meus Descontos Online</span>
            </div>
            
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 mb-6 max-w-2xl mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Transparência:</strong> Este site contém links de afiliados. Ao comprar por eles, você apoia nosso trabalho sem pagar nada a mais. Todos os preços e ofertas são dos marketplaces oficiais.
              </p>
            </div>
            
            <p className="text-white/60 text-sm">
              © 2024 Meus Descontos Online. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}