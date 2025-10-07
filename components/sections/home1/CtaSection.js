'use client'
import Link from "next/link"

export default function CtaSection() {
    return (
        <>
            {/* Start CTA Section*/} 
            <div className="site-footer--two__top">
                <div className="site-footer--two__top-bg"
                    style={{ backgroundColor: '#000000' }}></div>
                <div className="site-footer--two__top-shape float-bob-y"><img
                        src="/assets/images/shapes/footer-v2-shape1.png" alt=""/>
                </div>
                <div className="container">
                    <div className="site-footer--two__top-inner">
                        <div className="site-footer__logo">
                            <div className="credenciamento-icon">
                                <i className="fas fa-clipboard-list" style={{fontSize: '60px', color: '#fff'}}></i>
                            </div>
                        </div>
                        <div className="site-footer--two__top-right">
                            <div className="text-box">
                                <h2>Credenciamento obrigatório, <br className="desktop-only"/> faça-o gratuitamente</h2>
                            </div>

                            <div className="btn-box">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End CTA Section*/} 
        </>
    )
}
