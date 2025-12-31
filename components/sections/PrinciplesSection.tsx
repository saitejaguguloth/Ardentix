'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const text = [
    'Performance',
    'over',
    'polish',
    'Systems',
    'over',
    'hacks',
    'Real‑world',
    'use',
    'cases',
    'Long‑term',
    'thinking',
    'Clarity',
    'over',
    'noise',
];

export default function PrinciplesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Fade out the title as we reach the end of the section
    const titleOpacity = useTransform(
        scrollYProgress,
        [0, 0.9, 1],
        [1, 1, 0]
    );

    return (
        <section
            ref={sectionRef}
            className="relative h-[300vh] bg-[#F3F3F3]"
        >
            {/* Sticky container */}
            <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
                {/* Sticky subtitle - "Principles" */}
                <motion.h2
                    style={{ opacity: titleOpacity }}
                    className="absolute top-20 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span style={{ color: '#5227FF' }}>Principles</span>
                </motion.h2>

                {/* Words container */}
                <div className="relative w-full text-center flex items-center justify-center z-10" style={{ minHeight: '200px' }}>
                    {text.map((word, i) => (
                        <WordItem
                            key={i}
                            word={word}
                            index={i}
                            total={text.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WordItem({
    word,
    index,
    total,
    scrollYProgress,
}: {
    word: string;
    index: number;
    total: number;
    scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
    const wordDuration = 1 / total;
    const start = index * wordDuration;
    const fadeInEnd = start + wordDuration * 0.3;
    const fadeOutStart = start + wordDuration * 0.7;
    const end = start + wordDuration;

    // Fade in at start of word's turn, fade out at end
    const opacity = useTransform(
        scrollYProgress,
        [start, fadeInEnd, fadeOutStart, end],
        [0, 1, 1, 0]
    );

    // Slide up slightly during fade in/out
    const y = useTransform(
        scrollYProgress,
        [start, fadeInEnd, fadeOutStart, end],
        [30, 0, 0, -30]
    );

    // Blur effect for fade in/out
    const blur = useTransform(
        scrollYProgress,
        [start, fadeInEnd, fadeOutStart, end],
        ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)']
    );

    return (
        <motion.span
            style={{ opacity, y, filter: blur }}
            className="absolute font-light text-[56px] md:text-[80px] lg:text-[100px] tracking-tight text-black"
        >
            {word}
        </motion.span>
    );
}
