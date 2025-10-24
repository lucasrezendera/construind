'use client'

import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import CredenciamentoForm from "@/components/forms/CredenciamentoForm"
import { useAuth } from "@/lib/useAuth"
import { useEffect } from "react"
import "./tour-360.css"

export default function Tour360() {
    const { isAuthenticated, isLoading, userData, login } = useAuth()

    // Definir SEO dinâmico
    useEffect(() => {
        document.title = 'Tour Virtual 360° - CONSTRUIND 2025'
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore a feira CONSTRUIND 2025 através do nosso tour virtual 360°. Conheça os expositores, estandes e toda a estrutura do evento de forma interativa.')
        }
    }, [])

    const handleCredenciamentoSuccess = () => {
        // Forçar atualização do estado de autenticação
        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    if (isLoading) {
        return (
            <div className="dark-version">
                <Layout>
                    <div className="loading-container">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                        <p>Verificando credenciamento...</p>
                    </div>
                </Layout>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="dark-version">
                <Layout>
                    <Breadcrumb 
                        title="Pré-Credenciamento" 
                        subtitle="Acesse o tour virtual 360° da CONSTRUIND 2025"
                    />
                    
                    <section className="credenciamento-section py-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="text-center mb-3">
                                        <button 
                                            onClick={() => {
                                                localStorage.removeItem('credenciamento_tour')
                                                window.location.reload()
                                            }}
                                            className="btn btn-outline-warning btn-sm"
                                        >
                                            🧹 Limpar Credenciamento (Debug)
                                        </button>
                                    </div>
                                    <CredenciamentoForm onSuccess={handleCredenciamentoSuccess} />
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </div>
        )
    }

    return (
        <div className="dark-version">
            <Layout>
                <Breadcrumb 
                    title="Tour Virtual 360°" 
                    subtitle="Explore a feira CONSTRUIND 2025 de forma interativa"
                />
                
                <section className="tour-360-section py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="tour-360-container">
                                    <div className="tour-header text-center mb-4">
                                        <h2 className="section-title">
                                            <span className="title">Tour Virtual 360°</span>
                                        </h2>
                                        <p className="section-subtitle">
                                            Bem-vindo, {userData?.nome}! Navegue pela feira CONSTRUIND 2025 e conheça todos os expositores, 
                                            estandes e a estrutura completa do evento de forma interativa.
                                        </p>
                                        <div className="user-info">
                                            <small className="text-muted">
                                                <i className="fas fa-user"></i> {userData?.nome} | 
                                                <i className="fas fa-building"></i> {userData?.empresa} | 
                                                <i className="fas fa-tag"></i> {userData?.interesse}
                                            </small>
                                        </div>
                                    </div>
                                    
                                    <div className="tour-iframe-container">
                                        <iframe 
                                            src="https://www.eventovirtual360.com.br/construind25/index.html" 
                                            width="100%" 
                                            height="600" 
                                            frameBorder="0" 
                                            style={{
                                                border: '0',
                                                borderRadius: '10px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                            }}
                                            allowFullScreen 
                                            scrolling="no"
                                            title="Tour Virtual 360° - CONSTRUIND 2025"
                                        />
                                    </div>
                                    
                                    <div className="tour-info mt-4">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="info-card">
                                                    <h4>Como navegar</h4>
                                                    <ul className="list-unstyled">
                                                        <li><i className="fas fa-mouse-pointer"></i> Clique e arraste para olhar ao redor</li>
                                                        <li><i className="fas fa-expand-arrows-alt"></i> Use a roda do mouse para zoom</li>
                                                        <li><i className="fas fa-hand-pointer"></i> Clique nos pontos de interesse</li>
                                                        <li><i className="fas fa-mobile-alt"></i> Funciona em dispositivos móveis</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="info-card">
                                                    <h4>O que você encontrará</h4>
                                                    <ul className="list-unstyled">
                                                        <li><i className="fas fa-building"></i> Todos os estandes dos expositores</li>
                                                        <li><i className="fas fa-map-marker-alt"></i> Pontos de interesse da feira</li>
                                                        <li><i className="fas fa-info-circle"></i> Informações sobre produtos e serviços</li>
                                                        <li><i className="fas fa-route"></i> Layout completo do evento</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </Layout>
        </div>
    )
}
