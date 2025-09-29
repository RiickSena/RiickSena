'use client';

import { useState } from 'react';
import { ArrowLeft, Gamepad2, Monitor, Headphones, Keyboard, Mouse, Joystick, Cpu, HardDrive, Wifi, Zap } from 'lucide-react';
import Link from 'next/link';

export default function GamesPage() {
  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    consoles: '#', // Substitua pelo seu link de afiliado para consoles
    games: '#', // Substitua pelo seu link de afiliado para jogos
    accessories: '#', // Substitua pelo seu link de afiliado para acessórios
    headsets: '#', // Substitua pelo seu link de afiliado para headsets
    keyboards: '#', // Substitua pelo seu link de afiliado para teclados gamer
    mice: '#', // Substitua pelo seu link de afiliado para mouses gamer
    monitors: '#', // Substitua pelo seu link de afiliado para monitores gamer
    chairs: '#', // Substitua pelo seu link de afiliado para cadeiras gamer
    pc: '#', // Substitua pelo seu link de afiliado para PCs gamer
    mobile: '#', // Substitua pelo seu link de afiliado para mobile gaming
  };

  const subcategories = [
    { name: 'Consoles', icon: Gamepad2, link: affiliateLinks.consoles, color: 'from-blue-500 to-blue-600' },
    { name: 'Jogos', icon: Joystick, link: affiliateLinks.games, color: 'from-green-500 to-green-600' },
    { name: 'Headsets', icon: Headphones, link: affiliateLinks.headsets, color: 'from-purple-500 to-purple-600' },
    { name: 'Teclados', icon: Keyboard, link: affiliateLinks.keyboards, color: 'from-red-500 to-red-600' },
    { name: 'Mouses', icon: Mouse, link: affiliateLinks.mice, color: 'from-orange-500 to-orange-600' },
    { name: 'Monitores', icon: Monitor, link: affiliateLinks.monitors, color: 'from-indigo-500 to-indigo-600' },
    { name: 'PC Gamer', icon: Cpu, link: affiliateLinks.pc, color: 'from-pink-500 to-pink-600' },
    { name: 'Acessórios', icon: HardDrive, link: affiliateLinks.accessories, color: 'from-teal-500 to-teal-600' },
    { name: 'Mobile Gaming', icon: Wifi, link: affiliateLinks.mobile, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Cadeiras', icon: Zap, link: affiliateLinks.chairs, color: 'from-gray-500 to-gray-600' },
  ];

  const featuredProducts = [
    {
      name: 'PlayStation 5 Console',
      price: 'R$ 3.999,00',
      originalPrice: 'R$ 4.499,00',
      discount: '11%',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      link: affiliateLinks.consoles,
      marketplace: 'Amazon'
    },
    {
      name: 'Teclado Mecânico RGB',
      price: 'R$ 299,00',
      originalPrice: 'R$ 399,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      link: affiliateLinks.keyboards,
      marketplace: 'Mercado Livre'
    },
    {
      name: 'Headset Gamer 7.1',
      price: 'R$ 199,00',
      originalPrice: 'R$ 299,00',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop',
      link: affiliateLinks.headsets,
      marketplace: 'Shopee'
    },
    {
      name: 'Monitor Gamer 144Hz',
      price: 'R$ 1.299,00',
      originalPrice: 'R$ 1.599,00',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
      link: affiliateLinks.monitors,
      marketplace: 'Magazine Luiza'
    },
    {
      name: 'Mouse Gamer RGB',
      price: 'R$ 149,00',
      originalPrice: 'R$ 199,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      link: affiliateLinks.mice,
      marketplace: 'AliExpress'
    },
    {
      name: 'Cadeira Gamer Pro',
      price: 'R$ 899,00',
      originalPrice: 'R$ 1.199,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop',
      link: affiliateLinks.chairs,
      marketplace: 'Americanas'
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg')`
      }}
    >
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:text-green-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-xl font-bold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Games
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🎮 Mundo Gamer
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Tudo para elevar seu game ao próximo nível! 
            Consoles, periféricos, jogos e acessórios com os melhores preços.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
            🚀 Level Up nas Ofertas!
          </div>
        </div>
      </section>

      {/* Subcategorias */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Escolha sua Categoria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {subcategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={index}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-2xl group`}
                >
                  <IconComponent className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white text-sm md:text-base">
                    {category.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            🏆 Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount} OFF
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                    {product.marketplace}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    <span className="text-gray-400 line-through ml-3">{product.originalPrice}</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
                  >
                    🛒 Comprar Agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎯 Game On!
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Equipamentos profissionais para gamers exigentes. 
              Performance, qualidade e preços que cabem no seu orçamento!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                ✅ Frete Grátis
              </div>
              <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                💳 Parcelamento
              </div>
              <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                🔒 Compra Segura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-yellow-300 text-sm">
              <strong>Aviso:</strong> Esta página contém links de afiliados. 
              Ao comprar através destes links, você apoia nosso trabalho sem pagar nada a mais.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}