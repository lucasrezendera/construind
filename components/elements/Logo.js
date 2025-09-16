'use client'
import Link from "next/link"

export default function Logo({ className = "", forceDark = false }) {
    // Determina se é tema light baseado na prop forceDark
    const isLightTheme = !forceDark
    
    // Logo para tema dark (padrão)
    const darkLogo = "/assets/images/logos/191x56.png"
    
    // Logo para tema light
    const lightLogo = "/assets/images/logos/191x56_-removebg-preview.png"
    
    return (
        <div className={`logo-one ${className}`}>
            <Link href="/">
                <img 
                    src={isLightTheme ? lightLogo : darkLogo} 
                    alt="CONSTRUIND 2025"
                />
            </Link>
        </div>
    )
}
