'use client';

import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, ArrowLeft, Truck, Shield, CreditCard, Star } from 'lucide-react';
import Link from 'next/link';

export default function MercadoLivrePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    electronics: 'https://mercadolivre.com.br/electronics', // Substitua pelo seu link de afiliado
    home: 'https://mercadolivre.com.br/home', // Substitua pelo seu link de afiliado
    fashion: 'https://mercadolivre.com.br/fashion', // Substitua pelo seu link de afiliado
    sports: 'https://mercadolivre.com.br/sports', // Substitua pelo seu link de afiliado
    automotive: 'https://mercadolivre.com.br/automotive', // Substitua pelo seu link de afiliado
    beauty: 'https://mercadolivre.com.br/beauty', // Substitua pelo seu link de afiliado
  };

  const categories = [
    { name: 'Tecnologia', link: affiliateLinks.electronics, icon: '📱', color: 'bg-blue-500' },
    { name: 'Casa e Jardim', link: affiliateLinks.home, icon: '🏠', color: 'bg-green-500' },
    { name: 'Moda', link: affiliateLinks.fashion, icon: '👕', color: 'bg-pink-500' },
    { name: 'Esportes', link: affiliateLinks.sports, icon: '⚽', color: 'bg-orange-500' },
    { name: 'Veículos', link: affiliateLinks.automotive, icon: '🚗', color: 'bg-red-500' },
    { name: 'Beleza', link: affiliateLinks.beauty, icon: '💄', color: 'bg-purple-500' },
  ];

  const featuredProducts = [
    {
      name: 'iPhone 15 Pro Max 256GB',
      price: 'R$ 8.999',
      originalPrice: 'R$ 9.999',
      installments: '12x R$ 749,92',
      rating: 4.8,
      reviews: 1250,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      freeShipping: true
    },
    {
      name: 'Smart TV 55" 4K Samsung',
      price: 'R$ 2.399',
      originalPrice: 'R$ 2.899',
      installments: '10x R$ 239,90',
      rating: 4.6,
      reviews: 890,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      freeShipping: true
    },
    {
      name: 'Notebook Gamer Acer Nitro 5',
      price: 'R$ 3.299',
      originalPrice: 'R$ 3.799',
      installments: '12x R$ 274,92',
      rating: 4.7,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      freeShipping: true
    },
    {
      name: 'Air Fryer Philips Walita',
      price: 'R$ 399',
      originalPrice: 'R$ 499',
      installments: '6x R$ 66,50',
      rating: 4.9,
      reviews: 2340,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
      link: affiliateLinks.home,
      freeShipping: true
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header estilo Mercado Livre */}
      <header className="bg-[#FFF159] shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Voltar</span>
              </Link>
              <div className="text-2xl font-bold text-blue-600">
                Mercado<span className="text-blue-500">Livre</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="text-sm text-gray-700">
                <div>Olá! Entre na sua conta</div>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Favoritos</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">Carrinho</span>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Search bar */}
          <div className="pb-4">
            <div className="flex max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar produtos, marcas e muito mais..."
                className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-r-md transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 text-sm text-gray-600 overflow-x-auto">
            <span className="whitespace-nowrap">Categorias</span>
            <span className="whitespace-nowrap">Ofertas</span>
            <span className="whitespace-nowrap">Histórico</span>
            <span className="whitespace-nowrap">Supermercado</span>
            <span className="whitespace-nowrap">Moda</span>
            <span className="whitespace-nowrap">Vender</span>
            <span className="whitespace-nowrap">Contato</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Ofertas Imperdíveis no Mercado Livre
          </h1>
          <p className="text-xl text-white/90 mb-6">
            O maior marketplace da América Latina com os melhores preços
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Frete GRÁTIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Compra Garantida</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Parcelamento sem juros</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorias em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white border rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.freeShipping && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Frete grátis
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-green-600 font-medium">{product.installments} sem juros</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-center block"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Em milhares de produtos para todo o Brasil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compra Garantida</h3>
              <p className="text-gray-600">Receba o produto que está esperando ou devolvemos o dinheiro</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Parcelamento</h3>
              <p className="text-gray-600">Parcele suas compras em até 12x sem juros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-4">
              Mercado<span className="text-blue-500">Livre</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Copyright © 1999-2024 MercadoLibre S.R.L.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Aviso:</strong> Esta página contém links de afiliados do Mercado Livre. 
                Ao comprar através destes links, você apoia nosso trabalho sem pagar nada a mais.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}