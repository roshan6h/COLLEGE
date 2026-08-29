"use client";

import React from 'react';
import { Clock, MapPin, Building2, Ticket } from 'lucide-react';
import { ClubEvent, Language } from '../app/data/clubsData';

interface EventCardProps {
    evt: ClubEvent;
    language?: Language;
    onSelectClubById?: (clubId: string) => void;
    onOpenModal: (evt: ClubEvent) => void;
    getCategoryLabel: (cat: string, lang?: Language | string) => string;
    parseSafeDate: (dateStr: string) => { month: string; day: string; dateObj: Date };
}

export const EventCard: React.FC<EventCardProps> = ({
    evt,
    language = 'en',
    onSelectClubById,
    onOpenModal,
    getCategoryLabel,
    parseSafeDate
}) => {
    const { month, day } = parseSafeDate(evt.date);

    return (
        <div className="group bg-[#eef2f7] rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] hover:shadow-[9px_9px_22px_#c8d2e2,-9px_-9px_22px_#ffffff] transition-all flex flex-col justify-between relative h-full">
            <div>
                {/* Top Image Banner with Category & Date Badges */}
                <div
                    onClick={() => onOpenModal(evt)}
                    className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-200 mb-3.5 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] shrink-0 cursor-pointer"
                >
                    <img
                        src={evt.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                        alt={evt.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Category Pill on top-left */}
                    {evt.category && (
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 shadow-sm">
                            {getCategoryLabel(evt.category, language)}
                        </div>
                    )}

                    {/* Date Badge on top-right */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 rounded-xl px-2.5 py-1 text-center min-w-[46px] shadow-md border border-white/80">
                        <span className="block text-[9px] font-extrabold text-[#0c72b8] tracking-widest uppercase leading-none">
                            {month}
                        </span>
                        <span className="block text-sm font-extrabold text-slate-900 leading-tight mt-0.5">
                            {day}
                        </span>
                    </div>
                </div>

                {/* Host Committee Tag */}
                {evt.clubName && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onSelectClubById && evt.clubId) {
                                onSelectClubById(evt.clubId);
                            }
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c72b8] hover:text-[#095285] transition-colors mb-1.5 truncate max-w-full cursor-pointer text-left"
                    >
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{evt.clubName}</span>
                    </button>
                )}

                {/* Title & Description */}
                <div className="space-y-1.5">
                    <h3
                        onClick={() => onOpenModal(evt)}
                        className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0c72b8] transition-colors leading-snug line-clamp-2 font-poppins cursor-pointer"
                    >
                        {evt.title}
                    </h3>

                    {evt.description && (
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                            {evt.description}
                        </p>
                    )}
                </div>

                {/* Key Info: Time & Venue */}
                <div className="space-y-1.5 text-xs text-slate-600 font-medium pt-3 my-3 border-t border-slate-300/40">
                    <div className="flex items-center gap-2 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                        <span className="truncate">{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-[#0c72b8] shrink-0" />
                        <span className="truncate">{evt.venue}</span>
                    </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={() => onOpenModal(evt)}
                        className="w-full py-2.5 px-4 bg-[#eef2f7] hover:bg-white text-slate-800 hover:text-[#0c72b8] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] hover:shadow-[5px_5px_12px_#c8d2e2,-5px_-5px_12px_#ffffff] border border-white/80 cursor-pointer flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
                    >
                        <Ticket className="w-4 h-4 text-[#0c72b8] group-hover/btn:scale-110 transition-transform" />
                        <span>{language === 'en' ? 'View Event Details' : 'कार्यक्रम विवरण हेर्नुहोस्'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
