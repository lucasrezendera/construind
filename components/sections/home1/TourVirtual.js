import Link from 'next/link'
import './TourVirtual.css'

export default function TourVirtual() {
    return (
        <section className="tour-virtual-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tour-content">
                            <div className="section-title">
                                <span className="subtitle">Explore a Feira</span>
                                <h2 className="title">
                                    Tour Virtual <span className="highlight">360°</span>
                                </h2>
                            </div>
                            
                            <p className="section-description">
                                Descubra todos os expositores, estandes e a estrutura completa da 
                                CONSTRUIND 2025 através do nosso tour virtual interativo. 
                                Navegue pela feira como se estivesse lá pessoalmente!
                            </p>
                            
                            <div className="tour-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-vr-cardboard"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4>Experiência Imersiva</h4>
                                        <p>Navegue em 360° por todos os estandes</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-mouse-pointer"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4>Interativo</h4>
                                        <p>Clique nos pontos de interesse para mais informações</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4>Responsivo</h4>
                                        <p>Funciona perfeitamente em desktop e mobile</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tour-actions">
                                <Link href="/tour-360" className="btn btn-primary btn-lg">
                                    <i className="fas fa-play-circle"></i>
                                    Iniciar Tour Virtual
                                </Link>
                                
                                <div className="tour-info">
                                    <small>
                                        <i className="fas fa-clock"></i>
                                        Acesso gratuito com credenciamento
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="tour-visual">
                            <div className="tour-preview">
                                <div className="preview-image">
                                    <div className="tour-placeholder">
                                        <i className="fas fa-cube"></i>
                                        <span>Tour 360°</span>
                                    </div>
                                </div>
                                
                                <div className="preview-overlay">
                                    <div className="play-button">
                                        <i className="fas fa-play"></i>
                                    </div>
                                    <div className="preview-text">
                                        <h4>CONSTRUIND 2025</h4>
                                        <p>Tour Virtual Interativo</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tour-stats">
                                <div className="stat-item">
                                    <div className="stat-number">360°</div>
                                    <div className="stat-label">Visão Completa</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Expositores</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">24h</div>
                                    <div className="stat-label">Disponível</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
