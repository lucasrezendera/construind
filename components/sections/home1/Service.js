'use client'
import Link from "next/link"
import { useState } from "react"
export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <>
       {/* Start Services Two*/} 
       <section className="services-two">
            <div className="services-two__pattern"
                style={{ backgroundImage: ' url(/assets/images/pattern/services-v2-pattern.png)' }} ></div>
            <div className="container">

                <div className="services-two__top">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <div className="left-line"></div>
                            <div className="text tg-element-title">
                                <h4>Segmentos</h4>
                            </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title event-gradient-text">Público-Alvo e Segmentos</h2>
                    </div>

                    <div className="text-box">
                        <p>A CONSTRUIND 2025 foi planejada para atender a um público diversificado, abrangendo todos os elos da cadeia da construção civil, desde profissionais até investidores e consumidores.</p>
                    </div>
                </div>

                <div className="row">

                    <div className="services-two__tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                <div className="icon-box">
                                    <span className="icon-construction-1"></span>
                                </div>
                                <h3>Profissionais</h3>
                            </li>
                            <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <div className="icon-box">
                                    <span className="icon-construction-2"></span>
                                </div>
                                <h3>Empresas</h3>
                            </li>
                            <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                <div className="icon-box">
                                    <span className="icon-house"></span>
                                </div>
                                <h3>Materiais</h3>
                            </li>
                            <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <div className="icon-box">
                                    <span className="icon-construction-3"></span>
                                </div>
                                <h3>Serviços</h3>
                            </li>
                            <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                <div className="icon-box">
                                    <span className="icon-development"></span>
                                </div>
                                <h3>Tecnologia</h3>
                            </li>
                        </ul>

                        <div className="tabs-content">

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/ENGENHEIROS.jpg" alt="Engenheiros Civis"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Engenheiros Civis</Link></h3>
                                                        <p>Especialistas em estruturas, fundações e projetos de infraestrutura</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/ARQUITETOS.jpg" alt="Arquitetos"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Arquitetos</Link></h3>
                                                        <p>Criadores de espaços funcionais e esteticamente agradáveis</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/DESEIGNERS INTERIORES.jpg" alt="Designers de Interiores"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Designers de Interiores</Link></h3>
                                                        <p>Especialistas em decoração e ambientação de espaços internos</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/COSNTRUTORAS.jpg" alt="Construtoras"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Construtoras</Link></h3>
                                                        <p>Empresas especializadas em execução de obras e projetos construtivos</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/INCOPORADORAS.jpg" alt="Incorporadoras"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Incorporadoras</Link></h3>
                                                        <p>Empresas que desenvolvem e comercializam empreendimentos imobiliários</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/LOJISTAS.jpg" alt="Lojistas"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Lojistas</Link></h3>
                                                        <p>Comerciantes especializados em materiais e equipamentos de construção</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/MATERIAS DE CONSTRUÇÃO.jpg" alt="Materiais de Construção"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Materiais de Construção</Link></h3>
                                                        <p>Cimento, concreto, aço, madeira e outros insumos essenciais</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/ACABAMENTOS.jpg" alt="Acabamentos"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Acabamentos</Link></h3>
                                                        <p>Revestimentos, pinturas, pisos e elementos decorativos finais</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/PAISAGISMO.jpg" alt="Paisagismo"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Paisagismo</Link></h3>
                                                        <p>Plantas, jardins e elementos naturais para ambientes externos</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/PRESTADORES.jpg" alt="Prestadores de Serviços"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Prestadores de Serviços</Link></h3>
                                                        <p>Empresas que oferecem serviços especializados na construção civil</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/CONSULTORIA.jpg" alt="Serviços Especializados"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Serviços Especializados</Link></h3>
                                                        <p>Instalações elétricas, hidráulicas, ar condicionado e sistemas</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/CONSULTORIA.jpg" alt="Consultoria"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Consultoria</Link></h3>
                                                        <p>Assessoria técnica, gestão de projetos e planejamento estratégico</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                            {/* Start Single Tab Content*/} 
                            <div className={activeIndex == 5 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/TECNOLOGIA.jpg" alt="Tecnologia"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Tecnologia</Link></h3>
                                                        <p>Softwares, automação, BIM e soluções digitais para construção</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/NVESTIDORES.jpg" alt="Investidores"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Investidores</Link></h3>
                                                        <p>Fundos de investimento, bancos e financiadores de projetos</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4">
                                        <div className="services-two__single-tab">
                                            <div className="services-two__single-tab-inner">
                                                <div className="services-two__single-img">
                                                    <img src="/assets/images/segments/PRESTADORES.jpg" alt="Soluções"/>
                                                </div>

                                                <div className="content-box">
                                                    <div className="text">
                                                        <h3><Link href="seja-um-expositor">Soluções</Link></h3>
                                                        <p>Inovações, equipamentos e sistemas inteligentes para construção</p>
                                                    </div>

                                                    <div className="icon-box">
                                                        <Link href="seja-um-expositor"><span
                                                                className="icon-next"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Tab Content*/} 

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Services Two*/} 
        </>
    )
}
