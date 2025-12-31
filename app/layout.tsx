import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const anton = Anton({
    subsets: ["latin"],
    variable: '--font-display',
    weight: ['400'],
});

export const metadata: Metadata = {
    title: "ARDENTIX | Building Scalable Software",
    description: "ARDENTIX is a software company that builds and supplies scalable SaaS tools for modern teams.",
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${anton.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
