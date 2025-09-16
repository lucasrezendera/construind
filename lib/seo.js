// Configurações SEO centralizadas
export const seoConfig = {
    siteName: 'CONSTRUIND 2025',
    siteUrl: 'https://construind2025.com',
    defaultTitle: 'CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba',
    defaultDescription: 'A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber. Entrada gratuita com credenciamento obrigatório!',
    defaultKeywords: [
        'feira construção civil',
        'Indaiatuba',
        'CONSTRUIND 2025',
        'expositores construção',
        'materiais construção',
        'arquitetura',
        'engenharia civil',
        'construção',
        'feira Indaiatuba',
        'evento construção',
        'Espaço Viber',
        'outubro 2025',
        'feira gratuita',
        'credenciamento',
        'networking construção'
    ],
    social: {
        twitter: '@construind2025',
        instagram: '@constru.ind',
        facebook: 'construind2025'
    },
    contact: {
        email: 'construind25@gmail.com',
        phone: '+55-19-97412-4162',
        address: 'Espaço Viber - R. Goiás, Cidade Nova II, Indaiatuba - SP'
    },
    event: {
        startDate: '2025-10-23T11:00:00-03:00',
        endDate: '2025-10-25T20:00:00-03:00',
        location: 'Espaço Viber - Indaiatuba/SP',
        price: 'Gratuito',
        currency: 'BRL'
    }
}

// Função para gerar metadata de páginas
export function generatePageMetadata({
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website'
}) {
    const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle
    const fullDescription = description || seoConfig.defaultDescription
    const fullKeywords = [...seoConfig.defaultKeywords, ...keywords]
    const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
    const fullImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}/assets/images/logos/191x56.png`

    return {
        title: fullTitle,
        description: fullDescription,
        keywords: fullKeywords,
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url: fullUrl,
            type,
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            siteName: seoConfig.siteName,
            locale: 'pt_BR',
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            images: [fullImage],
            creator: seoConfig.social.twitter,
            site: seoConfig.social.twitter,
        },
        alternates: {
            canonical: fullUrl,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

// Páginas com metadata específica
export const pageMetadata = {
    home: generatePageMetadata({
        title: 'CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba',
        description: 'A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber. Entrada gratuita com credenciamento obrigatório!',
        url: '/',
        image: '/assets/images/logos/191x56.png'
    }),
    evento: generatePageMetadata({
        title: 'Sobre o Evento',
        description: 'Conheça a CONSTRUIND 2025, a maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro no Espaço Viber. Mais de 100 expositores e 10.000 visitantes esperados.',
        keywords: ['evento construção civil', 'feira Indaiatuba 2025', 'CONSTRUIND sobre', 'Espaço Viber'],
        url: '/evento',
        image: '/assets/images/segments/ARQUITETOS.jpg'
    }),
    expositores: generatePageMetadata({
        title: 'Expositores',
        description: 'Conheça os expositores da CONSTRUIND 2025. Mais de 100 empresas do setor da construção civil participando da maior feira de Indaiatuba.',
        keywords: ['expositores CONSTRUIND', 'feira construção civil', 'empresas construção', 'Indaiatuba 2025'],
        url: '/expositores',
        image: '/assets/images/logos/191x56.png'
    }),
    sejaExpositor: generatePageMetadata({
        title: 'Seja um Expositor',
        description: 'Participe da CONSTRUIND 2025 como expositor. A maior feira da construção civil de Indaiatuba oferece visibilidade e networking para sua empresa.',
        keywords: ['seja expositor', 'participar feira', 'CONSTRUIND expositor', 'feira construção civil'],
        url: '/seja-um-expositor',
        image: '/assets/images/logos/191x56.png'
    }),
    credenciamento: generatePageMetadata({
        title: 'Credenciamento',
        description: 'Faça seu credenciamento gratuito para a CONSTRUIND 2025. Acesso exclusivo à maior feira da construção civil de Indaiatuba.',
        keywords: ['credenciamento', 'inscrição feira', 'CONSTRUIND credenciamento', 'feira gratuita'],
        url: '/credenciamento',
        image: '/assets/images/logos/191x56.png'
    }),
    contato: generatePageMetadata({
        title: 'Contato',
        description: 'Entre em contato com a organização da CONSTRUIND 2025. Tire suas dúvidas sobre o evento e participe da maior feira da construção civil de Indaiatuba.',
        keywords: ['contato CONSTRUIND', 'organização feira', 'dúvidas evento', 'CONSTRUIND contato'],
        url: '/contato',
        image: '/assets/images/logos/191x56.png'
    })
}
