'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#intro' },
    { label: 'Contact', href: '#contact' },
];

export default function BottomNav() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'intro', 'services', 'work', 'team', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
            {/* BOTTOM STICKY NAV BAR */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#2E2E2E] border border-white/10 backdrop-blur-md">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${activeSection === item.href.slice(1)
                                ? 'bg-white text-black'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
