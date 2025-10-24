'use client'

import { useState } from 'react'

export default function CredenciamentoForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        cargo: '',
        interesse: 'visitante'
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Limpar erro do campo quando usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.nome.trim()) {
            newErrors.nome = 'Nome é obrigatório'
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obrigatório'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        
        if (!formData.telefone.trim()) {
            newErrors.telefone = 'Telefone é obrigatório'
        }
        
        if (!formData.empresa.trim()) {
            newErrors.empresa = 'Empresa é obrigatória'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Formulário submetido com dados:', formData)
        
        if (!validateForm()) {
            console.log('Validação falhou, erros:', errors)
            return
        }

        console.log('Validação passou, iniciando processo...')
        setIsLoading(true)
        
        try {
            console.log('Iniciando processo de credenciamento...')
            
            // Simular envio do formulário
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            // Salvar dados no localStorage
            const credenciamentoData = {
                ...formData,
                timestamp: new Date().toISOString()
            }
            
            localStorage.setItem('credenciamento_tour', JSON.stringify(credenciamentoData))
            console.log('Dados salvos no localStorage:', credenciamentoData)
            
            // Mostrar mensagem de sucesso
            alert('Credenciamento realizado com sucesso! Redirecionando para o tour...')
            
            // Chamar callback de sucesso
            onSuccess()
            
        } catch (error) {
            console.error('Erro ao processar credenciamento:', error)
            alert('Erro ao processar credenciamento. Tente novamente.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="credenciamento-form-container">
            <div className="form-header">
                <h2>Pré-Credenciamento para Tour Virtual</h2>
                <p>Preencha os dados abaixo para acessar o tour virtual 360° da CONSTRUIND 2025</p>
            </div>

            <form onSubmit={handleSubmit} className="credenciamento-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo *</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className={errors.nome ? 'error' : ''}
                                placeholder="Digite seu nome completo"
                            />
                            {errors.nome && <span className="error-message">{errors.nome}</span>}
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="seu@email.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone/WhatsApp *</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                className={errors.telefone ? 'error' : ''}
                                placeholder="(11) 99999-9999"
                            />
                            {errors.telefone && <span className="error-message">{errors.telefone}</span>}
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="empresa">Empresa *</label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                className={errors.empresa ? 'error' : ''}
                                placeholder="Nome da sua empresa"
                            />
                            {errors.empresa && <span className="error-message">{errors.empresa}</span>}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="cargo">Cargo</label>
                            <input
                                type="text"
                                id="cargo"
                                name="cargo"
                                value={formData.cargo}
                                onChange={handleChange}
                                placeholder="Seu cargo na empresa"
                            />
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="interesse">Tipo de Interesse</label>
                            <div className="select-wrapper">
                                <select
                                    id="interesse"
                                    name="interesse"
                                    value={formData.interesse}
                                    onChange={handleChange}
                                >
                                    <option value="visitante">Visitante</option>
                                    <option value="expositor">Expositor</option>
                                    <option value="fornecedor">Fornecedor</option>
                                    <option value="investidor">Investidor</option>
                                    <option value="imprensa">Imprensa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button 
                        type="submit" 
                        className="btn-submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                Processando...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-check"></i>
                                Acessar Tour Virtual
                            </>
                        )}
                    </button>
                </div>

                <div className="form-footer">
                    <p>
                        <i className="fas fa-shield-alt"></i>
                        Seus dados estão seguros e serão utilizados apenas para credenciamento no evento.
                    </p>
                </div>
            </form>
        </div>
    )
}
