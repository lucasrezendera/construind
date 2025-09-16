-- Script para corrigir as políticas RLS no Supabase
-- Execute este SQL no Supabase Dashboard > SQL Editor

-- 1. Desabilitar RLS temporariamente para a tabela expositores
ALTER TABLE expositores DISABLE ROW LEVEL SECURITY;

-- 2. Habilitar RLS novamente
ALTER TABLE expositores ENABLE ROW LEVEL SECURITY;

-- 3. Criar política para permitir todas as operações na tabela expositores
CREATE POLICY "Allow all operations on expositores" ON expositores
FOR ALL USING (true) WITH CHECK (true);

-- 4. Verificar se a política foi criada
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'expositores';

-- 5. Verificar se o bucket 'logos' existe e tem as políticas corretas
SELECT name, public FROM storage.buckets WHERE name = 'logos';

-- 6. Se o bucket não existir, criar
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 7. Criar políticas para o storage
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'logos');

CREATE POLICY "Allow uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'logos');

CREATE POLICY "Allow updates" ON storage.objects
FOR UPDATE USING (bucket_id = 'logos');

CREATE POLICY "Allow deletes" ON storage.objects
FOR DELETE USING (bucket_id = 'logos');
