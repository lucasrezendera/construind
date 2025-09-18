// Script para testar a estrutura da tabela expositores
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xhgzdyhbtwkpitpeqdyd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoZ3pkeWhidHdrcGl0cGVxZHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTE3NTEsImV4cCI6MjA3MzUyNzc1MX0.ZNNrrGW3j158UKfZtiW4cxr8ABfnx56jHpckq6q8SfA'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testExpositores() {
  console.log('🔍 Testando estrutura da tabela expositores...')
  
  try {
    // 1. Verificar se a tabela existe e obter sua estrutura
    console.log('\n1. Verificando estrutura da tabela...')
    const { data: tableInfo, error: tableError } = await supabase
      .from('expositores')
      .select('*')
      .limit(1)
    
    if (tableError) {
      console.error('❌ Erro ao acessar tabela expositores:', tableError)
      return
    }
    
    console.log('✅ Tabela expositores acessível')
    
    // 2. Listar todos os expositores (incluindo inativos)
    console.log('\n2. Listando todos os expositores...')
    const { data: allExpositores, error: allError } = await supabase
      .from('expositores')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (allError) {
      console.error('❌ Erro ao listar expositores:', allError)
      return
    }
    
    console.log(`📊 Total de expositores na tabela: ${allExpositores.length}`)
    
    if (allExpositores.length > 0) {
      console.log('\n📋 Últimos 5 expositores:')
      allExpositores.slice(0, 5).forEach((expositor, index) => {
        console.log(`${index + 1}. ${expositor.nome} - Stand ${expositor.numero_stand} - Ativo: ${expositor.ativo}`)
      })
    }
    
    // 3. Listar apenas expositores ativos
    console.log('\n3. Listando apenas expositores ativos...')
    const { data: activeExpositores, error: activeError } = await supabase
      .from('expositores')
      .select('*')
      .eq('ativo', true)
      .order('numero_stand', { ascending: true })
    
    if (activeError) {
      console.error('❌ Erro ao listar expositores ativos:', activeError)
      return
    }
    
    console.log(`✅ Expositores ativos: ${activeExpositores.length}`)
    
    // 4. Testar inserção de um expositor de teste
    console.log('\n4. Testando inserção de expositor...')
    const testExpositor = {
      nome: 'Teste Expositor',
      categoria: 'Teste',
      numero_stand: '999',
      localizacao_stand: 'Setor Teste',
      logo: '',
      redes_sociais: {
        facebook: '',
        instagram: '',
        linkedin: '',
        website: ''
      },
      ativo: true
    }
    
    const { data: insertedExpositor, error: insertError } = await supabase
      .from('expositores')
      .insert([testExpositor])
      .select()
    
    if (insertError) {
      console.error('❌ Erro ao inserir expositor de teste:', insertError)
    } else {
      console.log('✅ Expositor de teste inserido com sucesso:', insertedExpositor[0])
      
      // Remover o expositor de teste
      const { error: deleteError } = await supabase
        .from('expositores')
        .delete()
        .eq('id', insertedExpositor[0].id)
      
      if (deleteError) {
        console.error('❌ Erro ao remover expositor de teste:', deleteError)
      } else {
        console.log('✅ Expositor de teste removido')
      }
    }
    
    console.log('\n🎉 Teste concluído!')
    
  } catch (error) {
    console.error('❌ Erro geral:', error)
  }
}

// Executar o teste
testExpositores()
