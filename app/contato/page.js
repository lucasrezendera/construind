import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <div className="light-version">
        <Layout breadcrumbTitle="Contato" theme="light">
        {/* Start Contact Page*/} 
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Start Contact Page Contact Info*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__contact-info">
                            <div className="title-box">
                                <h2>Informações de Contato</h2>
                            </div>

                            <div className="contact-page__contact-info-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-telephone-call"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Telefone:</h3>
                                                <p><Link href="tel:1938349264">(19) 3834-9264</Link></p>
                                                <p><Link href="tel:19974124162">(19) 97412-4162</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-email-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>E-mail:</h3>
                                                <p><Link href="mailto:construind25@gmail.com">construind25@gmail.com</Link></p>
                                                <p><Link href="mailto:contato@construind2025.com.br">contato@construind2025.com.br</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-maps-and-flags"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Endereço:</h3>
                                                <p>Espaço Viber - R. Goiás<br/> Cidade Nova II, Indaiatuba - SP, 13334-300</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-time"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Horário de Funcionamento:</h3>
                                                <p>Segunda a Sexta: <br/>
                                                    8h às 18h</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-page__contact-info-bottom">
                                <div className="text-box">
                                    <h2>Siga Nossas Redes Sociais:</h2>
                                    <p>Fique por dentro das novidades da CONSTRUIND 2025 e acompanhe todas as atualizações do evento.
                                    </p>
                                </div>

                                <div className="social-links">
                                    <ul>
                                        <li><Link href="https://facebook.com/construind2025" target="_blank" rel="noopener noreferrer"><span className="icon-facebook"></span></Link></li>
                                        <li><Link href="https://twitter.com/construind2025" target="_blank" rel="noopener noreferrer"><span className="icon-twitter1"></span></Link></li>
                                        <li><Link href="https://wa.me/5519974124162" target="_blank" rel="noopener noreferrer"><span className="icon-whatsapp"></span></Link></li>
                                        <li><Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></Link></li>
                                        <li><Link href="https://linkedin.com/company/construind2025" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin-big-logo"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Contact Page Contact Info*/} 

                    {/* Start Contact Page Form*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__form">
                            <div className="title-box">
                                <h2>Entre em Contato</h2>
                            </div>
                            <form name="contact-page" method="post" data-netlify="true" netlify-honeypot="bot-field" className="contact-form-validated contact-page__form-box">
                                <input type="hidden" name="form-name" value="contact-page" />
                                <div style={{display: 'none'}}>
                                    <input name="bot-field" />
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="name" placeholder="Nome" required=""/>
                                            <div className="icon"><span className="icon-user"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="Email" required=""/>
                                            <div className="icon"><span className="icon-email"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="Phone" placeholder="Telefone" required=""/>
                                            <div className="icon"><span className="icon-telephone-call"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide" name="assunto">
                                                    <option value="">Assunto</option>
                                                    <option value="Informações sobre o Evento">Informações sobre o Evento</option>
                                                    <option value="Localização e Acesso">Localização e Acesso</option>
                                                    <option value="Estacionamento">Estacionamento</option>
                                                    <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                                                    <option value="Outros">Outros</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message" placeholder="Mensagem" required=""></textarea>
                                            <div className="icon style2"><span className="fa fa-pencil"></span></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="contact-page__form-btn">
                                            <button type="submit" className="thm-btn">
                                                Enviar Mensagem
                                                <i className="icon-next"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                    {/* End Contact Page Form*/} 

                </div>
            </div>
        </section>
        {/* End Contact Page*/} 

        {/* Start Google Map One*/} 
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123456789!2d-47.123456789!3d-23.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c123456789ab%3A0x123456789abcdef!2sEspa%C3%A7o%20Viber%20-%20R.%20Goi%C3%A1s%2C%20Cidade%20Nova%20II%2C%20Indaiatuba%20-%20SP%2C%2013334-300!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                className="google-map-one__map">
            </iframe>
        </section>
        {/* End Google Map One*/} 

        </Layout>
        </div>
        </>
    )
}
