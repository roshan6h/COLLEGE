"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import { Club, Language } from '../app/data/clubsData';

export const DEFAULT_CLUB_SAMPLE: Club = {
    id: 'abit-club',
    name: 'ABIT Club',
    nepaliName: 'एबीआईटी क्लब',
    category: 'Technology & IT',
    logo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop',
    accentColor: '#0c72b8',
    description: 'Fostering tech innovation and programming skills.',
    shortDescription: 'Fostering tech innovation and programming skills.',
    establishedYear: 2018,
    memberCount: 120,
    facultyAdvisor: 'Er. Suresh Pokharel',
    president: 'Aayush Adhikari',
    meetingSchedule: 'Fridays at 4 PM',
    roomLocation: 'IT Lab 2',
    contactEmail: 'abit@abcampus.edu.np',
    featured: true,
    leadership: [],
    achievements: [],
    galleryImages: []
};

interface ClubCardProps {
    club?: Club;
    onSelect?: (club: Club) => void;
    onJoin?: (clubId: string) => void;
    language?: Language;
}

export const ClubCard: React.FC<ClubCardProps> = ({
    club = DEFAULT_CLUB_SAMPLE,
    onSelect = (_club: Club) => { },
    language = 'en'
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.8 }}
            onClick={() => onSelect(club)}
            className="group bg-[#eef2f7] neu-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer h-full border border-white/60 select-none"
        >
            <div>
                {/* Category Badge & Optional Featured Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-[#0c72b8] neu-pressed px-3 py-1 rounded-full uppercase tracking-wider truncate max-w-[70%]">
                        {club.category}
                    </span>
                    {club.featured && (
                        <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                            className="neu-pressed text-[#0c72b8] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0"
                        >
                            <Sparkles className="w-3 h-3 text-[#0c72b8]" />
                            <span>{language === 'en' ? 'Featured' : 'विशेष'}</span>
                        </motion.span>
                    )}
                </div>

                {/* Logo Avatar & Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                    <motion.div
                        whileHover={{
                            rotate: [0, -6, 6, -3, 0],
                            scale: 1.08,
                            transition: {
                                rotate: { duration: 0.5, ease: "easeInOut" },
                                scale: { type: "spring", stiffness: 350, damping: 12 }
                            }
                        }}
                        className="w-14 h-14 rounded-full neu-pressed flex items-center justify-center overflow-hidden p-1 shrink-0"
                    >
                        <img
                            src={club.logo}
                            alt={club.name}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0c72b8] transition-colors leading-snug truncate">
                            {language === 'np' && club.nepaliName ? club.nepaliName : club.name}
                        </h3>
                        {club.nepaliName && language === 'en' && (
                            <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                                {club.nepaliName}
                            </p>
                        )}
                    </div>
                </div>

                {/* Short Description - Crisp 2 lines */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2 mb-4">
                    {club.shortDescription || club.description}
                </p>
            </div>

            <div>
                {/* Footer Meta Row: Members & Leader */}
                <div className="pt-3 border-t border-slate-300/40 mb-4 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Users className="w-3.5 h-3.5 text-[#0c72b8]" />
                        <span>{club.memberCount}+ {language === 'en' ? 'Members' : 'सदस्य'}</span>
                    </div>

                    <div className="text-right truncate max-w-[50%]">
                        <span className="text-slate-500">
                            {language === 'en' ? 'Lead: ' : 'प्रमुख: '}
                        </span>
                        <span className="font-semibold text-slate-800 truncate">
                            {club.president}
                        </span>
                    </div>
                </div>

                {/* Primary Action Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 450, damping: 20 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(club);
                    }}
                    className="w-full py-2.5 px-4 neu-button-primary text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                    <span>{language === 'en' ? 'View Committee' : 'समिति हेर्नुहोस्'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
};
