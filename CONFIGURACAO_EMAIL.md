# Configuração do Sistema de Email - CONSTRUIND 2025

## 📧 Configuração Implementada

### ✅ Arquivos Criados:
- `public/assets/inc/sendemail.php` - Processador de emails
- `public/assets/js/contact-form.js` - JavaScript para envio AJAX
- `public/assets/inc/.htaccess` - Configurações do servidor

### 📋 Funcionalidades:
- ✅ Envio automático para `construind25@gmail.com`
- ✅ Validação de campos obrigatórios
- ✅ Formatação HTML dos emails
- ✅ Feedback visual para o usuário
- ✅ Limpeza automática do formulário após envio

## 🔧 Configuração do Servidor

### Para funcionar corretamente, o servidor precisa:

1. **Suporte a PHP** (versão 7.0 ou superior)
2. **Função mail() habilitada**
3. **Configuração SMTP** (recomendado)

### Configuração SMTP (Recomendada):

Edite o arquivo `public/assets/inc/sendemail.php` e adicione:

```php
// Adicione no início do arquivo, após as configurações
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Substitua a função mail() por:
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'construind25@gmail.com';
    $mail->Password = 'sua_senha_de_app';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    $mail->setFrom('noreply@construind2025.com.br', 'CONSTRUIND 2025');
    $mail->addAddress($to);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $email_body;
    
    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Mensagem enviada com sucesso!']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erro ao enviar: ' . $mail->ErrorInfo]);
}
```

## 📝 Formulários Configurados:

### 1. Seção "Entre em Contato" (Home):
- Nome, Email, Telefone, Mensagem
- Envio para: `construind25@gmail.com`
- Assunto: "Informações sobre o Evento"

### 2. Página de Contato:
- Nome, Email, Telefone, Assunto, Mensagem
- Envio para: `construind25@gmail.com`
- Assunto personalizado pelo usuário

## 🚀 Teste do Sistema:

1. Acesse a página de contato
2. Preencha o formulário
3. Clique em "Enviar"
4. Verifique o email `construind25@gmail.com`

## ⚠️ Importante:

- Configure a senha de app do Gmail para SMTP
- Teste em ambiente de produção
- Monitore os logs de erro do servidor
- Configure SPF/DKIM para melhor entrega

## 📞 Suporte:

Em caso de problemas, verifique:
- Logs do servidor web
- Configuração PHP (função mail)
- Configuração SMTP
- Firewall do servidor
