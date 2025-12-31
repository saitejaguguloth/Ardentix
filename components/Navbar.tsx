'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
        >
            {/* TOP BRAND BAR - Just the title */}
            <div className="flex items-center justify-center px-8 py-3 rounded-full bg-[#F3F3F3] border border-black/8 backdrop-blur-md">
                <a
                    href="#hero"
                    className="text-[15px] font-semibold tracking-wide text-black hover:opacity-70 transition-opacity"
                >
                    ARDENTIX
                </a>
            </div>
        </motion.header>
    );
}
