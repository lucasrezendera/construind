'use client'
import { useState } from 'react'
export default function Faq() {
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
    return (
        <>
        {/* Start Faq One*/} 
        <section className="faq-one">
            <div className="shape1"><img src="/assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="/assets/images/shapes/faq-v1-shape2.png" alt=""/></div>
            <div className="shape3"><img src="/assets/images/shapes/faq-v1-shape3.png" alt=""/></div>
            <div className="shape4 float-bob-x"><img src="/assets/images/shapes/faq-v1-shape4.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__faq">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>FAQ</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title event-gradient-text">Perguntas <br/> Frequentes </h2>
                            </div>

                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Qual é o horário de funcionamento da feira?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>A CONSTRUIND 2025 acontece nos dias 23, 24 e 25 de outubro de 2025, das 11h às 20h, no Espaço Viber em Indaiatuba.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>A entrada é gratuita?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Sim, a entrada é gratuita, mas é obrigatório o credenciamento prévio. Todos os visitantes devem se credenciar antes de visitar a feira. O credenciamento pode ser feito online ou no local do evento.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Há estacionamento disponível?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>O Espaço Viber possui estacionamento, mas com vagas limitadas. Recomendamos o uso de Uber, carona ou transporte público para evitar problemas de estacionamento. O estacionamento é gratuito, mas sujeito à disponibilidade.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Como posso me inscrever como expositor?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Para se inscrever como expositor, entre em contato conosco através do formulário de contato ou pelos telefones disponíveis. Temos diferentes opções de estandes e espaços.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 

                    {/* Start Faq One Img*/} 
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__img">

                            <ul className="faq-one__img-list1">
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/images/segments/ARQUITETOS.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/images/segments/ENGENHEIROS.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>

                            <ul className="faq-one__img-list2">
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/images/segments/COSNTRUTORAS.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/images/segments/LOJISTAS.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Faq One Img*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 
        
            
        </>
    )
}
