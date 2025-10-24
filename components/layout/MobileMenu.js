'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="/assets/images/resources/logo-1.png" width="150" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Início</Link></li>
                                <li><Link href="/evento">Evento</Link></li>
                                <li><Link href="/tour-360">Tour Virtual</Link></li>
                                <li><Link href="/expositores">Expositores</Link></li>
                                <li><Link href="/contato">Contato</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:contato@construind2025.com.br">contato@construind2025.com.br</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:+5511999999999">(11) 99999-9999</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square"></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer" className="fab fa-pinterest-p"></Link>
                            <Link href="https://instagram.com/constru.ind" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
