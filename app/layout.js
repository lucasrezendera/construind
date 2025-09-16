import "react-modal-video/css/modal-video.css"
import "../public/assets/css/bildins.css"
import "../public/assets/css/bildins-dark.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { publicSans, exo } from '@/lib/font'
import JsonLd, { eventSchema, organizationSchema } from '@/components/seo/JsonLd'

export const metadata = {
    title: {
        default: 'CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba',
        template: '%s | CONSTRUIND 2025'
    },
    description: 'A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber. Entrada gratuita com credenciamento obrigatório!',
    keywords: [
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
    authors: [{ name: 'CONSTRUIND 2025', url: 'https://construind2025.com' }],
    creator: 'CONSTRUIND 2025',
    publisher: 'CONSTRUIND 2025',
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
    alternates: {
        canonical: 'https://construind2025.com',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://construind2025.com',
        siteName: 'CONSTRUIND 2025',
        title: 'CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba',
        description: 'A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber.',
        images: [
            {
                url: 'https://construind2025.com/assets/images/logos/191x56.png',
                width: 191,
                height: 56,
                alt: 'CONSTRUIND 2025 Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CONSTRUIND 2025 - Feira da Construção Civil de Indaiatuba',
        description: 'A maior feira da construção civil de Indaiatuba. 23, 24 e 25 de outubro de 2025 no Espaço Viber.',
        images: ['https://construind2025.com/assets/images/logos/191x56.png'],
        creator: '@construind2025',
        site: '@construind2025',
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
    category: 'construction',
    classification: 'Business',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${publicSans.variable} ${exo.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#FF5E14" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <JsonLd data={eventSchema} />
                <JsonLd data={organizationSchema} />
            </head>
            <body>{children}</body>
        </html>
    )
}
