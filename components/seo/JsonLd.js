export default function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

// Schema para Evento
export const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba",
    "description": "A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber. Entrada gratuita com credenciamento obrigatório!",
    "startDate": "2025-10-23T11:00:00-03:00",
    "endDate": "2025-10-25T20:00:00-03:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
        "@type": "Place",
        "name": "Espaço Viber",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Goiás",
            "addressLocality": "Cidade Nova II",
            "addressRegion": "Indaiatuba",
            "addressCountry": "BR"
        }
    },
    "organizer": {
        "@type": "Organization",
        "name": "CONSTRUIND 2025",
        "url": "https://construind2025.com",
        "email": "construind25@gmail.com",
        "telephone": "+55-19-97412-4162"
    },
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "url": "https://construind2025.com/credenciamento"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": "Profissionais da Construção Civil, Arquitetos, Engenheiros, Construtoras, Incorporadoras, Lojistas, Investidores"
    },
    "category": "Construção Civil",
    "keywords": "feira, construção civil, Indaiatuba, expositores, materiais de construção, arquitetura, engenharia",
    "url": "https://construind2025.com",
    "image": "https://construind2025.com/assets/images/logos/191x56.png"
}

// Schema para Organização
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CONSTRUIND 2025",
    "url": "https://construind2025.com",
    "logo": "https://construind2025.com/assets/images/logos/191x56.png",
    "description": "A maior feira da construção civil de Indaiatuba. Evento anual que reúne toda a cadeia produtiva do setor da construção civil.",
    "foundingDate": "2025",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Goiás",
        "addressLocality": "Cidade Nova II",
        "addressRegion": "Indaiatuba",
        "addressCountry": "BR"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-19-97412-4162",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
    },
    "email": "construind25@gmail.com",
    "sameAs": [
        "https://instagram.com/constru.ind"
    ]
}

// Schema para BreadcrumbList
export const breadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
})

// Schema para FAQ
export const faqSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
})
