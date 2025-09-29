'use client';

import { useState } from 'react';
import { ArrowLeft, Shirt, ShoppingBag, Crown, Watch, Glasses, Footprints, Gem, Palette, Scissors, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ModaPage() {
  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    clothing: '#', // Substitua pelo seu link de afiliado para roupas
    shoes: '#', // Substitua pelo seu link de afiliado para calçados
    accessories: '#', // Substitua pelo seu link de afiliado para acessórios
    bags: '#', // Substitua pelo seu link de afiliado para bolsas
    jewelry: '#', // Substitua pelo seu link de afiliado para joias
    watches: '#', // Substitua pelo seu link de afiliado para relógios
    sunglasses: '#', // Substitua pelo seu link de afiliado para óculos
    lingerie: '#', // Substitua pelo seu link de afiliado para lingerie
    sportswear: '#', // Substitua pelo seu link de afiliado para roupas esportivas
    formal: '#', // Substitua pelo seu link de afiliado para roupas formais
  };

  const subcategories = [
    { name: 'Roupas', icon: Shirt, link: affiliateLinks.clothing, color: 'from-pink-500 to-pink-600' },
    { name: 'Calçados', icon: Footprints, link: affiliateLinks.shoes, color: 'from-purple-500 to-purple-600' },
    { name: 'Bolsas', icon: ShoppingBag, link: affiliateLinks.bags, color: 'from-red-500 to-red-600' },
    { name: 'Acessórios', icon: Crown, link: affiliateLinks.accessories, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Joias', icon: Gem, link: affiliateLinks.jewelry, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Relógios', icon: Watch, link: affiliateLinks.watches, color: 'from-blue-500 to-blue-600' },
    { name: 'Óculos', icon: Glasses, link: affiliateLinks.sunglasses, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Lingerie', icon: Heart, link: affiliateLinks.lingerie, color: 'from-rose-500 to-rose-600' },
    { name: 'Esportivo', icon: Palette, link: affiliateLinks.sportswear, color: 'from-green-500 to-green-600' },
    { name: 'Social', icon: Scissors, link: affiliateLinks.formal, color: 'from-gray-500 to-gray-600' },
  ];

  const featuredProducts = [
    {
      name: 'Vestido Midi Floral',
      price: 'R$ 89,90',
      originalPrice: 'R$ 129,90',
      discount: '31%',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      link: affiliateLinks.clothing,
      marketplace: 'Shopee'
    },
    {
      name: 'Tênis Casual Feminino',
      price: 'R$ 159,90',
      originalPrice: 'R$ 219,90',
      discount: '27%',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      link: affiliateLinks.shoes,
      marketplace: 'Amazon'
    },
    {
      name: 'Bolsa Transversal Couro',
      price: 'R$ 199,90',
      originalPrice: 'R$ 299,90',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      link: affiliateLinks.bags,
      marketplace: 'Magazine Luiza'
    },
    {
      name: 'Conjunto de Joias Douradas',
      price: 'R$ 79,90',
      originalPrice: 'R$ 119,90',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      link: affiliateLinks.jewelry,
      marketplace: 'AliExpress'
    },
    {
      name: 'Relógio Smartwatch',
      price: 'R$ 299,90',
      originalPrice: 'R$ 399,90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      link: affiliateLinks.watches,
      marketplace: 'Mercado Livre'
    },
    {
      name: 'Óculos de Sol Aviador',
      price: 'R$ 149,90',
      originalPrice: 'R$ 199,90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
      link: affiliateLinks.sunglasses,
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
            <Link href="/" className="flex items-center space-x-3 hover:text-pink-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-xl font-bold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Moda
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            👗 Moda & Estilo
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Descubra as últimas tendências da moda com preços incríveis. 
            Roupas, calçados, acessórios e muito mais para você arrasar!
          </p>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
            ✨ Tendências em Oferta - Aproveite!
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
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center block"
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
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              💎 Arrase com Estilo!
            </h2>
            <p className="text-white/90 text-lg mb-6">
              As melhores peças de moda com preços que cabem no seu bolso. 
              Renove seu guarda-roupa com as últimas tendências!
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