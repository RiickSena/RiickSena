'use client';

import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X, ArrowLeft, Truck, Shield, CreditCard, Star, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AliExpressPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    electronics: 'https://aliexpress.com/electronics', // Substitua pelo seu link de afiliado
    fashion: 'https://aliexpress.com/fashion', // Substitua pelo seu link de afiliado
    home: 'https://aliexpress.com/home', // Substitua pelo seu link de afiliado
    beauty: 'https://aliexpress.com/beauty', // Substitua pelo seu link de afiliado
    sports: 'https://aliexpress.com/sports', // Substitua pelo seu link de afiliado
    toys: 'https://aliexpress.com/toys', // Substitua pelo seu link de afiliado
  };

  const categories = [
    { name: 'Eletrônicos', link: affiliateLinks.electronics, icon: '📱', color: 'bg-red-500' },
    { name: 'Moda', link: affiliateLinks.fashion, icon: '👕', color: 'bg-pink-500' },
    { name: 'Casa & Jardim', link: affiliateLinks.home, icon: '🏠', color: 'bg-green-500' },
    { name: 'Beleza', link: affiliateLinks.beauty, icon: '💄', color: 'bg-purple-500' },
    { name: 'Esportes', link: affiliateLinks.sports, icon: '⚽', color: 'bg-blue-500' },
    { name: 'Brinquedos', link: affiliateLinks.toys, icon: '🧸', color: 'bg-yellow-500' },
  ];

  const featuredProducts = [
    {
      name: 'Smartwatch Xiaomi Mi Band 8',
      price: 'R$ 89,90',
      originalPrice: 'R$ 159,90',
      discount: '44%',
      rating: 4.8,
      orders: '50k+ pedidos',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      freeShipping: true
    },
    {
      name: 'Conjunto Feminino Verão',
      price: 'R$ 45,90',
      originalPrice: 'R$ 89,90',
      discount: '49%',
      rating: 4.6,
      orders: '30k+ pedidos',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop',
      link: affiliateLinks.fashion,
      freeShipping: true
    },
    {
      name: 'Kit Ferramentas 108 Peças',
      price: 'R$ 79,90',
      originalPrice: 'R$ 149,90',
      discount: '47%',
      rating: 4.7,
      orders: '25k+ pedidos',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop',
      link: affiliateLinks.home,
      freeShipping: true
    },
    {
      name: 'Fone Bluetooth TWS Pro',
      price: 'R$ 39,90',
      originalPrice: 'R$ 99,90',
      discount: '60%',
      rating: 4.9,
      orders: '100k+ pedidos',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics,
      freeShipping: true
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header estilo AliExpress */}
      <header className="bg-[#FF6A00]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-white border-b border-orange-600">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Português</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Baixe o App</span>
              <span>Venda no AliExpress</span>
              <span>Ajuda</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">
                AliExpress
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-white">
              <div className="text-sm">
                <div>Olá! Entrar</div>
                <div className="font-bold">Registrar</div>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Lista de Desejos</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">Carrinho</span>
              </div>
            </div>

            <button 
              className="md:hidden text-white"
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
                placeholder="Buscar no AliExpress"
                className="flex-1 px-4 py-3 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-r-md transition-colors">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-[#e55a00] py-3">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-8 text-sm text-white overflow-x-auto">
              <span className="whitespace-nowrap">Todas as categorias</span>
              <span className="whitespace-nowrap">Super Deals</span>
              <span className="whitespace-nowrap">Eletrônicos</span>
              <span className="whitespace-nowrap">Moda</span>
              <span className="whitespace-nowrap">Casa</span>
              <span className="whitespace-nowrap">Esportes</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#FF6A00] to-[#ff8533] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            🌟 Super Ofertas AliExpress
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Produtos direto da China com frete grátis e os melhores preços
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Frete GRÁTIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Proteção ao Comprador</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Super Deals Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-white">
            <span className="text-2xl">💥</span>
            <h2 className="text-2xl font-bold">SUPER DEALS</h2>
            <span className="text-2xl">💥</span>
          </div>
          <p className="text-white/90 mt-2">Até 70% OFF + Frete Grátis!</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorias Populares</h2>
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
                <h3 className="font-semibold text-gray-900 group-hover:text-[#FF6A00] transition-colors">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">🔥 Produtos Mais Vendidos</h2>
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
                  {product.freeShipping && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
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
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-[#FF6A00]">{product.price}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">{product.orders}</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#FF6A00] hover:bg-[#e55a00] text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-center block"
                  >
                    Comprar Agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Em milhares de produtos selecionados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proteção ao Comprador</h3>
              <p className="text-gray-600">Garantia de reembolso se não receber o produto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">Múltiplas opções de pagamento protegidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF6A00] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">
              AliExpress
            </div>
            <p className="text-orange-200 text-sm mb-4">
              © 2024 AliExpress.com - Todos os direitos reservados
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Aviso:</strong> Esta página contém links de afiliados do AliExpress. 
                Ao comprar através destes links, você apoia nosso trabalho sem pagar nada a mais.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}