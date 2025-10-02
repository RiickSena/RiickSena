import { createClient } from '@supabase/supabase-js'

// Verificar se as variáveis de ambiente estão configuradas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW8iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTU2NzI0MCwiZXhwIjoxOTYxMTQzMjQwfQ.demo-key'

// Verificar se as credenciais são válidas (não são placeholders)
const isSupabaseConfigured = 
  supabaseUrl !== 'https://demo.supabase.co' && 
  supabaseAnonKey !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbW8iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTU2NzI0MCwiZXhwIjoxOTYxMTQzMjQwfQ.demo-key' &&
  supabaseUrl.startsWith('https://') &&
  supabaseAnonKey.length > 20

// Criar cliente Supabase apenas se configurado corretamente
let supabase: any = null

try {
  if (isSupabaseConfigured) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  } else {
    // Cliente mock para desenvolvimento
    supabase = {
      from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        update: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        delete: () => ({ data: null, error: { message: 'Supabase não configurado' } })
      }),
      auth: {
        signInWithPassword: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        signOut: () => ({ error: null }),
        getUser: () => ({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: null } })
      }
    }
  }
} catch (error) {
  console.warn('Erro ao inicializar Supabase:', error)
  // Cliente mock em caso de erro
  supabase = {
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: null, error: { message: 'Erro na configuração do Supabase' } }),
      update: () => ({ data: null, error: { message: 'Erro na configuração do Supabase' } }),
      delete: () => ({ data: null, error: { message: 'Erro na configuração do Supabase' } })
    }),
    auth: {
      signInWithPassword: () => ({ data: null, error: { message: 'Erro na configuração do Supabase' } }),
      signOut: () => ({ error: null }),
      getUser: () => ({ data: { user: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: null } })
    }
  }
}

export { supabase }

// Função para verificar se o Supabase está configurado
export const isSupabaseReady = () => isSupabaseConfigured

// Tipos para o banco de dados
export interface ContentSection {
  id: string
  section_name: string
  title: string
  description: string
  content: any
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  role: 'admin' | 'editor'
  created_at: string
}