"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const isVisibleRef = useRef(false);
    const progressRef = useRef(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY || window.pageYOffset || 0;
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const rawProgress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
                    const currentProgress = Math.min(100, Math.max(0, Math.round(rawProgress)));

                    const shouldBeVisible = scrollY > 250;
                    if (shouldBeVisible !== isVisibleRef.current) {
                        isVisibleRef.current = shouldBeVisible;
                        setIsVisible(shouldBeVisible);
                    }

                    if (Math.abs(currentProgress - progressRef.current) >= 1) {
                        progressRef.current = currentProgress;
                        setScrollProgress(currentProgress);
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#000d27] text-white shadow-xl flex items-center justify-center cursor-pointer border border-blue-400/40 hover:border-amber-400 group transform translate-z-0 will-change-transform"
                    aria-label="Scroll to top"
                    title="Scroll to Top"
                >
                    {/* Circular Progress Ring */}
                    <svg className="w-12 h-12 absolute -rotate-90 pointer-events-none" viewBox="0 0 44 44">
                        <circle
                            cx="22"
                            cy="22"
                            r={radius}
                            className="text-white/10"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            fill="transparent"
                        />
                        <circle
                            cx="22"
                            cy="22"
                            r={radius}
                            className="text-amber-400 transition-all duration-100 ease-out"
                            strokeWidth="2.5"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                        />
                    </svg>

                    <ArrowUp className="w-5 h-5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
