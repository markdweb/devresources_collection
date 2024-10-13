type ImageOwnProps<T extends React.ElementType> = {
    className: string
    image: string
    alt: string
    objectCover?: string
    as?: T
    link?: string
}

type ImageProps<T extends React.ElementType> = ImageOwnProps<T> & Omit<React.ComponentProps<T>, keyof ImageOwnProps<T>>

export const Image = <T extends React.ElementType = 'div'>({ className, image, alt, objectCover, as, link, ...rest }: ImageProps<T> & { link?: string }) => {
    const Component = as || 'div'
    return (
        <Component className={className} {...rest}>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={alt} className={`w-full h-full ${objectCover}`} />
                </a>
            ) : (
                <img src={image} alt={alt} className={`w-full h-full ${objectCover}`} />
            )}
        </Component>
    )
}

