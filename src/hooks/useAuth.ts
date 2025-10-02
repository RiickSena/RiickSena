'use client'

import { useState, useEffect } from 'react'
import { supabase, isSupabaseReady } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

// Usuário administrador padrão para desenvolvimento
const DEMO_ADMIN = {
  id: 'demo-admin-123',
  email: 'admin@demo.com',
  password: 'demo123'
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Se Supabase não estiver configurado, não tentar autenticar
    if (!isSupabaseReady()) {
      setLoading(false)
      return
    }

    // Verificar usuário atual
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })

    // Escutar mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    // Login de demonstração para desenvolvimento
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const demoUser = {
        id: DEMO_ADMIN.id,
        email: DEMO_ADMIN.email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        email_confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        role: 'authenticated',
        aud: 'authenticated',
        app_metadata: { role: 'admin' },
        user_metadata: { role: 'admin' }
      } as User

      setUser(demoUser)
      
      // Salvar no localStorage para persistência
      localStorage.setItem('demo_admin_user', JSON.stringify(demoUser))
      
      return { data: { user: demoUser, session: null }, error: null }
    }

    if (!isSupabaseReady()) {
      return { data: null, error: new Error('Supabase não configurado') }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signOut = async () => {
    // Limpar usuário demo
    localStorage.removeItem('demo_admin_user')
    setUser(null)

    if (!isSupabaseReady()) {
      return { error: null }
    }

    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const isAdmin = async () => {
    if (!user) return false
    
    // Verificar se é usuário demo admin
    if (user.id === DEMO_ADMIN.id) return true
    
    if (!isSupabaseReady()) return false
    
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('role')
        .eq('id', user.id)
        .single()
      
      return !error && data?.role === 'admin'
    } catch {
      return false
    }
  }

  // Verificar se há usuário demo salvo no localStorage
  useEffect(() => {
    if (!user && !isSupabaseReady()) {
      const savedUser = localStorage.getItem('demo_admin_user')
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser)
          setUser(parsedUser)
        } catch (error) {
          localStorage.removeItem('demo_admin_user')
        }
      }
      setLoading(false)
    }
  }, [user])

  return {
    user,
    loading,
    signIn,
    signOut,
    isAdmin,
  }
}