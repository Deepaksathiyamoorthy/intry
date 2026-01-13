import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
    // Parse duration and delay from strings like '0.8s' to numbers for framer-motion
    const parseTime = (time: string) => parseFloat(time.replace('s', ''));
    const durationNum = parseTime(duration);
    const delayNum = parseTime(delay);

    const variants: Record<string, Variants> = {
        fadeInUp: {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: durationNum,
                    delay: delayNum,
                    ease: [0.5, 0, 0, 1]
                }
            }
        },
        slideInLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: durationNum,
                    delay: delayNum,
                    ease: [0.5, 0, 0, 1]
                }
            }
        },
        slideInRight: {
            hidden: { opacity: 0, x: 30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: durationNum,
                    delay: delayNum,
                    ease: [0.5, 0, 0, 1]
                }
            }
        }
    };

    const selectedVariant = variants[animation] || variants.fadeInUp;

    return (
        <motion.div
            className={`scroll-reveal ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: threshold }}
            variants={selectedVariant}
        >
            {children}
        </motion.div>
    );
};
