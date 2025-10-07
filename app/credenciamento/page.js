'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Credenciamento() {
    return (
        <>
            <div className="dark-version">
                <Layout breadcrumbTitle="Credenciamento">

                    {/* Start Why Choose One*/} 
                    <section className="why-choose-one">
                        <div className="why-choose-one__bg"
                            style={{ backgroundImage: ' url(assets/images/slider/slider-v2-img2.jpg)' }}></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="shape5"></div>
                        <div className="shape6"></div>
                        <div className="shape7"></div>
                        <div className="shape8"></div>
                        <div className="shape9"></div>
                        <div className="shape10 float-bob-y"><img src="/assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                        <div className="container clearfix">
                            <div className="why-choose-one__inner">
                                <div className="why-choose-one__content">
                                    <div className="sec-title tg-heading-subheading animation-style2">
                                        <div className="sec-title__tagline">
                                            <div className="left-line"></div>
                                            <div className="text tg-element-title">
                                                <h4>Credenciamento</h4>
                                            </div>
                                        </div>
                                        <h2 className="sec-title__title tg-element-title event-gradient-text">CREDENCIAMENTO <br/> ABERTO AGORA!
                                        </h2>
                                    </div>

                                    <div className="why-choose-one__content-text">
                                        <p>O credenciamento para a CONSTRUIND 2025 está aberto! Faça seu credenciamento gratuito e garante sua participação na maior feira da construção civil de Indaiatuba!</p>
                                    </div>

                                    <div className="why-choose-one__content-btn" style={{ marginTop: '30px', marginBottom: '30px' }}>
                                        <a 
                                            className="thm-btn cta-orange-button" 
                                            href="https://www.eventuall.com.br/construind"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Faça seu credenciamento agora
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </a>
                                    </div>

                                    <div className="why-choose-one__content-bottom">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                                data-wow-duration="1500ms">
                                                <div className="why-choose-one__content-single">
                                                    <div className="icon-box">
                                                        <span className="icon-calendar"></span>
                                                    </div>

                                                    <div className="title-box">
                                                        <h3>Data de Abertura <br/> 23 de Setembro</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                                data-wow-duration="1500ms">
                                                <div className="why-choose-one__content-single">
                                                    <div className="icon-box">
                                                        <span className="icon-time"></span>
                                                    </div>

                                                    <div className="title-box">
                                                        <h3>Horário de Abertura <br/> 12h</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                                data-wow-duration="1500ms">
                                                <div className="why-choose-one__content-single">
                                                    <div className="icon-box">
                                                        <span className="icon-support"></span>
                                                    </div>

                                                    <div className="title-box">
                                                        <h3>Obrigatório <br/> para Todos</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                                data-wow-duration="1500ms">
                                                <div className="why-choose-one__content-single">
                                                    <div className="icon-box">
                                                        <span className="icon-costumer"></span>
                                                    </div>

                                                    <div className="title-box">
                                                        <h3>Entrada <br/> Gratuita</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Why Choose One*/}

                </Layout>
            </div>
        </>
    )
}
