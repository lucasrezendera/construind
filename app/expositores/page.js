'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { useState, useEffect, useMemo } from 'react'
import { getExpositores, searchExpositores } from '@/lib/supabase'
import Head from 'next/head'

export default function ExpositoresPage() {
    const [expositores, setExpositores] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        loadExpositores()
    }, [])

    const loadExpositores = async () => {
        try {
            const data = await getExpositores()
            setExpositores(data)
        } catch (error) {
            console.error('Erro ao carregar expositores:', error)
        }
    }

    const [filteredExpositores, setFilteredExpositores] = useState([])

    useEffect(() => {
        const performSearch = async () => {
            if (searchTerm.trim() === '') {
                setFilteredExpositores(expositores)
            } else {
                try {
                    const results = await searchExpositores(searchTerm)
                    setFilteredExpositores(results)
                } catch (error) {
                    console.error('Erro na busca:', error)
                    setFilteredExpositores(expositores)
                }
            }
        }
        performSearch()
    }, [searchTerm, expositores])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
        <Head>
            <title>Expositores - CONSTRUIND 2025</title>
            <meta name="description" content="Conheça os expositores da CONSTRUIND 2025. Mais de 100 empresas do setor da construção civil participando da maior feira de Indaiatuba." />
            <meta name="keywords" content="expositores CONSTRUIND, feira construção civil, empresas construção, Indaiatuba, 2025" />
            <meta property="og:title" content="Expositores - CONSTRUIND 2025" />
            <meta property="og:description" content="Conheça os expositores da CONSTRUIND 2025. Mais de 100 empresas do setor da construção civil participando da maior feira de Indaiatuba." />
            <meta property="og:url" content="https://construind2025.com/expositores" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://construind2025.com/expositores" />
        </Head>
        <Layout breadcrumbTitle="Expositores">
        {/* Start Team Two*/} 
        <section className="team-two">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Expositores Confirmados</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title event-gradient-text">Conheça Nossos Expositores</h2>
                </div>

                {/* Barra de Pesquisa */}
                <div className="search-container" style={{ 
                    marginBottom: '50px', 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <div style={{ position: 'relative', maxWidth: '500px', width: '100%' }}>
                        <input
                            type="text"
                            placeholder="Pesquisar por nome, categoria, endereço ou localização do stand..."
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{
                                width: '100%',
                                padding: '15px 20px',
                                paddingLeft: '50px',
                                border: '2px solid #e9ecef',
                                borderRadius: '25px',
                                fontSize: '16px',
                                outline: 'none',
                                transition: 'border-color 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#ff5e14'}
                            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                        />
                        <span style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#666',
                            fontSize: '18px'
                        }}>
                            <i className="icon-search"></i>
                        </span>
                    </div>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            style={{
                                backgroundColor: '#ff5e14',
                                color: 'white',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Limpar
                        </button>
                    )}
                </div>

                <div className="row">
                    {filteredExpositores.length > 0 ? (
                        filteredExpositores.map((expositor, index) => (
                            <div key={expositor.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="team-two__single">
                                                <div className="team-two__single-img">
                                                    <img
                                                        src={expositor.logo || "/assets/images/team/team-v2-img1.png"}
                                                        alt={expositor.nome}
                                                        style={{
                                                            width: '250px',
                                                            height: '255px',
                                                            objectFit: 'cover',
                                                            borderRadius: '50%',
                                                            borderBottomLeftRadius: '0px'
                                                        }}
                                                    />
                                                </div>

                                    <div className="team-two__single-content">
                                        <div className="team-two__single-content-inner">
                                            <ul className="social-links clearfix">
                                                <li className="share">
                                                    <span className="icon-share"></span>
                                                    <ul className="social-links-inner">
                                                        {expositor.redes_sociais?.facebook && (
                                                            <li><Link href={expositor.redes_sociais.facebook} target="_blank"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                        )}
                                                        {expositor.redes_sociais?.instagram && (
                                                            <li><Link href={expositor.redes_sociais.instagram} target="_blank"><i className="icon-instagram"></i></Link></li>
                                                        )}
                                                        {expositor.redes_sociais?.linkedin && (
                                                            <li><Link href={expositor.redes_sociais.linkedin} target="_blank"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                        )}
                                                        {expositor.redes_sociais?.website && (
                                                            <li><Link href={expositor.redes_sociais.website} target="_blank"><i className="icon-website"></i></Link></li>
                                                        )}
                                                    </ul>
                                                </li>
                                            </ul>

                                            <div className="text-box">
                                                <h2>{expositor.nome}</h2>
                                                <p>{expositor.categoria}</p>
                                            </div>
                                            <div className="number">
                                                <p>
                                                    <span>Stand {expositor.numero_stand}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12" style={{ textAlign: 'center', padding: '50px' }}>
                            <h3 style={{ color: '#666' }}>Nenhum expositor encontrado</h3>
                            <p style={{ color: '#999' }}>Tente ajustar os termos de pesquisa</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
        {/* End Team Two*/} 

        </Layout>
        </>
    )
}