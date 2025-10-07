import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        {/* Start Site Footer*/} 
        <footer className="site-footer">
            <div className="shape1 float-bob-y"><img src="/assets/images/shapes/footer-v1-shape1.png" alt=""/></div>
            <div className="shape2 float-bob-y"><span className="icon-pattern"></span></div>
            {/* Start Site Footer Top*/} 
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="site-footer__logo">
                            <img 
                                src="/assets/images/logos/2.png" 
                                alt="Logo" 
                                style={{ 
                                    height: '100px', 
                                    width: 'auto',
                                    maxWidth: '300px',
                                    objectFit: 'contain'
                                }} 
                            />
                        </div>

                        <div className="site-footer__subscribe-form">
                            <form className="subscribe-form" action="#">
                                <input type="email" name="email" placeholder="Digite seu email"/>
                                <button type="submit" className="thm-btn">Inscrever-se
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </button>
                            </form>
                        </div>

                        <div className="site-footer__social-links">
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><span className="icon-facebook-app-symbol"></span></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><span className="icon-twitter1"></span></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin-big-logo"></span></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><span className="icon-behance"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Top*/} 

            {/* Start Site Footer Middle*/} 
            <div className="site-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__single footer-widget__services">
                                <div className="title-box">
                                    <h2>O Evento</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/seja-um-expositor"><span className="icon-chevron"></span> Seja um Expositor</Link>
                                    </li>
                                    <li><Link href="/expositores"><span className="icon-chevron"></span> Expositores</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__single footer-widget__useful-links">
                                <div className="title-box">
                                    <h2>Links Úteis</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/"><span className="icon-chevron"></span> Início</Link></li>
                                    <li><Link href="/evento"><span className="icon-chevron"></span> Evento</Link></li>
                                    <li><Link href="/seja-um-expositor"><span className="icon-chevron"></span> Seja um Expositor</Link></li>
                                    <li><Link href="/expositores"><span className="icon-chevron"></span> Expositores</Link></li>
                                    <li><Link href="/contato"><span className="icon-chevron"></span> Contato</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__single footer-widget__contact">
                                <div className="title-box">
                                    <h2>Contato</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__contact-list">
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-maps-and-flags"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Espaço Viber - R. Goiás <br/> Cidade Nova II, Indaiatuba - SP</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-telephone-call"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="tel:1938349264">(19) 3834-9264</Link></p>
                                            <p><Link href="tel:19974124162">(19) 97412-4162</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-email"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="mailto:construind25@gmail.com">construind25@gmail.com</Link></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__single footer-widget__gallery">
                                <div className="title-box">
                                    <h2>Participe</h2>
                                    <div className="line"></div>
                                </div>

                                <div className="footer-widget__buttons">
                                    <Link href="/seja-um-expositor" className="thm-btn footer-btn">
                                        Seja um Expositor
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                    
                                    <a 
                                        href="https://www.eventuall.com.br/construind" 
                                        className="thm-btn footer-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Faça seu Credenciamento
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
            </div>
            {/* End Site Footer Middle*/} 

            {/* Start Site Footer Bottom*/} 
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p>Copyright@ 2025 <Link href="/">CONSTRUIND</Link>. Todos os Direitos Reservados.</p>
                                </div>

                                <ul className="site-footer__bottom-menu">
                                    <li><Link href="/termos-e-condicoes">Termos e Condições</Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/contato">Suporte</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Bottom*/} 
        </footer>
        {/* End Site Footer*/} 

        
        </>
    )
}
