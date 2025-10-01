'use client'
export default function Sponsors() {
    return (
        <>
        {/* Start Sponsors Section*/} 
        <section className="sponsors-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sponsors-section__top">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Patrocinadores</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title event-gradient-text">Nossos Parceiros</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="sponsors-section__content">
                            <div className="sponsors-section__logos">
                                <div className="row align-items-center justify-content-center">
                                    {/* Patrocinador 1 */}
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="sponsors-section__single">
                                            <div className="sponsors-section__single-inner">
                                                <div className="sponsors-section__logo">
                                                    <img src="/assets/images/logos/gta.png" alt="GTA" />
                                                </div>
                                                <div className="sponsors-section__content-box">
                                                    <h3>GTA</h3>
                                                    <p>Patrocinador Principal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patrocinador 2 */}
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div className="sponsors-section__single">
                                            <div className="sponsors-section__single-inner">
                                                <div className="sponsors-section__logo sponsors-section__logo--laktus">
                                                    <img src="/assets/images/logos/lakstus.png" alt="Laktus" />
                                                </div>
                                                <div className="sponsors-section__content-box">
                                                    <h3>Laktus</h3>
                                                    <p>Patrocinador Oficial</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Sponsors Section*/} 
        </>
    )
}
