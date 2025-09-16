-- Políticas de autenticação para o sistema admin
-- Execute este SQL no Supabase SQL Editor

-- 1. Habilitar autenticação por email/senha
-- (Já deve estar habilitado por padrão)

-- 2. Criar tabela de usuários admin (opcional - para controle adicional)
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Políticas de segurança para a tabela expositores
-- Permitir apenas usuários autenticados para operações admin

-- Política para SELECT (todos podem ver expositores ativos)
DROP POLICY IF EXISTS "Permitir visualização de expositores ativos" ON expositores;
CREATE POLICY "Permitir visualização de expositores ativos" ON expositores
    FOR SELECT USING (ativo = true);

-- Política para INSERT (apenas usuários autenticados)
DROP POLICY IF EXISTS "Permitir inserção para usuários autenticados" ON expositores;
CREATE POLICY "Permitir inserção para usuários autenticados" ON expositores
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Política para UPDATE (apenas usuários autenticados)
DROP POLICY IF EXISTS "Permitir atualização para usuários autenticados" ON expositores;
CREATE POLICY "Permitir atualização para usuários autenticados" ON expositores
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Política para DELETE (apenas usuários autenticados)
DROP POLICY IF EXISTS "Permitir exclusão para usuários autenticados" ON expositores;
CREATE POLICY "Permitir exclusão para usuários autenticados" ON expositores
    FOR DELETE USING (auth.role() = 'authenticated');

-- 4. Habilitar RLS (Row Level Security) na tabela expositores
ALTER TABLE expositores ENABLE ROW LEVEL SECURITY;

-- 5. Criar bucket para logos (se não existir)
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;

-- 6. Políticas para o storage de logos
-- Permitir upload para usuários autenticados
DROP POLICY IF EXISTS "Permitir upload de logos para usuários autenticados" ON storage.objects;
CREATE POLICY "Permitir upload de logos para usuários autenticados" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'logos' AND 
        auth.role() = 'authenticated'
    );

-- Permitir visualização pública dos logos
DROP POLICY IF EXISTS "Permitir visualização pública dos logos" ON storage.objects;
CREATE POLICY "Permitir visualização pública dos logos" ON storage.objects
    FOR SELECT USING (bucket_id = 'logos');

-- Permitir atualização para usuários autenticados
DROP POLICY IF EXISTS "Permitir atualização de logos para usuários autenticados" ON storage.objects;
CREATE POLICY "Permitir atualização de logos para usuários autenticados" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'logos' AND 
        auth.role() = 'authenticated'
    );

-- Permitir exclusão para usuários autenticados
DROP POLICY IF EXISTS "Permitir exclusão de logos para usuários autenticados" ON storage.objects;
CREATE POLICY "Permitir exclusão de logos para usuários autenticados" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'logos' AND 
        auth.role() = 'authenticated'
    );

-- 7. Função para criar usuário admin (opcional)
CREATE OR REPLACE FUNCTION create_admin_user(user_email TEXT)
RETURNS UUID AS $$
DECLARE
    user_id UUID;
BEGIN
    -- Inserir na tabela admin_users
    INSERT INTO admin_users (email, role)
    VALUES (user_email, 'admin')
    ON CONFLICT (email) DO NOTHING
    RETURNING id INTO user_id;
    
    RETURN user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 8. Comentários para documentação
COMMENT ON TABLE admin_users IS 'Tabela para controle de usuários administradores';
COMMENT ON FUNCTION create_admin_user IS 'Função para criar usuário admin após registro no auth';

