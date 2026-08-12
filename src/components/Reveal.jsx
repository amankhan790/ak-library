import React, { useEffect, useRef, useState } from 'react'

const Reveal = ({
    as: Component = 'div',
    children,
    className = '',
    delay = 0,
    duration = 700,
    distance = 24,
    threshold = 0.18,
    rootMargin = '0px 0px -10% 0px',
    once = true,
}) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current

        if (!element) {
            return undefined
        }

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reducedMotion) {
            setIsVisible(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)

                    if (once) {
                        observer.disconnect()
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin },
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [once, rootMargin, threshold])

    return (
        <Component
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
            style={{
                '--reveal-delay': `${delay}ms`,
                '--reveal-duration': `${duration}ms`,
                '--reveal-distance': `${distance}px`,
            }}
        >
            {children}
        </Component>
    )
}

export default Reveal