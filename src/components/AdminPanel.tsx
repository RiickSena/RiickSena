'use client';

import { useState, useEffect } from 'react';
import { 
  Settings, 
  LogOut, 
  Save, 
  Eye, 
  Edit3, 
  Image, 
  Type, 
  Palette, 
  Link,
  Plus,
  Trash2,
  Monitor,
  Smartphone,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase, isSupabaseReady } from '@/lib/supabase';

interface AdminPanelProps {
  onLogout: () => void;
}

interface ContentSection {
  id?: string;
  section_name: string;
  title: string;
  description: string;
  content: any;
}

interface Marketplace {
  name: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

export default function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('hero');
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [sections, setSections] = useState<ContentSection[]>([]);
  const { signOut } = useAuth();

  // Estados para cada seção
  const [heroSection, setHeroSection] = useState({
    section_name: 'hero',
    title: 'Todos os Melhores Descontos em um só Lugar',
    description: 'Acesse rapidamente os melhores links de Mercado Livre, Amazon, Magazine Luiza, Americanas, Shopee e AliExpress. Economize tempo e dinheiro!',
    content: {
      buttonText: 'Aproveitar Agora',
      backgroundImage: 'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/adb866f1-f90b-4161-a0df-e4890fad1323.jpg'
    }
  });

  const [offersSection, setOffersSection] = useState({
    section_name: 'offers',
    title: 'Ofertas Exclusivas',
    description: 'Clique e seja redirecionado diretamente para as melhores promoções dos principais marketplaces',
    content: {
      marketplaces: [
        {
          name: 'Amazon',
          description: 'Milhões de produtos com entrega rápida',
          icon: '🛒',
          color: 'from-orange-400 to-orange-600',
          link: 'https://amazon.com.br'
        },
        {
          name: 'Mercado Livre',
          description: 'O maior marketplace da América Latina',
          icon: '💛',
          color: 'from-yellow-400 to-yellow-600',
          link: 'https://mercadolivre.com.br'
        },
        {
          name: 'Magazine Luiza',
          description: 'Tecnologia e casa com os melhores preços',
          icon: '💙',
          color: 'from-blue-400 to-blue-600',
          link: 'https://magazineluiza.com.br'
        },
        {
          name: 'Americanas',
          description: 'Variedade e conveniência em um só lugar',
          icon: '❤️',
          color: 'from-red-400 to-red-600',
          link: 'https://americanas.com.br'
        },
        {
          name: 'Shopee',
          description: 'Ofertas imperdíveis todos os dias',
          icon: '🧡',
          color: 'from-orange-500 to-pink-500',
          link: 'https://shopee.com.br'
        },
        {
          name: 'AliExpress',
          description: 'Produtos direto da China com frete grátis',
          icon: '🌟',
          color: 'from-purple-400 to-purple-600',
          link: 'https://aliexpress.com'
        }
      ]
    }
  });

  const [aboutSection, setAboutSection] = useState({
    section_name: 'about',
    title: 'Por que escolher nosso site?',
    description: 'Descubra os benefícios de usar nossa plataforma',
    content: {}
  });

  // Carregar dados existentes
  useEffect(() => {
    loadExistingData();
  }, []);

  const loadExistingData = async () => {
    if (!isSupabaseReady()) return;

    try {
      const { data, error } = await supabase
        .from('content_sections')
        .select('*');

      if (error) throw error;

      if (data && data.length > 0) {
        data.forEach((section: any) => {
          switch (section.section_name) {
            case 'hero':
              setHeroSection(section);
              break;
            case 'offers':
              setOffersSection(section);
              break;
            case 'about':
              setAboutSection(section);
              break;
          }
        });
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    
    try {
      if (isSupabaseReady()) {
        // Salvar no banco de dados
        const sectionsToSave = [heroSection, offersSection, aboutSection];
        
        for (const section of sectionsToSave) {
          const { error } = await supabase
            .from('content_sections')
            .upsert({
              section_name: section.section_name,
              title: section.title,
              description: section.description,
              content: section.content,
              updated_at: new Date().toISOString()
            }, {
              onConflict: 'section_name'
            });

          if (error) throw error;
        }
      }

      alert('✅ Conteúdo salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('❌ Erro ao salvar. Tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    onLogout();
  };

  const addMarketplace = () => {
    const newMarketplace: Marketplace = {
      name: 'Novo Marketplace',
      description: 'Descrição do marketplace',
      icon: '🛍️',
      color: 'from-gray-400 to-gray-600',
      link: 'https://exemplo.com'
    };

    setOffersSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        marketplaces: [...prev.content.marketplaces, newMarketplace]
      }
    }));
  };

