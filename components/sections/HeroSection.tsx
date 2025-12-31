'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import SplitText from '../SplitText';

// Dynamically import Threads to avoid SSR issues with WebGL
const Threads = dynamic(() => import('../Threads'), { ssr: false });

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-offwhite"
        >
            {/* Threads WebGL Background - sticky within hero section */}
            <div className="absolute inset-0 z-0">
                <Threads
                    color={[0, 0, 0]}
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>

            {/* Main title with SplitText animation */}
            <motion.div
                style={{ opacity, y: titleY }}
                className="relative z-10 px-4 md:px-8"
            >
                <SplitText
                    text="ARDENTIX"
                    tag="h1"
                    className="font-display text-[12vw] md:text-[14vw] lg:text-[16vw] leading-[0.85] tracking-tighter text-center select-none text-black"
                    delay={80}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 80, rotateX: -90 }}
                    to={{ opacity: 1, y: 0, rotateX: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="center"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-sm md:text-base text-center mt-6 md:mt-8 text-black/60 font-light tracking-wide max-w-md mx-auto"
                >
                    Building scalable software for modern teams.
                </motion.p>
            </motion.div>
        </section>
    );
}
