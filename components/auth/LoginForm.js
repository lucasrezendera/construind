'use client'
import { useState } from 'react'
import { signIn } from '@/lib/supabase'

export default function LoginForm({ onLoginSuccess }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            await signIn(formData.email, formData.password)
            onLoginSuccess()
        } catch (error) {
            console.error('Erro no login:', error)
            setError('Email ou senha incorretos. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div className="login-card" style={{
                background: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div className="text-center" style={{ marginBottom: '30px' }}>
                    <h2 style={{ 
                        color: '#333', 
                        marginBottom: '10px',
                        fontSize: '28px',
                        fontWeight: 'bold'
                    }}>
                        Admin Login
                    </h2>
                    <p style={{ color: '#666', fontSize: '14px' }}>
                        Acesso restrito para administradores
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            fontWeight: 'bold',
                            color: '#333'
                        }}>
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '2px solid #e1e5e9',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#ff5e14'}
                            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                        />
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                        <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            fontWeight: 'bold',
                            color: '#333'
                        }}>
                            Senha:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                border: '2px solid #e1e5e9',
                                borderRadius: '8px',
                                fontSize: '16px',
                                transition: 'border-color 0.3s',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#ff5e14'}
                            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                        />
                    </div>

                    {error && (
                        <div style={{
                            background: '#fee',
                            color: '#c33',
                            padding: '10px',
                            borderRadius: '5px',
                            marginBottom: '20px',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: loading ? '#ccc' : '#ff5e14',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => {
                            if (!loading) e.target.style.background = '#e04a0a'
                        }}
                        onMouseOut={(e) => {
                            if (!loading) e.target.style.background = '#ff5e14'
                        }}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <div style={{ 
                    marginTop: '20px', 
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#999'
                }}>
                    <p>CONSTRUIND 2025 - Sistema Administrativo</p>
                </div>
            </div>
        </div>
    )
}



