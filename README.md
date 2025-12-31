# ARDENTIX Website

Modern, editorial-grade website for ARDENTIX built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Prerequisites

- Node.js 18+ and npm

## Installation

Since PowerShell execution policy may be restricted, you have two options:

### Option 1: Manual npm installation (recommended)
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
3. Navigate to the project directory
4. Run: `npm install`

### Option 2: Use Command Prompt
1. Open Command Prompt (cmd.exe)
2. Navigate to the project directory
3. Run: `npm install`

## Running the Development Server

After installing dependencies:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
ardentix/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Floating asymmetric navbar
│   ├── Footer.tsx          # Minimal footer
│   └── sections/
│       ├── HeroSection.tsx
│       ├── IntroSection.tsx
│       ├── WhatWeDoSection.tsx
│       ├── HowWeWorkSection.tsx
│       ├── ProjectsSection.tsx
│       ├── WhoWeWorkWithSection.tsx
│       ├── PrinciplesSection.tsx
│       ├── TeamSection.tsx
│       └── ContactSection.tsx
├── public/
│   └── join_us_illustration_1767160075136.png
└── tailwind.config.ts      # Tailwind configuration
```

## Design System

- **Colors**: Off-white background (#F2F2F2), black text, monochromatic
- **Typography**: Inter font, large editorial-style headings
- **Motion**: Framer Motion with scroll-linked parallax and smooth transitions
- **No shadows, gradients, or colors** - depth from typography, spacing, and motion only

## Features

- Asymmetric floating navbar with scroll behavior
- Hero section with parallax geometric objects
- Editorial typography throughout
- Vertical flip cards for projects
- Scroll-linked animations on all sections
- Team profiles with LinkedIn links
- Contact section with custom illustration
- Fully responsive design
