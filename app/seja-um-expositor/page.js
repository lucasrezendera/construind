'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
                    status: false,
                    key: 1,
                })
            
                const handleToggle = (key) => {
                    if (isActive.key === key) {
                        setIsActive({
                            status: false,
                        })
                    } else {
                        setIsActive({
                            status: true,
                            key,
                        })
                    }
                }

                useEffect(() => {
                    let sidebarOriginalTop = null;
                    let sidebarOriginalWidth = null;
                    let sidebarFixed = false;
                    let footerTop = null;

                    const handleScroll = () => {
                        const sidebar = document.querySelector('.services-details .sidebar');
                        const footer = document.querySelector('footer');
                        
                        if (sidebar && window.innerWidth >= 992) {
                            if (!sidebarOriginalTop) {
                                sidebarOriginalTop = sidebar.offsetTop;
                                sidebarOriginalWidth = sidebar.offsetWidth;
                            }
                            
                            if (!footerTop && footer) {
                                footerTop = footer.offsetTop;
                            }

                            const rect = sidebar.getBoundingClientRect();
                            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            const viewportHeight = window.innerHeight;
                            
                            // Quando a sidebar chega no topo da viewport
                            if (rect.top <= 20 && !sidebarFixed) {
                                sidebar.style.position = 'fixed';
                                sidebar.style.top = '20px';
                                sidebar.style.width = sidebarOriginalWidth + 'px';
                                sidebarFixed = true;
                            }
                            // Quando volta para cima da posição original
                            else if (scrollTop < sidebarOriginalTop - 20 && sidebarFixed) {
                                sidebar.style.position = 'static';
                                sidebar.style.top = 'auto';
                                sidebar.style.width = 'auto';
                                sidebarFixed = false;
                            }
                            
                            // Limite: quando o footer aparece na tela, para a sidebar
                            if (footerTop && sidebarFixed) {
                                const footerRect = footer.getBoundingClientRect();
                                const sidebarHeight = sidebar.offsetHeight;
                                
                                if (footerRect.top <= viewportHeight) {
                                    const maxTop = footerRect.top - sidebarHeight - 20;
                                    if (maxTop > 20) {
                                        sidebar.style.top = maxTop + 'px';
                                    } else {
                                        sidebar.style.position = 'static';
                                        sidebar.style.top = 'auto';
                                        sidebar.style.width = 'auto';
                                        sidebarFixed = false;
                                    }
                                } else {
                                    sidebar.style.top = '20px';
                                }
                            }
                        }
                    };

                    window.addEventListener('scroll', handleScroll);
                    return () => window.removeEventListener('scroll', handleScroll);
                }, []);

    return (
        <>
        <div className="dark-version">
        <Layout breadcrumbTitle="Seja um Expositor">
        {/* Start Services Details*/} 
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* Start Services Details Content*/} 
                    <div className="col-xl-8">
                        <div className="services-details__content">
                            <div className="services-details__content-img1">
                                <img src="/assets/images/services/services-details-img1.jpg" alt="CONSTRUIND 2025"/>
                            </div>

                            <div className="services-details__content-text1">
                                <h2 className="event-gradient-text">Seja um Expositor da CONSTRUIND 2025</h2>
                                <p className="text1">A CONSTRUIND 2025 é a maior e mais importante feira do setor da construção civil da região de Indaiatuba. O evento foi concebido para reunir, em um único local, toda a cadeia produtiva do segmento, criando um ambiente de negócios completo e dinâmico.</p>
                                <p className="text2">A feira acontecerá nos dias 23, 24 e 25 de outubro de 2025, no Espaço Viber, em Indaiatuba, São Paulo. Com entrada gratuita para todos os visitantes, o evento oferece uma oportunidade única para sua empresa se destacar no mercado.</p>
                            </div>


                            <div className="services-details__content-text2">
                                <h2 className="event-gradient-text">Por que Participar da CONSTRUIND 2025?</h2>
                                <p className="text1">A CONSTRUIND 2025 tem como principal objetivo fomentar o desenvolvimento da construção civil na região, movimentar a economia local e criar um ambiente propício para a realização de negócios. Nossa feira oferece uma plataforma única para que sua empresa apresente produtos e serviços para um público amplo e segmentado.</p>
                                <h2 className="event-gradient-text">Diferenciais do Evento</h2>
                                <p className="text2">Única feira do segmento na região, público altamente qualificado, ambiente ideal para networking e prospecção de novos clientes. Uma oportunidade única para fortalecer parcerias e trocar experiências com profissionais da área.</p>
                                <h2 className="event-gradient-text">Opções de Estandes</h2>
                                <p className="text1">A CONSTRUIND 2025 contará com 5.000 m² de área de exposição com mais de 100 estandes em diferentes metragens. A feira oferece diversas opções de espaços para as empresas que desejam expor suas marcas, produtos e serviços.</p>
                            </div>

                            <div className="services-details__content-text3">
                                
                                <div className="row" style={{marginTop: '30px'}}>
                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInUp" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Estande 2x2m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>4m²</h2>
                                                <p>Estande Montado</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Estande Octanorme</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Carpete Incluso</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 

                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInDown" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Estande 3x3m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>9m²</h2>
                                                <p>Estande Montado</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Estande Octanorme</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Carpete Incluso</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 

                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInUp" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Área 5x5m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>25m²</h2>
                                                <p>Área Livre</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Área 5x5 metros</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Sem Estande Incluso</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 

                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInDown" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Área 8x8m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>64m²</h2>
                                                <p>Área Livre</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Área 8x8 metros</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Sem Estande Incluso</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 

                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInUp" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Área 9x10m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>90m²</h2>
                                                <p>Área Livre</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Área 9x10 metros</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Sem Estande Incluso</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 

                                    {/* Start Pricing One Single*/} 
                                    <div className="col-xl-6 col-lg-6 col-md-6" style={{marginBottom: '30px'}}>
                                        <div className="pricing-one__single wow fadeInDown" data-wow-duration="1500ms">
                                            <div className="shape1"><img src="/assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                            </div>
                                            <div className="plan-box">
                                                <p>Área 10x10m</p>
                                            </div>
                                            <div className="table-header">
                                                <h2>100m²</h2>
                                                <p>Área Livre</p>
                                            </div>

                                            <div className="table-content">
                                                <ul>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Área 10x10 metros</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Energia 220V</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <div className="text-box">
                                                            <p>Sem Estande Incluso</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Pricing One Single*/} 
                                </div>
                            </div>

                            <div className="services-details__accrodion">
                                <div className="faq-one__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>Quem pode participar como expositor?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Fornecedores de materiais básicos de construção, empresas de acabamento e revestimentos, empresas de paisagismo, incorporadoras e construtoras, prestadores de serviços especializados e empresas de tecnologia e inovação para a construção civil.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>Qual o público esperado na feira?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Engenheiros, arquitetos, designers de interiores, paisagistas, construtoras, incorporadoras, lojistas e comerciantes, prestadores de serviços, investidores, estudantes da área e público em geral interessado em construir ou reformar. Esperamos mais de 10.000 visitantes durante os 3 dias de evento.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Onde e quando será realizada a feira?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>A CONSTRUIND 2025 acontecerá nos dias 23, 24 e 25 de outubro de 2025, das 11h às 20h, no Espaço Viber - R. Goiás - Cidade Nova II, Indaiatuba - SP. A entrada é gratuita para todos os visitantes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Services Details Content*/} 

                    {/* Start Sidebar*/} 
                    <div className="col-xl-4">
                        <div className="sidebar">
                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>Informações da Feira</h2>
                                </div>

                                <ul className="sidebar__services-list">
                                    <li className="active"><Link href="#">CONSTRUIND 2025 <span
                                                className="icon-right-arrow"></span></Link></li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
                                <div className="sidebar__emergency-services-inner text-center">
                                    <div className="title">
                                        <h2>Seja um Expositor</h2>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-old-typical-phone"></span>
                                    </div>

                                    <div className="number-box">
                                        <p>Informações sobre Estandes</p>
                                        <h3><Link href="tel:19974124162">(19) 97412-4162</Link></h3>
                                    </div>

                                    <div className="text-box">
                                        <p>Fale com Adriana para informações sobre estandes e estrutura. Mais de 100 expositores confirmados e 10.000 visitantes esperados.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="contact">Saiba Mais
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Sidebar Single*/} 
                        </div>
                    </div>
                    {/* End Sidebar*/} 
                </div>
            </div>
        </section>
        {/* End Services Details*/}


        </Layout>
        </div>
        </>
    )
}