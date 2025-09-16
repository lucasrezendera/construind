import Image from 'next/image'

export default function OptimizedImage({ 
    src, 
    alt, 
    width, 
    height, 
    priority = false,
    className = '',
    style = {},
    ...props 
}) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={className}
            style={style}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            {...props}
        />
    )
}

// Componente específico para logos
export function LogoImage({ src, alt, className = '', priority = false }) {
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            width={191}
            height={56}
            priority={priority}
            className={className}
        />
    )
}

// Componente para imagens de segmentos
export function SegmentImage({ src, alt, className = '' }) {
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            width={400}
            height={300}
            className={className}
        />
    )
}

// Componente para imagens de fundo
export function BackgroundImage({ src, alt, className = '' }) {
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className={className}
            style={{ objectFit: 'cover' }}
        />
    )
}
