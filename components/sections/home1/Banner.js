
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
    return (
        <>
        {/* Start Main Slider Two*/} 
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Start Main Slider Two Single*/} 
                <div className="main-slider-two__single">
                    <div className="main-slider-two__pattern"
                        style={{ backgroundImage: ' url(/assets/images/pattern/main-slider-v2-pattern.png)' }} ></div>

                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(/assets/images/slider/slider-v2-img2.jpg)' }} >
                    </div>
                    <div className="shape5"><img src="/assets/images/slider/slider-v2-img4.png" alt=""/></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"><img src="/assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                    <div className="shape4"></div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <div className="tagline">
                                <span>CONSTRUIND 2025</span>
                            </div>
                            <div className="title-box">
                                <h2>PARTICIPE DA MAIOR FEIRA DA <br/> CONSTRUÇÃO CIVIL DE INDAIATUBA</h2>
                            </div>

                            <div className="text-box">
                                <p>23, 24 e 25 de outubro de 2025 - Espaço Viber <br/>
                                    Mais de 100 expositores e 10.000 visitantes esperados <br/>
                                    Entrada gratuita com credenciamento obrigatório</p>
                            </div>

                            <div className="main-slider-two__btn">
                                <a 
                                    className="thm-btn cta-orange-button" 
                                    href="https://www.eventuall.com.br/construind"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Faça seu credenciamento
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                                <Link className="thm-btn" href="/contato" style={{ marginLeft: '15px' }}>Saiba Mais
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider Two Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider Two Single*/} 
                <div className="main-slider-two__single">
                    <div className="main-slider-two__pattern"
                        style={{ backgroundImage: ' url(/assets/images/pattern/main-slider-v2-pattern.png)' }} ></div>

                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(/assets/images/slider/slider-v2-img2.jpg)' }} >
                    </div>
                    <div className="shape5"><img src="/assets/images/slider/slider-v2-img4.png" alt=""/></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"><img src="/assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                    <div className="shape4"></div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <div className="tagline">
                                <span>CONSTRUIND 2025</span>
                            </div>
                            <div className="title-box">
                                <h2>Conectando o futuro da <br/> construção civil</h2>
                            </div>

                            <div className="text-box">
                                <p>As últimas inovações e tecnologias do setor <br/>
                                    Networking com os principais profissionais e empresas <br/>
                                    Oportunidades únicas para seu negócio</p>
                            </div>

                            <div className="main-slider-two__btn">
                                <a 
                                    className="thm-btn cta-orange-button" 
                                    href="https://www.eventuall.com.br/construind"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Faça seu credenciamento
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </a>
                                <Link className="thm-btn" href="/contato" style={{ marginLeft: '15px' }}>Saiba Mais
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider Two Single*/} 
                </SwiperSlide>
            </Swiper>
        </section>
        {/* End Main Slider Two*/} 
        </>
    )
}
