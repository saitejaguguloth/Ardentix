'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
    {
        title: 'SaaS product engineering',
        description: 'We design and build scalable software products that grow with users and teams.',
    },
    {
        title: 'Web platforms & systems',
        description: 'From internal tools to customer‑facing platforms, built for performance and stability.',
    },
    {
        title: 'UI engineering',
        description: 'Thoughtful interfaces, design systems, and frontends that scale.',
    },
    {
        title: 'Automation & tooling',
        description: 'Systems that remove friction and speed up real workflows.',
    },
];

export default function WhatWeDoSection() {
    return (
        <section id="services" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20 text-center"
                style={{ color: '#5227FF' }}
            >
                What we do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                {services.map((service, index) => (
                    <ServiceBlock key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
}

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, rotate: 3 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 40, rotate: 3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="text-center"
        >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {service.title}
            </h3>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                {service.description}
            </p>
        </motion.div>
    );
}
