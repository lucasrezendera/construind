'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function TermosECondicoes() {
    return (
        <>
            <div className="light-version">
                <Layout breadcrumbTitle="Termos e Condições" theme="light">

                    {/* Start Terms and Conditions Section */}
                    <section className="contact-page" style={{ padding: '100px 0' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="contact-page__contact-info">
                                        <div className="terms-content" style={{ 
                                            lineHeight: '1.8',
                                            fontSize: '16px',
                                            color: '#333',
                                            textAlign: 'justify',
                                            maxWidth: '900px',
                                            margin: '0 auto',
                                            padding: '0 20px'
                                        }}>
                                            
                                            {/* Seção 1 - Aceitação dos Termos */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    1. Aceitação dos Termos
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '0',
                                                    fontSize: '17px'
                                                }}>
                                                    Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve utilizar este site.
                                                </p>
                                            </div>

                                            {/* Seção 2 - Sobre o Evento */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    2. Sobre o Evento CONSTRUIND 2025
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '0',
                                                    fontSize: '17px'
                                                }}>
                                                    A CONSTRUIND 2025 é uma feira da construção civil que acontecerá nos dias 23, 24 e 25 de outubro de 2025, no Espaço Viber - R. Goiás, Cidade Nova II, Indaiatuba - SP, 13334-300. O evento é gratuito e aberto ao público, mediante credenciamento obrigatório.
                                                </p>
                                            </div>

                                            {/* Seção 3 - LGPD */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    3. Política de Privacidade e LGPD
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '25px',
                                                    fontSize: '17px'
                                                }}>
                                                    Este site está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e demais regulamentações aplicáveis.
                                                </p>
                                                
                                                <h4 style={{ 
                                                    color: '#333', 
                                                    fontSize: '22px', 
                                                    marginBottom: '20px',
                                                    marginTop: '30px',
                                                    fontWeight: '600',
                                                    textAlign: 'left'
                                                }}>
                                                    3.1. Coleta de Dados
                                                </h4>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '15px',
                                                    fontSize: '17px'
                                                }}>
                                                    Coletamos apenas os dados pessoais necessários para:
                                                </p>
                                                <ul style={{ 
                                                    marginLeft: '25px', 
                                                    marginBottom: '25px',
                                                    fontSize: '16px',
                                                    lineHeight: '1.7'
                                                }}>
                                                    <li style={{ marginBottom: '8px' }}>Processar credenciamentos para o evento</li>
                                                    <li style={{ marginBottom: '8px' }}>Enviar informações sobre o evento</li>
                                                    <li style={{ marginBottom: '8px' }}>Responder a consultas e solicitações</li>
                                                    <li style={{ marginBottom: '8px' }}>Melhorar nossos serviços</li>
                                                </ul>

                                                <h4 style={{ 
                                                    color: '#333', 
                                                    fontSize: '22px', 
                                                    marginBottom: '20px',
                                                    marginTop: '30px',
                                                    fontWeight: '600',
                                                    textAlign: 'left'
                                                }}>
                                                    3.2. Uso dos Dados
                                                </h4>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '25px',
                                                    fontSize: '17px'
                                                }}>
                                                    Seus dados pessoais serão utilizados exclusivamente para os fins descritos acima e não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei.
                                                </p>

                                                <h4 style={{ 
                                                    color: '#333', 
                                                    fontSize: '22px', 
                                                    marginBottom: '20px',
                                                    marginTop: '30px',
                                                    fontWeight: '600',
                                                    textAlign: 'left'
                                                }}>
                                                    3.3. Seus Direitos
                                                </h4>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '15px',
                                                    fontSize: '17px'
                                                }}>
                                                    Você tem o direito de:
                                                </p>
                                                <ul style={{ 
                                                    marginLeft: '25px', 
                                                    marginBottom: '0',
                                                    fontSize: '16px',
                                                    lineHeight: '1.7'
                                                }}>
                                                    <li style={{ marginBottom: '8px' }}>Acessar seus dados pessoais</li>
                                                    <li style={{ marginBottom: '8px' }}>Corrigir dados incorretos ou incompletos</li>
                                                    <li style={{ marginBottom: '8px' }}>Solicitar a exclusão de seus dados</li>
                                                    <li style={{ marginBottom: '8px' }}>Revogar seu consentimento a qualquer momento</li>
                                                    <li style={{ marginBottom: '8px' }}>Solicitar a portabilidade dos dados</li>
                                                </ul>
                                            </div>

                                            {/* Seção 4 - Responsabilidades */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    4. Responsabilidades do Usuário
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '15px',
                                                    fontSize: '17px'
                                                }}>
                                                    Ao utilizar este site, você se compromete a:
                                                </p>
                                                <ul style={{ 
                                                    marginLeft: '25px', 
                                                    marginBottom: '0',
                                                    fontSize: '16px',
                                                    lineHeight: '1.7'
                                                }}>
                                                    <li style={{ marginBottom: '8px' }}>Fornecer informações verdadeiras e atualizadas</li>
                                                    <li style={{ marginBottom: '8px' }}>Não utilizar o site para fins ilegais ou não autorizados</li>
                                                    <li style={{ marginBottom: '8px' }}>Respeitar os direitos de propriedade intelectual</li>
                                                    <li style={{ marginBottom: '8px' }}>Não interferir no funcionamento do site</li>
                                                </ul>
                                            </div>

                                            {/* Seção 5 - Limitação de Responsabilidade */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    5. Limitação de Responsabilidade
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '0',
                                                    fontSize: '17px'
                                                }}>
                                                    Este site é fornecido "como está" e não oferecemos garantias de que estará sempre disponível ou livre de erros. Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso deste site.
                                                </p>
                                            </div>

                                            {/* Seção 6 - Propriedade Intelectual */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    6. Propriedade Intelectual
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '0',
                                                    fontSize: '17px'
                                                }}>
                                                    Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade da CONSTRUIND 2025 e está protegido por leis de direitos autorais. É proibida a reprodução sem autorização prévia.
                                                </p>
                                            </div>

                                            {/* Seção 7 - Alterações */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    7. Alterações nos Termos
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '0',
                                                    fontSize: '17px'
                                                }}>
                                                    Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade verificar periodicamente as atualizações.
                                                </p>
                                            </div>

                                            {/* Seção 8 - Contato */}
                                            <div className="terms-section" style={{ 
                                                marginBottom: '50px',
                                                padding: '30px',
                                                background: '#ffffff',
                                                borderRadius: '15px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid #e9ecef'
                                            }}>
                                                <h3 style={{ 
                                                    color: '#FF5E14', 
                                                    fontSize: '26px', 
                                                    marginBottom: '25px',
                                                    fontWeight: '700',
                                                    textAlign: 'left',
                                                    borderBottom: '3px solid #FF5E14',
                                                    paddingBottom: '10px'
                                                }}>
                                                    8. Contato
                                                </h3>
                                                <p style={{ 
                                                    textAlign: 'justify',
                                                    marginBottom: '25px',
                                                    fontSize: '17px'
                                                }}>
                                                    Para questões relacionadas a estes termos, privacidade ou proteção de dados, entre em contato conosco:
                                                </p>
                                                <div style={{ 
                                                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
                                                    padding: '25px', 
                                                    borderRadius: '15px',
                                                    marginTop: '20px',
                                                    border: '1px solid #dee2e6'
                                                }}>
                                                    <p style={{ marginBottom: '10px', fontSize: '16px' }}><strong>E-mail:</strong> <Link href="mailto:construind25@gmail.com" style={{ color: '#FF5E14', textDecoration: 'none' }}>construind25@gmail.com</Link></p>
                                                    <p style={{ marginBottom: '10px', fontSize: '16px' }}><strong>Telefone:</strong> <Link href="tel:1938349264" style={{ color: '#FF5E14', textDecoration: 'none' }}>(19) 3834-9264</Link></p>
                                                    <p style={{ marginBottom: '0', fontSize: '16px' }}><strong>WhatsApp:</strong> <Link href="https://wa.me/5519974124162" style={{ color: '#FF5E14', textDecoration: 'none' }}>(19) 97412-4162</Link></p>
                                                </div>
                                            </div>

                                            {/* Data de Atualização */}
                                            <div className="terms-footer" style={{ 
                                                marginTop: '50px',
                                                padding: '25px',
                                                background: 'linear-gradient(135deg, #FF5E14 0%, #FF8C42 100%)',
                                                color: 'white',
                                                borderRadius: '15px',
                                                textAlign: 'center',
                                                boxShadow: '0 5px 20px rgba(255, 94, 20, 0.3)'
                                            }}>
                                                <p style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
                                                    <strong>Última atualização:</strong> Janeiro de 2025
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Terms and Conditions Section */}

                </Layout>
            </div>
        </>
    )
}
