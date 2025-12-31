import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                offwhite: '#F2F2F2',
                'offwhite-alt': '#F3F3F3',
                black: '#000000',
                'text-secondary': 'rgba(0,0,0,0.65)',
                'border-subtle': 'rgba(0,0,0,0.08)',
                'cube-purple': '#9b87c7',
                'cube-yellow': '#f4d35e',
                'cube-blue': '#7ba3c7',
                'cube-grey': '#c4c4c4',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': 'clamp(6rem, 20vw, 16rem)',
                'section': 'clamp(2.5rem, 6vw, 5rem)',
                'large': 'clamp(1.5rem, 3vw, 2.5rem)',
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'super-tight': '-0.08em',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
