import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight';
    duration?: string;
    delay?: string;
    threshold?: number;
    className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fadeInUp',
    duration = '0.8s',
    delay = '0s',
    threshold = 0.1,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing if we want it to animate only once
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, { threshold });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    const style = {
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${animation} ${duration} cubic-bezier(0.5, 0, 0, 1) forwards` : 'none',
        animationDelay: delay,
        visibility: isVisible ? 'visible' as const : 'hidden' as const,
        // Note: visibility hidden prevents interaction before reveal, but might cause layout flicker if not careful. 
        // Opacity 0 is usually safer for layout but keeps it reliable.
        // We'll stick to opacity.
    };

    return (
        <div
            className={`scroll-reveal ${className}`}
            ref={domRef}
            style={style}
        >
            {children}
        </div>
    );
};
