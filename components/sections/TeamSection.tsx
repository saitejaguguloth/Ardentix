'use client';

import { motion } from 'framer-motion';
import ProfileCard from '../ProfileCard';

const team = [
    {
        name: 'Lavanya Reddy',
        role: 'Co-Founder & Engineering Lead',
        handle: 'lavanyareddy',
        linkedin: 'https://www.linkedin.com/in/lavanya-reddy',
        avatar: '/team/lavanya.png',
    },
    {
        name: 'Ananya Sharma',
        role: 'Co-Founder & Product Lead',
        handle: 'ananyasharma',
        linkedin: 'https://www.linkedin.com/in/ananya-sharma',
        avatar: '/team/ananya.png',
    },
    {
        name: 'Tannishtha Aggarwal',
        role: 'Senior Engineer',
        handle: 'tannishtha',
        linkedin: 'https://www.linkedin.com/in/tannishtha-aggarwal',
        avatar: '/team/tannishtha.png',
    },
    {
        name: 'Zareena Shaik',
        role: 'Design & Frontend Lead',
        handle: 'zareenashaik',
        linkedin: 'https://www.linkedin.com/in/zareena-shaik',
        avatar: '/team/zareena.png',
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-20 text-center"
                style={{ color: '#5227FF' }}
            >
                People Behind Ardentix
            </motion.h2>

            {/* Profile Cards - 4 in a row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 justify-items-center">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <ProfileCard
                            name={member.name}
                            title={member.role}
                            handle={member.handle}
                            status="Team Member"
                            avatarUrl={member.avatar}
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
