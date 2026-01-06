import StaggeredMenu from '@/components/StaggeredMenu';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WhoWeWorkWithSection from '@/components/sections/WhoWeWorkWithSection';
import PrinciplesSection from '@/components/sections/PrinciplesSection';
import CareersSection from '@/components/sections/CareersSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home', link: '#hero' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Work', ariaLabel: 'See our work', link: '#work' },
    { label: 'Careers', ariaLabel: 'Join our team', link: '#careers' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/company/ardentix-tech/posts/?feedView=all' }
];

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#000"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                accentColor="#5227FF"
                isFixed={true}
            />
            <HeroSection />
            <IntroSection />
            <WhatWeDoSection />
            <HowWeWorkSection />
            <ProjectsSection />
            <WhoWeWorkWithSection />
            <PrinciplesSection />
            <CareersSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
