'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface JobRole {
    title: string;
    subtitle: string;
    applyLink: string;
    details: {
        duration: string;
        stipend: string;
        fullTime: string;
        experience: string;
        location: string;
        positions: string;
    };
    about: string[];
    hiringProcess: {
        title: string;
        description: string;
    }[];
    lookingFor: {
        trait: string;
        description: string;
    }[];
}

const jobRoles: JobRole[] = [
    {
        title: 'Full Stack Developer Intern',
        subtitle: 'Full Stack | Web | App',
        applyLink: 'https://forms.gle/R3NbupZwjQEDTbig8',
        details: {
            duration: '3–6 Months',
            stipend: 'Unpaid, with performance-based incentives',
            fullTime: 'Performance-based PPO opportunity',
            experience: 'React / Next.js / Node.js / APIs / Databases (AI exposure is a plus)',
            location: 'Remote',
            positions: 'Multiple',
        },
        about: [
            "We're building practical software that actually runs in the real world.",
            'No bloated processes. No fake innovation decks.',
            'Just fast execution, real products, and a team that enjoys building.',
            "At Ardentix, interns don't sit idle. You ship features, learn by doing, and grow by solving real problems.",
        ],
        hiringProcess: [
            {
                title: 'Initial Screening',
                description: "A short conversation to understand your background, interests, and goals. We'll also walk you through what Ardentix is building and what you'll actually work on.",
            },
            {
                title: 'Technical Round',
                description: "Practical problem-solving and basic system thinking. A hands-on coding discussion based on real-world scenarios. You're encouraged to think openly and use tools the way you normally would.",
            },
            {
                title: 'Final Discussion',
                description: 'A culture and mindset check. No trick questions. Just clarity on expectations and fit.',
            },
        ],
        lookingFor: [
            {
                trait: 'Builders',
                description: "You've tried to build something. Projects, experiments, freelance work, or learning by breaking things. Show effort, not perfection.",
            },
            {
                trait: 'Curious',
                description: "You like understanding how things work and aren't scared of new tech or messy problems.",
            },
            {
                trait: 'Resourceful',
                description: "You don't freeze when things aren't clearly defined. You explore, adapt, and figure it out.",
            },
            {
                trait: 'Genuinely Interested',
                description: 'Not here for a line on a resume. You actually want to learn and contribute.',
            },
        ],
    },
    {
        title: 'AI / ML Engineer Intern',
        subtitle: 'Machine Learning | Data Analysis | Model Training',
        applyLink: 'https://forms.gle/R3NbupZwjQEDTbig8',
        details: {
            duration: '3–6 Months',
            stipend: 'Unpaid, with performance-based incentives',
            fullTime: 'Performance-based PPO opportunity',
            experience: 'Python | Machine Learning | Data Analysis | Model Training (LLMs / NLP / CV exposure is a plus)',
            location: 'Remote',
            positions: 'Multiple',
        },
        about: [
            'We build AI that actually does something useful.',
            'Not demos. Not buzzwords. Not pitch-deck models.',
            'At Ardentix, AI interns work on real problems, real data, and real systems.',
            "You'll experiment, break things, improve models, and learn how AI is actually used in production.",
        ],
        hiringProcess: [
            {
                title: 'Initial Screening',
                description: "A short conversation to understand your background, interests, and motivation for AI/ML. We'll also explain what kind of problems you'll be working on.",
            },
            {
                title: 'Technical Round',
                description: "Core ML concepts and problem-solving discussion. A practical task or case based on real-world AI scenarios. You're encouraged to think openly and use tools the way you normally would.",
            },
            {
                title: 'Final Discussion',
                description: 'A culture and mindset check. We care about curiosity, learning speed, and ownership more than perfect answers.',
            },
        ],
        lookingFor: [
            {
                trait: 'Experimenters',
                description: 'You like testing ideas, tweaking models, and learning from results. Accuracy matters, but learning matters more.',
            },
            {
                trait: 'Curious',
                description: 'You ask why a model behaves the way it does and actually try to find out.',
            },
            {
                trait: 'Resourceful',
                description: 'You can work with imperfect data, unclear requirements, and evolving problems without panicking.',
            },
            {
                trait: 'Genuinely Interested',
                description: "You're here to learn AI by building, not just to collect certificates.",
            },
        ],
    },
    {
        title: 'UI/UX Designer Intern',
        subtitle: 'User Interface | User Experience | Visual Design',
        applyLink: 'https://forms.gle/R3NbupZwjQEDTbig8',
        details: {
            duration: '3–6 Months',
            stipend: 'Unpaid, with performance-based incentives',
            fullTime: 'Performance-based PPO opportunity',
            experience: 'Figma / Adobe XD / Sketch | Prototyping | User Research (Motion design is a plus)',
            location: 'Remote',
            positions: 'Multiple',
        },
        about: [
            'We design products that people actually want to use.',
            'No generic templates. No design-by-committee.',
            'At Ardentix, design is about solving real problems with clarity and intention.',
            "You'll work on live products, get real feedback, and see your designs ship.",
        ],
        hiringProcess: [
            {
                title: 'Initial Screening',
                description: "A short conversation to understand your design background, style, and interests. We'll walk you through the kind of products you'll be designing.",
            },
            {
                title: 'Design Challenge',
                description: "A practical design task based on real scenarios. We want to see your process, not just the final output. Think aloud, iterate, and show us how you solve problems.",
            },
            {
                title: 'Final Discussion',
                description: 'A culture and mindset check. We value taste, attention to detail, and willingness to iterate based on feedback.',
            },
        ],
        lookingFor: [
            {
                trait: 'Detail-Oriented',
                description: 'You notice the small things that make a big difference. Spacing, alignment, consistency—it all matters to you.',
            },
            {
                trait: 'Curious',
                description: "You're interested in why designs work, not just how they look. You explore patterns and understand user behavior.",
            },
            {
                trait: 'Iterative',
                description: "You don't settle on the first idea. You explore, refine, and improve based on feedback and constraints.",
            },
            {
                trait: 'Genuinely Interested',
                description: 'You care about craft and want to build beautiful, functional products—not just add to your portfolio.',
            },
        ],
    },
];

