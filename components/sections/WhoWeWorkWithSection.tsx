'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const audiences = [
    {
        title: 'Startups',
        description: 'Early-stage companies building their first products and scaling operations.',
    },
    {
        title: 'Growing teams',
        description: 'Organizations expanding their technical capabilities and infrastructure.',
    },
    {
        title: 'Solo builders',
        description: 'Independent developers and creators shipping projects that matter.',
    },
    {
        title: 'Organizations',
        description: 'Established companies modernizing systems and optimizing workflows.',
    },
];

export default function WhoWeWorkWithSection() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20 text-center"
                style={{ color: '#5227FF' }}
            >
                Who we work with
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {audiences.map((audience, index) => (
                    <AudienceBlock key={index} audience={audience} index={index} />
                ))}
            </div>
        </section>
    );
}

function AudienceBlock({ audience, index }: { audience: typeof audiences[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                {audience.title}
            </h3>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {audience.description}
            </p>
        </motion.div>
    );
}
