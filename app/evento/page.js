import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Sobre o Evento - CONSTRUIND 2025',
    description: 'Conheça a CONSTRUIND 2025, a maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro no Espaço Viber. Mais de 100 expositores e 10.000 visitantes esperados.',
    keywords: [
        'evento construção civil',
        'feira Indaiatuba 2025',
        'CONSTRUIND sobre',
        'Espaço Viber',
        'outubro 2025',
        'feira construção',
        'evento Indaiatuba',
        'construção civil SP',
        'feira gratuita',
        'networking construção'
    ],
    openGraph: {
        title: 'Sobre o Evento - CONSTRUIND 2025',
        description: 'Conheça a CONSTRUIND 2025, a maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro no Espaço Viber.',
        url: 'https://construind2025.com/evento',
        images: [
            {
                url: 'https://construind2025.com/assets/images/segments/ARQUITETOS.jpg',
                width: 800,
                height: 600,
                alt: 'CONSTRUIND 2025 - Feira da Construção Civil',
            },
        ],
    },
    alternates: {
        canonical: 'https://construind2025.com/evento',
    },
}

export default function EventoPage() {
    return (
        <>
        <div className="dark-version">
        <Layout breadcrumbTitle="Sobre o Evento">
    
        {/* Start About Two*/} 
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/* Start About Two Left*/} 
                    <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                        <div className="about-two__left">
                            <div className="about-two__left-img">
                                <img src="/assets/images/segments/ARQUITETOS.jpg" alt="CONSTRUIND 2025 - Feira da Construção Civil"/>
                            </div>

                            <div className="about-two__left-bottom">
                                <div className="about-two__left-bottom-text count-box">
                                    <h3>Mais de <span className="count-text" data-stop="100" data-speed="1500">00</span>+
                                        Expositores <br/>
                                        Confirmados</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Left*/} 

                    {/* Start About Two Middle*/} 
                    <div className="col-xl-5 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="about-two__middle">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Sobre o Evento</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title event-gradient-text">A Maior Feira da <br/> Construção Civil de Indaiatuba</h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>A CONSTRUIND 2025 é a maior e mais importante feira do setor da construção civil da região de Indaiatuba. O evento reúne toda a cadeia produtiva do segmento, criando um ambiente de negócios completo e dinâmico.</p>
                            </div>

                            <div className="about-two__middle-text2">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-house"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Única Feira do <br/> Segmento na Região</h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-engineer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Público Qualificado <br/> e Networking</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__middle-btn">
                                <Link className="thm-btn" href="/seja-um-expositor">Seja um Expositor
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Start About Two Middle*/} 

                    {/* Start About Two Right*/} 
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__right">
                            <div className="about-two__right-text">
                                <p><strong>Data:</strong> 23, 24 e 25 de outubro de 2025<br/>
                                <strong>Horário:</strong> Das 11h às 20h<br/>
                                <strong>Local:</strong> Espaço Viber - Indaiatuba/SP<br/>
                                <strong>Entrada:</strong> Gratuita com credenciamento obrigatório<br/>
                                <strong>Estacionamento:</strong> Vagas limitadas - Use Uber/carona<br/>
                                <strong>Expectativa:</strong> Mais de 10.000 visitantes</p>
                            </div>

                            <div className="about-two__right-img">
                                <img src="/assets/images/segments/ENGENHEIROS.jpg" alt="Espaço Viber - Local do Evento"/>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Right*/} 
                </div>
            </div>
        </section>
        {/* End About Two*/} 

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
                                    <h4>Diferenciais do Evento</h4>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title event-gradient-text">Por que Participar da <br/> CONSTRUIND 2025
                            </h2>
                        </div>

                        <div className="why-choose-one__content-text">
                            <p>A CONSTRUIND 2025 tem como principal objetivo fomentar o desenvolvimento da construção civil na região, movimentar a economia local e criar um ambiente propício para a realização de negócios.</p>
                        </div>

                        <div className="why-choose-one__content-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-raw-materials"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Única Feira do <br/> Segmento na Região</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-support"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Público Qualificado <br/> e Especializado</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-income"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Ambiente de <br/> Negócios Ideal</h3>
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
                                            <h3>Visibilidade para <br/> Sua Marca</h3>
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


