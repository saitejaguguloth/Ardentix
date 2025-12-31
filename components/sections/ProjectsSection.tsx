'use client';

import { motion } from 'framer-motion';
import PixelCard from '../PixelCard';

const projects = [
    {
        title: 'Insight Whiz',
        description: 'AI-powered analytics platform',
        link: 'https://insightwhiz.netlify.app/',
    },
    {
        title: 'EcotraceAI',
        description: 'Sustainability tracking with AI',
        link: 'https://ecotraceai-frontend-272573144230.asia-south1.run.app/',
    },
    {
        title: 'Skill Set AI',
        description: 'AI skill assessment platform',
        link: 'https://skillset-ai.netlify.app/',
    },
    {
        title: 'JusticeGPT',
        description: 'AI legal assistance platform',
        link: 'https://justicegpt.vercel.app/',
    },
];

export default function ProjectsSection() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-16 text-center"
                style={{ color: '#5227FF' }}
            >
                Selected work
            </motion.h2>

            {/* 4 cards in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="h-72"
                    >
                        <PixelCard variant="purple">
                            <div className="pixel-card-content">
                                <h3 className="pixel-card-title">{project.title}</h3>
                                <p className="pixel-card-description">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pixel-card-button"
                                >
                                    View Site
                                </a>
                            </div>
                        </PixelCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
