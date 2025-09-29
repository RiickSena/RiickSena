'use client';

import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, ArrowLeft, Truck, Shield, CreditCard, Star, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function MagazineLuizaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    electronics: 'https://magazineluiza.com.br/electronics', // Substitua pelo seu link de afiliado
    home: 'https://magazineluiza.com.br/home', // Substitua pelo seu link de afiliado
    fashion: 'https://magazineluiza.com.br/fashion', // Substitua pelo seu link de afiliado
    beauty: 'https://magazineluiza.com.br/beauty', // Substitua pelo seu link de afiliado
    sports: 'https://magazineluiza.com.br/sports', // Substitua pelo seu link de afiliado
    furniture: 'https://magazineluiza.com.br/furniture', // Substitua pelo seu link de afiliado
  };

  const categories = [
    { name: 'Eletrônicos', link: affiliateLinks.electronics, icon: '📱', color: 'bg-blue-600' },
    { name: 'Eletrodomésticos', link: affiliateLinks.home, icon: '🏠', color: 'bg-green-600' },
    { name: 'Moda', link: affiliateLinks.fashion, icon: '👕', color: 'bg-pink-600' },
    { name: 'Beleza', link: affiliateLinks.beauty, icon: '💄', color: 'bg-purple-600' },
    { name: 'Esportes', link: affiliateLinks.sports, icon: '⚽', color: 'bg-orange-600' },
    { name: 'Móveis', link: affiliateLinks.furniture, icon: '🛋️', color: 'bg-red-600' },
  ];

  const featuredProducts = [
    {
      name: 'Smartphone Samsung Galaxy A54',
      price: 'R$ 1.699,00',
      originalPrice: 'R$ 1.999,00',
      installments: '10x de R$ 169,90',
      rating: 4.7,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      discount: '15%'
    },
    {
      name: 'Geladeira Brastemp Frost Free',
      price: 'R$ 2.299,00',
      originalPrice: 'R$ 2.699,00',
      installments: '12x de R$ 191,58',
      rating: 4.8,
      reviews: 1456,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop',
      link: affiliateLinks.home,
      discount: '15%'
    },
    {
      name: 'Smart TV LG 50" 4K UHD',
      price: 'R$ 1.899,00',
      originalPrice: 'R$ 2.299,00',
      installments: '10x de R$ 189,90',
      rating: 4.6,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      discount: '17%'
    },
    {
      name: 'Máquina de Lavar Electrolux',
      price: 'R$ 1.399,00',
      originalPrice: 'R$ 1.699,00',
      installments: '10x de R$ 139,90',
      rating: 4.9,
      reviews: 2134,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
      link: affiliateLinks.home,
      discount: '18%'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header estilo Magazine Luiza */}
      <header className="bg-[#0F4C81] text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm border-b border-blue-700">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>CEP</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Baixe o App</span>
              <span>Venda na Magalu</span>
              <span>Atendimento</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">
                <span className="text-white">Magazine</span>
                <span className="text-yellow-400">Luiza</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="text-sm">
                <div>Olá! Faça seu login</div>
                <div className="font-bold">ou cadastre-se</div>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Favoritos</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">Sacola</span>
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
                placeholder="Busque aqui seu produto..."
                className="flex-1 px-4 py-3 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-r-md transition-colors">
                <Search className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-[#003d6b] py-3">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-8 text-sm overflow-x-auto">
              <span className="whitespace-nowrap">Todas as categorias</span>
              <span className="whitespace-nowrap">Ofertas do Dia</span>
              <span className="whitespace-nowrap">Eletrônicos</span>
              <span className="whitespace-nowrap">Casa</span>
              <span className="whitespace-nowrap">Moda</span>
              <span className="whitespace-nowrap">Beleza</span>
              <span className="whitespace-nowrap">Esportes</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#0F4C81] to-[#1e5a96] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Ofertas Especiais Magazine Luiza
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Tecnologia e casa com os melhores preços do Brasil
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Cartão Luiza</span>
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
                <h3 className="font-semibold text-gray-900 group-hover:text-[#0F4C81] transition-colors">
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
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}
                  </div>
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
                    <span className="text-2xl font-bold text-[#0F4C81]">{product.price}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">{product.installments} sem juros</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0F4C81] hover:bg-[#003d6b] text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-center block"
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
              <div className="w-16 h-16 bg-[#0F4C81] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Receba em casa ou retire na loja mais próxima</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compra Protegida</h3>
              <p className="text-gray-600">Garantia de satisfação ou seu dinheiro de volta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cartão Luiza</h3>
              <p className="text-gray-600">Parcelamento especial e cashback exclusivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F4C81] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Magazine</span>
              <span className="text-yellow-400">Luiza</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              © 2024 Magazine Luiza S/A - CNPJ: 47.960.950/0001-21
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Aviso:</strong> Esta página contém links de afiliados do Magazine Luiza. 
                Ao comprar através destes links, você apoia nosso trabalho sem pagar nada a mais.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}