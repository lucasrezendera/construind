const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function updateDatabase() {
  try {
    console.log('🔄 Atualizando estrutura da tabela expositores...')
    
    // Remover colunas endereco e telefone
    const { error: dropEndereco } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE expositores DROP COLUMN IF EXISTS endereco;'
    })
    
    if (dropEndereco) {
      console.log('⚠️  Erro ao remover coluna endereco:', dropEndereco.message)
    } else {
      console.log('✅ Coluna endereco removida com sucesso')
    }
    
    const { error: dropTelefone } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE expositores DROP COLUMN IF EXISTS telefone;'
    })
    
    if (dropTelefone) {
      console.log('⚠️  Erro ao remover coluna telefone:', dropTelefone.message)
    } else {
      console.log('✅ Coluna telefone removida com sucesso')
    }
    
    // Verificar estrutura atual
    const { data: columns, error: columnsError } = await supabase.rpc('exec_sql', {
      sql: `
        SELECT column_name, data_type, is_nullable 
        FROM information_schema.columns 
        WHERE table_name = 'expositores' 
        ORDER BY ordinal_position;
      `
    })
    
    if (columnsError) {
      console.log('⚠️  Erro ao verificar estrutura:', columnsError.message)
    } else {
      console.log('📋 Estrutura atual da tabela expositores:')
      console.table(columns)
    }
    
    console.log('🎉 Atualização concluída!')
    
  } catch (error) {
    console.error('❌ Erro durante a atualização:', error)
  }
}

updateDatabase()
