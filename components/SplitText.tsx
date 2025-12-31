'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: 'chars' | 'words' | 'lines';
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right';
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
    onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    onLetterAnimationComplete
}) => {
    const containerRef = useRef<HTMLElement>(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [isReady, setIsReady] = useState(false);
    const [chars, setChars] = useState<string[]>([]);

    // Keep callback ref updated
    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    // Wait for fonts and prepare characters
    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (document.fonts.status === 'loaded') {
                setIsReady(true);
            } else {
                document.fonts.ready.then(() => {
                    setIsReady(true);
                });
            }
        }
        // Split text into characters
        setChars(text.split(''));
    }, [text]);

    useGSAP(
        () => {
            if (!containerRef.current || !text || !isReady) return;
            if (animationCompletedRef.current) return;

            const el = containerRef.current;
            const charElements = el.querySelectorAll('.split-char');

            if (charElements.length === 0) return;

            // Calculate scroll trigger start position
            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
            const sign =
                marginValue === 0
                    ? ''
                    : marginValue < 0
                        ? `-=${Math.abs(marginValue)}${marginUnit}`
                        : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            // Set initial state
            gsap.set(charElements, { ...from });

            // Animate characters
            gsap.to(charElements, {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                scrollTrigger: {
                    trigger: el,
                    start,
                    once: true,
                    fastScrollEnd: true
                },
                onComplete: () => {
                    animationCompletedRef.current = true;
                    onCompleteRef.current?.();
                },
                willChange: 'transform, opacity',
                force3D: true
            });

            return () => {
                ScrollTrigger.getAll().forEach(st => {
                    if (st.trigger === el) st.kill();
                });
            };
        },
        {
            dependencies: [text, delay, duration, ease, splitType, threshold, rootMargin, isReady],
            scope: containerRef
        }
    );

    const style: React.CSSProperties = {
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        willChange: 'transform, opacity'
    };

    const classes = `split-parent ${className}`;

    const renderContent = () => (
        <>
            {chars.map((char, index) => (
                <span
                    key={index}
                    className="split-char"
                    style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </>
    );

    const renderTag = () => {
        const commonProps = {
            ref: containerRef as React.RefObject<HTMLElement>,
            style,
            className: classes
        };

        switch (tag) {
            case 'h1':
                return <h1 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h1>;
            case 'h2':
                return <h2 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h2>;
            case 'h3':
                return <h3 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h3>;
            case 'h4':
                return <h4 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h4>;
            case 'h5':
                return <h5 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h5>;
            case 'h6':
                return <h6 {...commonProps as React.HTMLAttributes<HTMLHeadingElement>}>{renderContent()}</h6>;
            case 'span':
                return <span {...commonProps as React.HTMLAttributes<HTMLSpanElement>}>{renderContent()}</span>;
            case 'div':
                return <div {...commonProps as React.HTMLAttributes<HTMLDivElement>}>{renderContent()}</div>;
            default:
                return <p {...commonProps as React.HTMLAttributes<HTMLParagraphElement>}>{renderContent()}</p>;
        }
    };

    return renderTag();
};

export default SplitText;
