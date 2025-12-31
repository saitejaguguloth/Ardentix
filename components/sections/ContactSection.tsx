'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    useEffect(() => {
        if (linksRef.current) {
            const links = linksRef.current.querySelectorAll('a');
            gsap.set(links, { yPercent: 30, opacity: 0 });
        }
    }, []);

    return (
        <section
            id="contact"
            ref={containerRef}
            className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        >
            <div className="flex flex-col items-center">
                {/* JOIN US Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-8"
                >
                    <h2
                        className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight"
                        style={{ color: '#5227FF' }}
                    >
                        JOIN US
                    </h2>
                </motion.div>

                <motion.div
                    style={{ y }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mb-16 w-full max-w-4xl"
                >
                    <Image
                        src="/join-us-illustration.png"
                        alt="Join us at Ardentix"
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center max-w-4xl"
                >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
                        Let's build something meaningful.
                    </h3>

                    <div ref={linksRef} className="space-y-4 text-lg md:text-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20, rotate: 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="mailto:contact@ardentix.tech"
                                className="border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300 text-black/70 hover:text-[#5227FF]"
                            >
                                contact@ardentix.tech
                            </a>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, rotate: 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="mailto:ardentix.tech@gmail.com"
                                className="border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300 text-black/70 hover:text-[#5227FF]"
                            >
                                ardentix.tech@gmail.com
                            </a>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, rotate: 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="mailto:ardentix.hr@gmail.com"
                                className="border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300 text-black/70 hover:text-[#5227FF]"
                            >
                                ardentix.hr@gmail.com
                            </a>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, rotate: 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="https://www.linkedin.com/company/ardentix-tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300 text-black/70 hover:text-[#5227FF]"
                            >
                                LinkedIn
                            </a>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, rotate: 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="https://ardentix.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b-2 border-transparent hover:border-[#5227FF] transition-all duration-300 text-black/70 hover:text-[#5227FF]"
                            >
                                ardentix.tech
                            </a>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
