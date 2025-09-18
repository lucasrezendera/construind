import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções para gerenciar expositores no Supabase
export const getExpositores = async () => {
  const { data, error } = await supabase
    .from('expositores')
    .select('*')
    .eq('ativo', true)
    .order('numero_stand', { ascending: true })
  
  if (error) {
    console.error('Erro ao buscar expositores:', error)
    return []
  }
  
  // Ordenar numericamente no JavaScript
  const sortedData = (data || []).sort((a, b) => {
    const numA = parseInt(a.numero_stand) || 0
    const numB = parseInt(b.numero_stand) || 0
    return numA - numB
  })
  
  return sortedData
}

export const searchExpositores = async (termo) => {
  const { data, error } = await supabase
    .from('expositores')
    .select('*')
    .eq('ativo', true)
    .or(`nome.ilike.%${termo}%,categoria.ilike.%${termo}%,endereco.ilike.%${termo}%,localizacao_stand.ilike.%${termo}%`)
    .order('numero_stand', { ascending: true })
  
  if (error) {
    console.error('Erro ao buscar expositores:', error)
    return []
  }
  
  // Ordenar numericamente no JavaScript
  const sortedData = (data || []).sort((a, b) => {
    const numA = parseInt(a.numero_stand) || 0
    const numB = parseInt(b.numero_stand) || 0
    return numA - numB
  })
  
  return sortedData
}

export const addExpositor = async (expositor) => {
  // Garantir que o expositor seja criado como ativo
  // localizacao_stand recebe o mesmo valor do numero_stand
  const expositorData = {
    ...expositor,
    ativo: true,
    localizacao_stand: expositor.numero_stand, // Mesmo valor do número do stand
    created_at: new Date().toISOString()
  }
  
  const { data, error } = await supabase
    .from('expositores')
    .insert([expositorData])
    .select()
  
  if (error) {
    console.error('Erro ao adicionar expositor:', error)
    return null
  }
  
  return data[0]
}

export const updateExpositor = async (id, dadosAtualizados) => {
  // Se o numero_stand foi alterado, atualizar também o localizacao_stand
  const updateData = {
    ...dadosAtualizados,
    localizacao_stand: dadosAtualizados.numero_stand || dadosAtualizados.localizacao_stand
  }
  
  const { data, error } = await supabase
    .from('expositores')
    .update(updateData)
    .eq('id', id)
    .select()
  
  if (error) {
    console.error('Erro ao atualizar expositor:', error)
    return null
  }
  
  return data[0]
}

export const deleteExpositor = async (id) => {
  const { error } = await supabase
    .from('expositores')
    .update({ ativo: false })
    .eq('id', id)
  
  if (error) {
    console.error('Erro ao excluir expositor:', error)
    return false
  }
  
  return true
}

export const uploadLogo = async (file, expositorId) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `logo-${expositorId}.${fileExt}`
    const filePath = `expositores/${fileName}`
    
    const { data, error } = await supabase.storage
      .from('logos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      })
    
    if (error) {
      console.error('Erro ao fazer upload do logo:', error)
      throw error
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('logos')
      .getPublicUrl(filePath)
    
    return publicUrlData.publicUrl
  } catch (error) {
    console.error('Erro na função uploadLogo:', error)
    throw error
  }
}

export const getCategorias = async () => {
  // Categorias específicas para a CONSTRUIND 2025
  return [
    'Serviços',
    'Prestadores de Serviços', 
    'Locadoras',
    'Engenheiros',
    'Comércio',
    'Tecnologia',
    'Arquitetura',
    'Acabamentos',
    'Básico',
    'Paisagismo'
  ]
}

// Funções de autenticação
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  if (error) {
    console.error('Erro ao fazer login:', error)
    throw error
  }
  
  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Erro ao fazer logout:', error)
    throw error
  }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) {
    console.error('Erro ao obter usuário atual:', error)
    return null
  }
  
  return user
}

export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback)
}