function JobCard({ job, index }: { job: JobRole; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            {/* Header */}
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2" style={{ color: '#5227FF' }}>
                            {job.title}
                        </h3>
                        <p className="text-sm text-black/60 font-medium">{job.subtitle}</p>
                    </div>
                    <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:text-white shrink-0"
                        style={{ background: '#5227FF' }}
                    >
                        Apply Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </a>
                </div>

                {/* Quick details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Duration</span>
                        <span className="text-sm font-medium text-black/80">{job.details.duration}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Location</span>
                        <span className="text-sm font-medium text-black/80">{job.details.location}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Positions</span>
                        <span className="text-sm font-medium text-black/80">{job.details.positions}</span>
                    </div>
                </div>

                {/* Expand/Collapse button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
                    style={{ color: '#5227FF' }}
                >
                    {isExpanded ? 'Show Less' : 'View Full Details'}
                    <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                </button>
            </div>

            {/* Expandable content */}
            <motion.div
                initial={false}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <div className="px-6 md:px-8 pb-8 border-t border-black/5 pt-6">
                    {/* Additional details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Stipend</span>
                            <span className="text-sm text-black/70">{job.details.stipend}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Full-time</span>
                            <span className="text-sm text-black/70">{job.details.fullTime}</span>
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                            <span className="text-xs font-medium text-black/40 uppercase tracking-wider">Experience</span>
                            <span className="text-sm text-black/70">{job.details.experience}</span>
                        </div>
                    </div>

                    {/* About Ardentix */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3 text-black">About Ardentix</h4>
                        <div className="space-y-2">
                            {job.about.map((line, i) => (
                                <p key={i} className="text-sm text-black/70 leading-relaxed">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Hiring Process */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 text-black">Our Hiring Process</h4>
                        <div className="space-y-4">
                            {job.hiringProcess.map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div
                                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                                        style={{ background: '#5227FF' }}
                                    >
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-black mb-1">{step.title}</h5>
                                        <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* We're Looking For */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-black">We&apos;re Looking For People Who Are</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {job.lookingFor.map((item, i) => (
                                <div key={i} className="p-4 rounded-xl bg-black/[0.02] border border-black/5">
                                    <h5 className="font-medium mb-1" style={{ color: '#5227FF' }}>
                                        {item.trait}
                                    </h5>
                                    <p className="text-sm text-black/60 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CareersSection() {
    return (
        <section id="careers" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-center"
                style={{ color: '#5227FF' }}
            >
                Join Our Team
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center text-lg text-black/60 mb-16 max-w-2xl mx-auto"
            >
                We&apos;re looking for passionate individuals who want to build real products and grow with us.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {jobRoles.map((job, index) => (
                    <JobCard key={job.title} job={job} index={index} />
                ))}
            </div>
        </section>
    );
}
