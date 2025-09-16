'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { getExpositores, deleteExpositor, addExpositor, updateExpositor, getCurrentUser, signOut, onAuthStateChange } from '@/lib/supabase'
import LoginForm from '@/components/auth/LoginForm'

export default function AdminExpositores() {
    const [expositores, setExpositores] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingExpositor, setEditingExpositor] = useState(null)
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [formData, setFormData] = useState({
        nome: '',
        categoria: '',
        numero_stand: '',
        logo: '',
        redes_sociais: {
            facebook: '',
            instagram: '',
            linkedin: '',
            website: ''
        }
    })
    const [logoFile, setLogoFile] = useState(null)

    useEffect(() => {
        // Verificar autenticação
        checkUser()
        
        // Escutar mudanças de autenticação
        const { data: { subscription } } = onAuthStateChange((event, session) => {
            if (session?.user) {
                setUser(session.user)
                loadExpositores()
            } else {
                setUser(null)
            }
            setAuthLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    const checkUser = async () => {
        try {
            const currentUser = await getCurrentUser()
            if (currentUser) {
                setUser(currentUser)
                loadExpositores()
            }
        } catch (error) {
            console.error('Erro ao verificar usuário:', error)
        } finally {
            setAuthLoading(false)
        }
    }

    const loadExpositores = async () => {
        try {
            const data = await getExpositores()
            setExpositores(data)
        } catch (error) {
            console.error('Erro ao carregar expositores:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name.startsWith('redes_sociais.')) {
            const socialKey = name.split('.')[1]
            setFormData(prev => ({
                ...prev,
                redes_sociais: {
                    ...prev.redes_sociais,
                    [socialKey]: value
                }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            // Validar tipo de arquivo
            if (!file.type.startsWith('image/')) {
                alert('Por favor, selecione apenas arquivos de imagem (JPG, PNG, GIF)')
                return
            }
            
            // Validar tamanho (máx 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('O arquivo deve ter no máximo 5MB')
                return
            }
            
            setLogoFile(file)
            
            // Criar URL temporária para preview
            const reader = new FileReader()
            reader.onload = (e) => {
                setFormData(prev => ({
                    ...prev,
                    logo: e.target.result
                }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (editingExpositor) {
                await updateExpositor(editingExpositor.id, formData)
                alert('Expositor atualizado com sucesso!')
            } else {
                await addExpositor(formData)
                alert('Expositor adicionado com sucesso!')
            }
            setShowForm(false)
            setEditingExpositor(null)
            setFormData({
                nome: '',
                categoria: '',
                numero_stand: '',
                logo: '',
                redes_sociais: {
                    facebook: '',
                    instagram: '',
                    linkedin: '',
                    website: ''
                }
            })
            setLogoFile(null)
            await loadExpositores()
        } catch (error) {
            console.error('Erro ao salvar expositor:', error)
            alert('Erro ao salvar expositor')
        }
    }

    const handleEdit = (expositor) => {
        setEditingExpositor(expositor)
        setFormData({
            nome: expositor.nome || '',
            categoria: expositor.categoria || '',
            numero_stand: expositor.numero_stand || '',
            logo: expositor.logo || '',
            redes_sociais: {
                facebook: expositor.redes_sociais?.facebook || '',
                instagram: expositor.redes_sociais?.instagram || '',
                linkedin: expositor.redes_sociais?.linkedin || '',
                website: expositor.redes_sociais?.website || ''
            }
        })
        setShowForm(true)
    }

    const handleDelete = async (id) => {
        if (confirm('Tem certeza que deseja excluir este expositor?')) {
            try {
                await deleteExpositor(id)
                await loadExpositores()
                alert('Expositor excluído com sucesso!')
            } catch (error) {
                console.error('Erro ao excluir expositor:', error)
                alert('Erro ao excluir expositor')
            }
        }
    }

    const handleAddNew = () => {
        setEditingExpositor(null)
        setFormData({
            nome: '',
            categoria: '',
            numero_stand: '',
            logo: '',
            redes_sociais: {
                facebook: '',
                instagram: '',
                linkedin: '',
                website: ''
            }
        })
        setLogoFile(null)
        setShowForm(true)
    }

    const handleLoginSuccess = () => {
        // O usuário será definido automaticamente pelo onAuthStateChange
    }

    const handleLogout = async () => {
        try {
            await signOut()
            setUser(null)
            setExpositores([])
        } catch (error) {
            console.error('Erro ao fazer logout:', error)
            alert('Erro ao fazer logout')
        }
    }

    // Mostrar loading enquanto verifica autenticação
    if (authLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '15px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #ff5e14',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 20px'
                    }}></div>
                    <p style={{ color: '#333', fontSize: '16px' }}>Verificando autenticação...</p>
                </div>
                <style jsx>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        )
    }

    // Mostrar formulário de login se não estiver autenticado
    if (!user) {
        return <LoginForm onLoginSuccess={handleLoginSuccess} />
    }

    return (
        <>
            <Layout breadcrumbTitle="Admin - Expositores">
                <section className="team-two">
                    <div className="container">
                        <div className="sec-title center text-center tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="left-line"></div>
                                <div className="text tg-element-title">
                                    <h4>Administração</h4>
                                </div>
                                <div className="right-line"></div>
                            </div>
                            <h2 className="sec-title__title tg-element-title event-gradient-text">Gerenciar Expositores</h2>
                            
                            {/* Botão de logout */}
                            <div style={{ marginTop: '20px' }}>
                                <button
                                    onClick={handleLogout}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                                >
                                    🚪 Sair
                                </button>
                                <p style={{ 
                                    marginTop: '10px', 
                                    fontSize: '12px', 
                                    color: '#666' 
                                }}>
                                    Logado como: {user?.email}
                                </p>
                            </div>
                        </div>

                        <div className="text-center" style={{ marginBottom: '30px' }}>
                            <button 
                                onClick={handleAddNew}
                                style={{
                                    backgroundColor: '#ff5e14',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}
                            >
                                + Adicionar Novo Expositor
                            </button>
                        </div>

                        {showForm && (
                            <div className="admin-form" style={{ 
                                background: '#f8f9fa', 
                                padding: '30px', 
                                borderRadius: '10px', 
                                marginBottom: '30px',
                                border: '1px solid #dee2e6'
                            }}>
                                <h3 style={{ marginBottom: '20px', color: '#333' }}>
                                    {editingExpositor ? 'Editar Expositor' : 'Adicionar Novo Expositor'}
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome da Empresa:</label>
                                                <input
                                                    type="text"
                                                    name="nome"
                                                    value={formData.nome}
                                                    onChange={handleInputChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Categoria:</label>
                                                <input
                                                    type="text"
                                                    name="categoria"
                                                    value={formData.categoria}
                                                    onChange={handleInputChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Número do Stand:</label>
                                                <input
                                                    type="text"
                                                    name="numero_stand"
                                                    value={formData.numero_stand}
                                                    onChange={handleInputChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Logo da Empresa:</label>
                                                <input
                                                    type="file"
                                                    name="logo"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                                <small style={{ color: '#666', fontSize: '12px' }}>
                                                    Formatos aceitos: JPG, PNG, GIF (máx. 5MB)
                                                </small>
                                                {formData.logo && (
                                                    <div style={{ marginTop: '10px' }}>
                                                        <img 
                                                            src={formData.logo} 
                                                            alt="Preview do logo" 
                                                            style={{ 
                                                                maxWidth: '100px', 
                                                                maxHeight: '100px', 
                                                                objectFit: 'contain',
                                                                border: '1px solid #ddd',
                                                                borderRadius: '5px'
                                                            }} 
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Facebook:</label>
                                                <input
                                                    type="url"
                                                    name="redes_sociais.facebook"
                                                    value={formData.redes_sociais.facebook}
                                                    onChange={handleInputChange}
                                                    placeholder="https://facebook.com/empresa"
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Instagram:</label>
                                                <input
                                                    type="url"
                                                    name="redes_sociais.instagram"
                                                    value={formData.redes_sociais.instagram}
                                                    onChange={handleInputChange}
                                                    placeholder="https://instagram.com/empresa"
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>LinkedIn:</label>
                                                <input
                                                    type="url"
                                                    name="redes_sociais.linkedin"
                                                    value={formData.redes_sociais.linkedin}
                                                    onChange={handleInputChange}
                                                    placeholder="https://linkedin.com/company/empresa"
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ marginBottom: '15px' }}>
                                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Website:</label>
                                                <input
                                                    type="url"
                                                    name="redes_sociais.website"
                                                    value={formData.redes_sociais.website}
                                                    onChange={handleInputChange}
                                                    placeholder="https://empresa.com"
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '5px'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            style={{
                                                backgroundColor: '#6c757d',
                                                color: 'white',
                                                border: 'none',
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                marginRight: '10px'
                                            }}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            style={{
                                                backgroundColor: '#28a745',
                                                color: 'white',
                                                border: 'none',
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {editingExpositor ? 'Atualizar' : 'Adicionar'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {loading ? (
                            <div className="text-center" style={{ padding: '50px' }}>
                                <p>Carregando expositores...</p>
                            </div>
                        ) : (
                            <div className="row">
                                {expositores.length > 0 ? (
                                    expositores.map((expositor) => (
                                        <div key={expositor.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
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
                                                        <div className="text-box">
                                                            <h2>{expositor.nome}</h2>
                                                            <p>{expositor.categoria}</p>
                                                        </div>
                                                        <div className="number">
                                                            <p>
                                                                <span>Stand {expositor.numero_stand}</span>
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="admin-actions" style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                                            <button 
                                                                onClick={() => handleEdit(expositor)}
                                                                style={{
                                                                    backgroundColor: '#007bff',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 15px',
                                                                    borderRadius: '5px',
                                                                    cursor: 'pointer',
                                                                    fontSize: '14px'
                                                                }}
                                                            >
                                                                Editar
                                                            </button>
                                                            <button 
                                                                onClick={() => handleDelete(expositor.id)}
                                                                style={{
                                                                    backgroundColor: '#dc3545',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    padding: '8px 15px',
                                                                    borderRadius: '5px',
                                                                    cursor: 'pointer',
                                                                    fontSize: '14px'
                                                                }}
                                                            >
                                                                Excluir
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12" style={{ textAlign: 'center', padding: '50px' }}>
                                        <h3 style={{ color: '#666' }}>Nenhum expositor encontrado</h3>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    )
}
