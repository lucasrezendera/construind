'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Verificar se existe credenciamento no localStorage
        const checkAuth = () => {
            try {
                console.log('Verificando credenciamento no localStorage...')
                const credenciamento = localStorage.getItem('credenciamento_tour')
                
                if (credenciamento) {
                    console.log('Credenciamento encontrado:', credenciamento)
                    const data = JSON.parse(credenciamento)
                    
                    // Verificar se o credenciamento não é muito antigo (24 horas)
                    const timestamp = new Date(data.timestamp)
                    const now = new Date()
                    const diffHours = (now - timestamp) / (1000 * 60 * 60)
                    
                    console.log(`Credenciamento tem ${diffHours.toFixed(2)} horas`)
                    
                    if (diffHours < 24) {
                        console.log('Credenciamento válido, autenticando...')
                        setIsAuthenticated(true)
                        setUserData(data)
                    } else {
                        console.log('Credenciamento expirado, removendo...')
                        localStorage.removeItem('credenciamento_tour')
                    }
                } else {
                    console.log('Nenhum credenciamento encontrado')
                }
            } catch (error) {
                console.error('Erro ao verificar credenciamento:', error)
                localStorage.removeItem('credenciamento_tour')
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [])

    const login = (userData) => {
        setIsAuthenticated(true)
        setUserData(userData)
    }

    const logout = () => {
        localStorage.removeItem('credenciamento_tour')
        setIsAuthenticated(false)
        setUserData(null)
    }

    return {
        isAuthenticated,
        isLoading,
        userData,
        login,
        logout
    }
}
