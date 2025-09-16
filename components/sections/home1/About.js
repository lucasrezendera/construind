'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function About() {
    return (
        <>
        {/* Start About One*/} 
        <section className="about-one">
            <div className="shape1 float-bob-y"><img src="/assets/images/shapes/about-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="/assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="animation-infinite"
                style={{ backgroundImage: ' url(/assets/images/shapes/testimonial-v2-shape1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    {/* Start About One Counter*/} 
                    <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__counter">
                            <ul className="about-one__counter-box">
                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={100} /></h2>
                                        <span>+</span>
                                    </div>
                                    <div className="text">
                                        <p>Expositores</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={10} /></h2>
                                        <span className="k">k</span>
                                    </div>
                                    <div className="text">
                                        <p>Visitantes</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={3} /></h2>
                                        <span></span>
                                    </div>
                                    <div className="text">
                                        <p>Dias de Evento</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={5} /></h2>
                                        <span className="k">k</span>
                                    </div>
                                    <div className="text">
                                        <p>m² de Exposição</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End About One Counter*/} 

                    {/* Start About One Img*/} 
                    <div className="col-xl-4 col-lg-8 col-md-8 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src="/assets/images/about/about-v1-img1.jpg" alt=""/>
                            </div>

                            <div className="about-one__img2">
                                <img src="/assets/images/about/about-v1-img2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End About One Img*/} 

                    {/* Start About One Content*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Sobre o Evento</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title event-gradient-text">A Maior Feira da <br/> Construção Civil de Indaiatuba
                                </h2>
                            </div>

                            <div className="about-one__content-text">
                                <p>A CONSTRUIND 2025 é a maior e mais importante feira do setor da construção civil da região de Indaiatuba. O evento foi concebido para reunir, em um único local, toda a cadeia produtiva do segmento.</p>
                            </div>

                            <div className="about-one__content-text2">
                                <ul className="about-one__content-list">
                                    <li>
                                        <p>Única Feira do Segmento na Região</p>
                                    </li>
                                    <li>
                                        <p>Público Altamente Qualificado</p>
                                    </li>
                                    <li>
                                        <p>Ambiente de Networking Ideal</p>
                                    </li>
                                </ul>


                                <div className="about-one__content-author">
                                    <div className="img-box">
                                        <img src="/assets/images/about/about-v1-img3.png" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <div className="signature">
                                            <img src="/assets/images/about/about-v1-signature.png" alt=""/>
                                        </div>
                                        <h2>CONSTRUIND 2025</h2>
                                        <p>Organização</p>

                                    </div>
                                </div>
                            </div>

                            <div className="about-one__content-btn">
                                <Link className="thm-btn" href="/evento">Saiba Mais
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    {/* End About One Content*/} 
                </div>
            </div>
        </section>
        {/* End About One*/} 
        
        </>
    )
}

