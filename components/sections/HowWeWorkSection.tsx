'use client';

import { motion } from 'framer-motion';
import FlowingMenu from '../FlowingMenu';

const flowingMenuItems = [
    {
        link: '#',
        text: 'Discover',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop'
    },
    {
        link: '#',
        text: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
    },
    {
        link: '#',
        text: 'Build',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
        link: '#',
        text: 'Ship',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
        link: '#',
        text: 'Iterate',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
];

export default function HowWeWorkSection() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-12 text-center"
                style={{ color: '#5227FF' }}
            >
                How we work
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative rounded-2xl overflow-hidden border border-black/10"
                style={{ height: '500px' }}
            >
                <FlowingMenu
                    items={flowingMenuItems}
                    speed={12}
                    textColor="#000"
                    bgColor="#F2F2F2"
                    marqueeBgColor="#5227FF"
                    marqueeTextColor="#fff"
                    borderColor="rgba(0,0,0,0.08)"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 text-lg text-black/60 max-w-2xl"
            >
                Hover over each step to explore our process. We believe in iterative development
                with continuous feedback and improvement.
            </motion.p>
        </section>
    );
}
