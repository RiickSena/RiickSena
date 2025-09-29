'use client';

import { useState } from 'react';
import { ShoppingCart, Star, Search, Menu, X, ArrowLeft, Package, Truck, Shield, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function AmazonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ÁREA PARA SEUS LINKS DE AFILIADO - SUBSTITUA OS LINKS ABAIXO
  const affiliateLinks = {
    electronics: 'https://amazon.com.br/electronics', // Substitua pelo seu link de afiliado
    home: 'https://amazon.com.br/home', // Substitua pelo seu link de afiliado
    fashion: 'https://amazon.com.br/fashion', // Substitua pelo seu link de afiliado
    books: 'https://amazon.com.br/books', // Substitua pelo seu link de afiliado
    sports: 'https://amazon.com.br/sports', // Substitua pelo seu link de afiliado
    beauty: 'https://amazon.com.br/beauty', // Substitua pelo seu link de afiliado
  };

  const categories = [
    { name: 'Eletrônicos', link: affiliateLinks.electronics, icon: '📱' },
    { name: 'Casa e Cozinha', link: affiliateLinks.home, icon: '🏠' },
    { name: 'Moda', link: affiliateLinks.fashion, icon: '👕' },
    { name: 'Livros', link: affiliateLinks.books, icon: '📚' },
    { name: 'Esportes', link: affiliateLinks.sports, icon: '⚽' },
    { name: 'Beleza', link: affiliateLinks.beauty, icon: '💄' },
  ];

  const featuredProducts = [
    {
      name: 'Echo Dot (5ª Geração)',
      price: 'R$ 349,00',
      originalPrice: 'R$ 449,00',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics
    },
    {
      name: 'Fire TV Stick 4K Max',
      price: 'R$ 379,00',
      originalPrice: 'R$ 449,00',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics
    },
    {
      name: 'Kindle Paperwhite',
      price: 'R$ 549,00',
      originalPrice: 'R$ 649,00',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      link: affiliateLinks.books
    },
    {
      name: 'AirPods Pro',
      price: 'R$ 1.899,00',
      originalPrice: 'R$ 2.199,00',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop',
      link: affiliateLinks.electronics
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header estilo Amazon */}
      <header className="bg-[#131921] text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm">Voltar</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FF9900] text-black px-2 py-1 rounded text-xl font-bold">
                  amazon
                </div>
                <span className="text-sm">.com.br</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="text-xs">
                <div>Olá, faça seu login</div>
                <div className="font-bold">Contas e Listas</div>
              </div>
              <div className="text-xs">
                <div>Devoluções</div>
                <div className="font-bold">e Pedidos</div>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-xs">Carrinho</span>
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
            <div className="flex">
              <select className="bg-gray-200 text-black px-3 py-2 rounded-l-md text-sm">
                <option>Todos</option>
                <option>Eletrônicos</option>
                <option>Casa</option>
                <option>Moda</option>
              </select>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar Amazon.com.br"
                className="flex-1 px-4 py-2 text-black"
              />
              <button className="bg-[#FF9900] px-4 py-2 rounded-r-md hover:bg-[#e88b00] transition-colors">
                <Search className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-[#232F3E] py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center space-x-1">
                <Menu className="h-4 w-4" />
                <span>Todos</span>
              </span>
              <span>Mais Vendidos</span>
              <span>Ofertas do Dia</span>
              <span>Prime</span>
              <span>Livros</span>
              <span>Eletrônicos</span>
              <span>Casa</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#FF9900] to-[#FFB84D] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Ofertas Exclusivas Amazon
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Milhões de produtos com entrega rápida e segura
          </p>
          <div className="flex justify-center space-x-4 text-sm text-white">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Frete GRÁTIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Compra Protegida</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Parcelamento</span>
            </div>
          </div>
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
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#FF9900] transition-colors">
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
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                  <div className="mb-3">
                    <span className="text-lg font-bold text-[#B12704]">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#FF9900] hover:bg-[#e88b00] text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-center block"
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
      <section className="py-12 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Package className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Receba seus produtos com agilidade e segurança</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compra Protegida</h3>
              <p className="text-gray-600">Garantia Amazon de satisfação ou seu dinheiro de volta</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Parcelamento</h3>
              <p className="text-gray-600">Parcele suas compras em até 12x sem juros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131921] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-[#FF9900] text-black px-4 py-2 rounded text-2xl font-bold inline-block mb-4">
              amazon
            </div>
            <p className="text-gray-400 text-sm mb-4">
              © 2024 Amazon.com, Inc. ou suas afiliadas. Todos os direitos reservados.
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 text-sm">
                <strong>Aviso:</strong> Esta página contém links de afiliados da Amazon. 
                Ao comprar através destes links, você apoia nosso trabalho sem pagar nada a mais.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}