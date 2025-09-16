'use client'
import Link from "next/link"
export default function Appoinment() {
    return (
        <>
        {/* Start Appoinment One*/} 
        <section className="appoinment-one">
            <div className="appoinment-one__pattern"
                style={{ backgroundImage: ' url(/assets/images/pattern/appoinment-v1-pattern.png)' }}></div>
            <div className="shape1"></div>
            <div className="appoinment-one__bg"
                style={{ backgroundImage: ' url(/assets/images/backgrounds/appoinment-v1-bg.jpg)' }}>
            </div>
            <div className="container">
                <div className="row">
                    {/* Start Appoinment One Left*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__contact">
                            <div className="appoinment-one__contact-list">
                                <ul>
                                    <li className="wow animated fadeInLeft" data-wow-delay="0.1s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-placeholder"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Local</h2>
                                                <p>Espaço Viber</p>
                                                <p>R. Goiás - Cidade Nova II, Indaiatuba - SP</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.2s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-conversation"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Email</h2>
                                                <p><Link href="mailto:construind25@gmail.com">construind25@gmail.com</Link></p>
                                                <p>Informações gerais</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow animated fadeInLeft" data-wow-delay="0.3s">
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content-box">
                                                <h2>Telefone</h2>
                                                <p><Link href="tel:1938349264">(19) 3834-9264</Link></p>
                                                <p><Link href="tel:19974124162">(19) 97412-4162</Link></p>
                                                <p>Adriana - Informações</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Appoinment One Left*/} 

                    {/* Start Appoinment One Form*/} 
                    <div className="col-xl-6 col-lg-6">
                        <div className="appoinment-one__form wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="title-box">
                                <h2>Entre em Contato</h2>
                                <p>Informações e Dúvidas</p>
                            </div>

                            <form name="contact-home" method="post" data-netlify="true" netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact-home" />
                                <div style={{display: 'none'}}>
                                    <input name="bot-field" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="username" placeholder="Seu Nome" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email"  name="form_email"
                                        required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" placeholder="Telefone" required=""/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Escreva sua mensagem" required=""></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <button className="thm-btn" type="submit" data-loading-text="Enviando...">
                                                Enviar
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Appoinment One Form*/} 
                </div>
            </div>
        </section>
        {/* End Appoinment One*/} 
        </>
    )
}
