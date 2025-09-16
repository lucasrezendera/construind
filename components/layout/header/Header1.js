import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import Logo from "../../elements/Logo"

export default function Header1({ scroll, handleMobileMenu, handlePopup, theme = 'dark' }) {
    return (
        <>




        {/* Start Main Header One*/} 
        <header className="main-header-one navbar-black">
            {/* Start Main Header One Top*/} 
            <div className="main-header-one__top">
                <div className="container">
                    <div className="main-header-one__top-inner">
                        <ul className="header-style1__contact">
                            <li>
                                <div className="icon">
                                    <i className="icon-clock"></i>
                                </div>
                                <div className="text">
                                    <p>23, 24 e 25 de Outubro - 11h às 20h</p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="tel:19974124162">(19) 97412-4162</Link></p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-placeholder"></i>
                                </div>
                                <div className="text">
                                    <p>Espaço Viber - Indaiatuba/SP</p>
                                </div>
                            </li>
                        </ul>

                        <div className="main-header-one__top-right">
                            <div className="header-style1__social-links">
                                <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><i className="icon-facebook-app-symbol"></i></Link>
                                <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><i className="icon-twitter1"></i></Link>
                                <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin-big-logo"></i></Link>
                                <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Main Header One Top*/} 

            {/* Start Main Header One Bottom*/} 
            <div className="main-header-one__bottom">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <Logo forceDark={theme === 'dark'} />
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>   <i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">
                                    <div className="header-search-box">
                                        <Link href="#" onClick={handlePopup} className="main-menu__search search-toggler icon-search-interface-symbol"></Link>
                                    </div>

                                    <div className="main-header__btn">
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
                        </div>
                    </div>
                </nav>
            </div>
            {/* End Main Header One Bottom*/} 
        </header>
        {/* End Main Header One*/} 

        <div className={`stricky-header stricked-menu main-menu navbar-black ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <Logo forceDark={theme === 'dark'} />
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>   <i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">
                                    <div className="header-search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}></Link>
                                    </div>

                                    <div className="main-header__btn">
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
                        </div>
                    </div>
                </nav>
            </div>
        </div>{/* /.stricky-header */}


        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