  const removeMarketplace = (index: number) => {
    setOffersSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        marketplaces: prev.content.marketplaces.filter((_: any, i: number) => i !== index)
      }
    }));
  };

  const updateMarketplace = (index: number, field: keyof Marketplace, value: string) => {
    setOffersSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        marketplaces: prev.content.marketplaces.map((marketplace: Marketplace, i: number) => 
          i === index ? { ...marketplace, [field]: value } : marketplace
        )
      }
    }));
  };

  if (previewMode) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">Preview das Alterações</h2>
            <button
              onClick={() => setPreviewMode(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
            >
              Fechar Preview
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-8">
              {/* Preview Hero */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Seção Hero</h3>
                <h1 className="text-2xl font-bold mb-2">{heroSection.title}</h1>
                <p className="text-gray-600 mb-4">{heroSection.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  {heroSection.content.buttonText}
                </button>
              </div>

              {/* Preview Offers */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Seção Ofertas</h3>
                <h2 className="text-xl font-bold mb-2">{offersSection.title}</h2>
                <p className="text-gray-600 mb-4">{offersSection.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {offersSection.content.marketplaces.slice(0, 4).map((marketplace: Marketplace, index: number) => (
                    <div key={index} className="border rounded p-3">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{marketplace.icon}</span>
                        <h4 className="font-bold">{marketplace.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{marketplace.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do Admin */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Settings className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(true)}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
              
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? 'Salvando...' : 'Salvar'}</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de Navegação */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Seções</h2>
              <nav className="space-y-2">
                {[
                  { id: 'hero', name: 'Seção Principal', icon: Type },
                  { id: 'offers', name: 'Ofertas', icon: Link },
                  { id: 'about', name: 'Sobre', icon: Edit3 },
                  { id: 'design', name: 'Design', icon: Palette },
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Área de Conteúdo */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Seção Hero */}
              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Seção Principal (Hero)</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título Principal
                    </label>
                    <input
                      type="text"
                      value={heroSection.title}
                      onChange={(e) => setHeroSection(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Digite o título principal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição
                    </label>
                    <textarea
                      value={heroSection.description}
                      onChange={(e) => setHeroSection(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Digite a descrição"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Texto do Botão
                    </label>
                    <input
                      type="text"
                      value={heroSection.content.buttonText}
                      onChange={(e) => setHeroSection(prev => ({ 
                        ...prev, 
                        content: { ...prev.content, buttonText: e.target.value }
                      }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Texto do botão"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL da Imagem de Fundo
                    </label>
                    <input
                      type="url"
                      value={heroSection.content.backgroundImage}
                      onChange={(e) => setHeroSection(prev => ({ 
                        ...prev, 
                        content: { ...prev.content, backgroundImage: e.target.value }
                      }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://exemplo.com/imagem.jpg"
                    />
                  </div>
                </div>
              )}

              {/* Seção Ofertas */}
              {activeTab === 'offers' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Seção Ofertas</h2>
                    <button
                      onClick={addMarketplace}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Adicionar Marketplace</span>
                    </button>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título da Seção
                    </label>
                    <input
                      type="text"
                      value={offersSection.title}
                      onChange={(e) => setOffersSection(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição da Seção
                    </label>
                    <textarea
                      value={offersSection.description}
                      onChange={(e) => setOffersSection(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Lista de Marketplaces */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Marketplaces</h3>
                    {offersSection.content.marketplaces.map((marketplace: Marketplace, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-medium text-gray-900">Marketplace {index + 1}</h4>
                          <button
                            onClick={() => removeMarketplace(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                            <input
                              type="text"
                              value={marketplace.name}
                              onChange={(e) => updateMarketplace(index, 'name', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ícone (Emoji)</label>
                            <input
                              type="text"
                              value={marketplace.icon}
                              onChange={(e) => updateMarketplace(index, 'icon', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                            <input
                              type="text"
                              value={marketplace.description}
                              onChange={(e) => updateMarketplace(index, 'description', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                            <input
                              type="url"
                              value={marketplace.link}
                              onChange={(e) => updateMarketplace(index, 'link', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cor do Gradiente</label>
                            <select
                              value={marketplace.color}
                              onChange={(e) => updateMarketplace(index, 'color', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="from-orange-400 to-orange-600">Laranja</option>
                              <option value="from-yellow-400 to-yellow-600">Amarelo</option>
                              <option value="from-blue-400 to-blue-600">Azul</option>
                              <option value="from-red-400 to-red-600">Vermelho</option>
                              <option value="from-green-400 to-green-600">Verde</option>
                              <option value="from-purple-400 to-purple-600">Roxo</option>
                              <option value="from-pink-400 to-pink-600">Rosa</option>
                              <option value="from-indigo-400 to-indigo-600">Índigo</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Seção Sobre */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Seção Sobre</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título da Seção
                    </label>
                    <input
                      type="text"
                      value={aboutSection.title}
                      onChange={(e) => setAboutSection(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição da Seção
                    </label>
                    <textarea
                      value={aboutSection.description}
                      onChange={(e) => setAboutSection(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Seção Design */}
              {activeTab === 'design' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Configurações de Design</h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Palette className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-blue-900">Personalização Visual</h3>
                    </div>
                    <p className="text-blue-700 text-sm">
                      As configurações de design como cores, fontes e layout são aplicadas automaticamente. 
                      Use as outras seções para personalizar o conteúdo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Responsividade</h4>
                      <div className="flex items-center space-x-4">
                        <Monitor className="h-8 w-8 text-gray-600" />
                        <Smartphone className="h-8 w-8 text-gray-600" />
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        O site se adapta automaticamente a todos os dispositivos
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Performance</h4>
                      <div className="flex items-center space-x-2">
                        <RefreshCw className="h-6 w-6 text-green-600" />
                        <span className="text-sm text-gray-600">Otimizado automaticamente</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}