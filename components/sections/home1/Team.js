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
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Team() {
    return (
        <>

        {/* Start Team One*/} 
        <section className="team-one">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Organização</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title event-gradient-text">Conheça a Equipe Organizadora</h2>
                </div>

                <div className="team-one__inner">
                    <div className="team-organizers">
                        <div className="organizer-card">
                            <div className="team-one__right-single-inner">
                                <div className="author-box">
                                    <h2>Prefeitura de Indaiatuba</h2>
                                    <p>Organização CONSTRUIND</p>
                                </div>
                                <div className="text-box">
                                    <p>A CONSTRUIND 2025 representa um marco para o setor da construção civil em Indaiatuba. Estamos orgulhosos de promover este evento que conecta toda a cadeia produtiva e gera oportunidades únicas de negócios.</p>
                                </div>
                                <div className="logo-signature">
                                    <img src="/assets/images/logos/prefeitura-logo.png" alt="Prefeitura de Indaiatuba"/>
                                </div>
                            </div>
                        </div>

                        <div className="organizer-card">
                            <div className="team-one__right-single-inner">
                                <div className="author-box">
                                    <h2>Associação dos Engenheiros, Arquitetos e Agrônomos de Indaiatuba</h2>
                                    <p>Organização CONSTRUIND</p>
                                </div>
                                <div className="text-box">
                                    <p>A CONSTRUIND 2025 representa um marco para o setor da construção civil em Indaiatuba. Estamos orgulhosos de promover este evento que conecta toda a cadeia produtiva e gera oportunidades únicas de negócios.</p>
                                </div>
                                <div className="logo-signature">
                                    <img src="/assets/images/logos/aeai-logo.png" alt="AEAI"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team One*/} 
        
            
        </>
    )
}
