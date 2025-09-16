# 🔐 Configuração de Autenticação - CONSTRUIND 2025

## 📋 Pré-requisitos
- Conta no Supabase
- Projeto Supabase configurado
- Tabela `expositores` criada

## 🚀 Passo a Passo

### 1. **Configurar Autenticação no Supabase**

1. Acesse o [Supabase Dashboard](https://app.supabase.com)
2. Vá para **Authentication** > **Settings**
3. Em **Auth Providers**, certifique-se que **Email** está habilitado
4. Configure as **Site URL**:
   - **Development**: `http://localhost:3000`
   - **Production**: `https://seu-dominio.com`

### 2. **Executar Políticas de Segurança**

1. No Supabase Dashboard, vá para **SQL Editor**
2. Copie e cole o conteúdo do arquivo `auth-policies.sql`
3. Execute o script completo

### 3. **Criar Usuário Admin**

1. Vá para **Authentication** > **Users**
2. Clique em **Add user**
3. Preencha:
   - **Email**: `admin@construind2025.com`
   - **Password**: `sua-senha-forte`
   - **Email Confirm**: ✅ (marcado)
4. Clique em **Create user**

### 4. **Configurar Storage para Logos**

1. Vá para **Storage**
2. Crie um bucket chamado `logos`
3. Configure como **Public bucket**
4. As políticas já foram criadas pelo script SQL

### 5. **Testar a Autenticação**

1. Acesse `http://localhost:3000/admin/expositores`
2. Você deve ver a tela de login
3. Use as credenciais criadas no passo 3
4. Após o login, você deve ver a página admin

## 🔧 Configurações Avançadas

### **Variáveis de Ambiente**
Certifique-se que seu `.env.local` tem:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### **Políticas de Segurança**
- ✅ Apenas usuários autenticados podem gerenciar expositores
- ✅ Qualquer pessoa pode visualizar expositores ativos
- ✅ Upload de logos restrito a usuários autenticados
- ✅ Visualização de logos é pública

### **Funcionalidades de Segurança**
- 🔒 Login obrigatório para acessar admin
- 🔒 Logout automático ao fechar navegador
- 🔒 Verificação de sessão em tempo real
- 🔒 Proteção contra acesso não autorizado

## 🚨 Troubleshooting

### **Erro: "Invalid login credentials"**
- Verifique se o email está correto
- Verifique se a senha está correta
- Verifique se o usuário foi criado no Supabase

### **Erro: "Failed to fetch"**
- Verifique as variáveis de ambiente
- Verifique se o Supabase está acessível
- Verifique se as políticas foram aplicadas

### **Erro: "Storage bucket not found"**
- Verifique se o bucket `logos` foi criado
- Verifique se as políticas de storage foram aplicadas

## 📱 Testando no Mobile

A autenticação funciona em dispositivos móveis:
- Login responsivo
- Sessão persistente
- Logout seguro

## 🔄 Backup e Restauração

### **Backup das Políticas**
```sql
-- Exportar políticas
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE schemaname = 'public';
```

### **Restaurar Políticas**
Execute novamente o arquivo `auth-policies.sql`

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Supabase
2. Verifique o console do navegador
3. Verifique as políticas de segurança
4. Teste com um usuário diferente

---

**✅ Sistema de Autenticação Configurado!**

Agora sua aplicação está protegida e apenas usuários autorizados podem gerenciar os expositores.

