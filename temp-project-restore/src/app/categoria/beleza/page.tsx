'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Heart, Palette, Scissors, Droplets, Sun, Moon, Flower2, Brush, Zap } from 'lucide-react';
import Link from 'next/link';

export default function BelezaPage() {
  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    skincare: '#', // Substitua pelo seu link de afiliado para cuidados com a pele
    makeup: '#', // Substitua pelo seu link de afiliado para maquiagem
    haircare: '#', // Substitua pelo seu link de afiliado para cabelos
    fragrance: '#', // Substitua pelo seu link de afiliado para perfumes
    nails: '#', // Substitua pelo seu link de afiliado para unhas
    tools: '#', // Substitua pelo seu link de afiliado para ferramentas de beleza
    suncare: '#', // Substitua pelo seu link de afiliado para proteção solar
    bodycare: '#', // Substitua pelo seu link de afiliado para cuidados corporais
    organic: '#', // Substitua pelo seu link de afiliado para produtos naturais
    accessories: '#', // Substitua pelo seu link de afiliado para acessórios
  };

  const subcategories = [
    { name: 'Skincare', icon: Sparkles, link: affiliateLinks.skincare, color: 'from-pink-500 to-pink-600' },
    { name: 'Maquiagem', icon: Palette, link: affiliateLinks.makeup, color: 'from-purple-500 to-purple-600' },
    { name: 'Cabelos', icon: Scissors, link: affiliateLinks.haircare, color: 'from-orange-500 to-orange-600' },
    { name: 'Perfumes', icon: Flower2, link: affiliateLinks.fragrance, color: 'from-blue-500 to-blue-600' },
    { name: 'Unhas', icon: Brush, link: affiliateLinks.nails, color: 'from-red-500 to-red-600' },
    { name: 'Ferramentas', icon: Zap, link: affiliateLinks.tools, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Proteção Solar', icon: Sun, link: affiliateLinks.suncare, color: 'from-orange-400 to-yellow-500' },
    { name: 'Corpo', icon: Droplets, link: affiliateLinks.bodycare, color: 'from-teal-500 to-teal-600' },
    { name: 'Natural', icon: Flower2, link: affiliateLinks.organic, color: 'from-green-500 to-green-600' },
    { name: 'Acessórios', icon: Heart, link: affiliateLinks.accessories, color: 'from-rose-500 to-rose-600' },
  ];

  const featuredProducts = [
    {
      name: 'Kit Skincare Completo',
      price: 'R$ 199,90',
      originalPrice: 'R$ 299,90',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      link: affiliateLinks.skincare,
      marketplace: 'Amazon'
    },
    {
      name: 'Paleta de Sombras 120 Cores',
      price: 'R$ 89,90',
      originalPrice: 'R$ 129,90',
      discount: '31%',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
      link: affiliateLinks.makeup,
      marketplace: 'Shopee'
    },
    {
      name: 'Secador Profissional Íons',
      price: 'R$ 299,90',
      originalPrice: 'R$ 399,90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=400&fit=crop',
      link: affiliateLinks.haircare,
      marketplace: 'Magazine Luiza'
    },
    {
      name: 'Perfume Importado 100ml',
      price: 'R$ 149,90',
      originalPrice: 'R$ 199,90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      link: affiliateLinks.fragrance,
      marketplace: 'Americanas'
    },
    {
      name: 'Kit Esmaltes 12 Cores',
      price: 'R$ 79,90',
      originalPrice: 'R$ 119,90',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop',
      link: affiliateLinks.nails,
      marketplace: 'Mercado Livre'
    },
    {
      name: 'Protetor Solar FPS 60',
      price: 'R$ 59,90',
      originalPrice: 'R$ 89,90',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop',
      link: affiliateLinks.suncare,
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
            <Link href="/" className="flex items-center space-x-3 hover:text-pink-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-xl font-bold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Beleza
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ✨ Mundo da Beleza
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Realce sua beleza natural com os melhores produtos! 
            Skincare, maquiagem, perfumes e muito mais com preços especiais.
          </p>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
            💄 Beleza em Oferta - Aproveite!
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
              🌟 Sua Beleza em Destaque!
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Produtos de qualidade para realçar sua beleza natural. 
              Marcas renomadas com preços que cabem no seu orçamento!
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