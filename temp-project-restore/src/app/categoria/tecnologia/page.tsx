'use client';

import { useState } from 'react';
import { ArrowLeft, Smartphone, Laptop, Headphones, Camera, Watch, Gamepad2, Monitor, Tablet, Speaker, Keyboard } from 'lucide-react';
import Link from 'next/link';

export default function TecnologiaPage() {
  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    smartphones: '#', // Substitua pelo seu link de afiliado para smartphones
    laptops: '#', // Substitua pelo seu link de afiliado para laptops
    headphones: '#', // Substitua pelo seu link de afiliado para fones
    cameras: '#', // Substitua pelo seu link de afiliado para câmeras
    smartwatches: '#', // Substitua pelo seu link de afiliado para smartwatches
    gaming: '#', // Substitua pelo seu link de afiliado para gaming
    monitors: '#', // Substitua pelo seu link de afiliado para monitores
    tablets: '#', // Substitua pelo seu link de afiliado para tablets
    speakers: '#', // Substitua pelo seu link de afiliado para caixas de som
    accessories: '#', // Substitua pelo seu link de afiliado para acessórios
  };

  const subcategories = [
    { name: 'Smartphones', icon: Smartphone, link: affiliateLinks.smartphones, color: 'from-blue-500 to-blue-600' },
    { name: 'Laptops', icon: Laptop, link: affiliateLinks.laptops, color: 'from-purple-500 to-purple-600' },
    { name: 'Fones de Ouvido', icon: Headphones, link: affiliateLinks.headphones, color: 'from-green-500 to-green-600' },
    { name: 'Câmeras', icon: Camera, link: affiliateLinks.cameras, color: 'from-red-500 to-red-600' },
    { name: 'Smartwatches', icon: Watch, link: affiliateLinks.smartwatches, color: 'from-orange-500 to-orange-600' },
    { name: 'Gaming', icon: Gamepad2, link: affiliateLinks.gaming, color: 'from-pink-500 to-pink-600' },
    { name: 'Monitores', icon: Monitor, link: affiliateLinks.monitors, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Tablets', icon: Tablet, link: affiliateLinks.tablets, color: 'from-teal-500 to-teal-600' },
    { name: 'Caixas de Som', icon: Speaker, link: affiliateLinks.speakers, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Acessórios', icon: Keyboard, link: affiliateLinks.accessories, color: 'from-gray-500 to-gray-600' },
  ];

  const featuredProducts = [
    {
      name: 'iPhone 15 Pro Max',
      price: 'R$ 8.999,00',
      originalPrice: 'R$ 9.999,00',
      discount: '10%',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      link: affiliateLinks.smartphones,
      marketplace: 'Amazon'
    },
    {
      name: 'MacBook Air M2',
      price: 'R$ 7.499,00',
      originalPrice: 'R$ 8.499,00',
      discount: '12%',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      link: affiliateLinks.laptops,
      marketplace: 'Magazine Luiza'
    },
    {
      name: 'AirPods Pro 2',
      price: 'R$ 1.899,00',
      originalPrice: 'R$ 2.199,00',
      discount: '14%',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
      link: affiliateLinks.headphones,
      marketplace: 'Mercado Livre'
    },
    {
      name: 'Canon EOS R6',
      price: 'R$ 12.999,00',
      originalPrice: 'R$ 14.999,00',
      discount: '13%',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
      link: affiliateLinks.cameras,
      marketplace: 'Americanas'
    },
    {
      name: 'Apple Watch Series 9',
      price: 'R$ 3.499,00',
      originalPrice: 'R$ 3.999,00',
      discount: '13%',
      image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop',
      link: affiliateLinks.smartwatches,
      marketplace: 'Shopee'
    },
    {
      name: 'PlayStation 5',
      price: 'R$ 3.999,00',
      originalPrice: 'R$ 4.499,00',
      discount: '11%',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      link: affiliateLinks.gaming,
      marketplace: 'AliExpress'
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
            <Link href="/" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-xl font-bold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tecnologia
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🔥 Tecnologia em Oferta
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Descubra os melhores produtos tecnológicos com descontos imperdíveis. 
            Smartphones, laptops, gadgets e muito mais!
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
            ⚡ Ofertas Limitadas - Aproveite Agora!
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              💡 Não Perca Essas Ofertas!
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Produtos tecnológicos com os melhores preços e condições especiais. 
              Ofertas por tempo limitado!
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