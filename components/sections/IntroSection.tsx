'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function IntroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="intro" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl"
            >
                <p className="text-2xl md:text-4xl lg:text-5xl leading-tight font-light tracking-tight">
                    Ardentix is a software company that builds and supplies scalable SaaS tools for modern teams.
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light tracking-tight mt-12 text-text-secondary">
                    We help individuals and organizations turn ideas into working software through reliable, easy‑to‑use products focused on efficiency, performance, and long‑term growth.
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light tracking-tight mt-8 text-text-secondary">
                    Our tools are designed for real‑world use cases — from early‑stage concepts to production‑ready systems.
                </p>
            </motion.div>
        </section>
    );
}
