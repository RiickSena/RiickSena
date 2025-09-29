'use client';

import { useState } from 'react';
import { ArrowLeft, Home, Sofa, Utensils, Bed, Lightbulb, Flower, Wrench, Droplets, TreePine, Scissors } from 'lucide-react';
import Link from 'next/link';

export default function CasaJardimPage() {
  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    furniture: '#', // Substitua pelo seu link de afiliado para móveis
    kitchen: '#', // Substitua pelo seu link de afiliado para cozinha
    bedroom: '#', // Substitua pelo seu link de afiliado para quarto
    lighting: '#', // Substitua pelo seu link de afiliado para iluminação
    garden: '#', // Substitua pelo seu link de afiliado para jardim
    tools: '#', // Substitua pelo seu link de afiliado para ferramentas
    bathroom: '#', // Substitua pelo seu link de afiliado para banheiro
    plants: '#', // Substitua pelo seu link de afiliado para plantas
    outdoor: '#', // Substitua pelo seu link de afiliado para área externa
    organization: '#', // Substitua pelo seu link de afiliado para organização
  };

  const subcategories = [
    { name: 'Móveis', icon: Sofa, link: affiliateLinks.furniture, color: 'from-brown-500 to-brown-600' },
    { name: 'Cozinha', icon: Utensils, link: affiliateLinks.kitchen, color: 'from-red-500 to-red-600' },
    { name: 'Quarto', icon: Bed, link: affiliateLinks.bedroom, color: 'from-purple-500 to-purple-600' },
    { name: 'Iluminação', icon: Lightbulb, link: affiliateLinks.lighting, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Jardim', icon: Flower, link: affiliateLinks.garden, color: 'from-green-500 to-green-600' },
    { name: 'Ferramentas', icon: Wrench, link: affiliateLinks.tools, color: 'from-gray-500 to-gray-600' },
    { name: 'Banheiro', icon: Droplets, link: affiliateLinks.bathroom, color: 'from-blue-500 to-blue-600' },
    { name: 'Plantas', icon: TreePine, link: affiliateLinks.plants, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Área Externa', icon: Home, link: affiliateLinks.outdoor, color: 'from-orange-500 to-orange-600' },
    { name: 'Organização', icon: Scissors, link: affiliateLinks.organization, color: 'from-pink-500 to-pink-600' },
  ];

  const featuredProducts = [
    {
      name: 'Sofá 3 Lugares Retrátil',
      price: 'R$ 1.299,00',
      originalPrice: 'R$ 1.599,00',
      discount: '19%',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      link: affiliateLinks.furniture,
      marketplace: 'Magazine Luiza'
    },
    {
      name: 'Conjunto de Panelas Antiaderente',
      price: 'R$ 299,00',
      originalPrice: 'R$ 399,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      link: affiliateLinks.kitchen,
      marketplace: 'Amazon'
    },
    {
      name: 'Cama Box Casal + Colchão',
      price: 'R$ 899,00',
      originalPrice: 'R$ 1.199,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop',
      link: affiliateLinks.bedroom,
      marketplace: 'Americanas'
    },
    {
      name: 'Lustre LED Moderno',
      price: 'R$ 199,00',
      originalPrice: 'R$ 299,00',
      discount: '33%',
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop',
      link: affiliateLinks.lighting,
      marketplace: 'Mercado Livre'
    },
    {
      name: 'Kit Jardinagem Completo',
      price: 'R$ 149,00',
      originalPrice: 'R$ 199,00',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      link: affiliateLinks.garden,
      marketplace: 'Shopee'
    },
    {
      name: 'Furadeira de Impacto',
      price: 'R$ 249,00',
      originalPrice: 'R$ 349,00',
      discount: '29%',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop',
      link: affiliateLinks.tools,
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
            <Link href="/" className="flex items-center space-x-3 hover:text-green-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-xl font-bold">Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Casa & Jardim
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🏠 Casa & Jardim
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transforme sua casa em um lar aconchegante e seu jardim em um paraíso. 
            Móveis, decoração, ferramentas e muito mais!
          </p>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
            🌿 Ofertas para Sua Casa - Aproveite!
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
              🏡 Transforme Sua Casa!
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Encontre tudo para deixar sua casa mais bonita e funcional. 
              Móveis, decoração, jardim e muito mais com os melhores preços!
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