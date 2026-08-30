"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    MoveHorizontal,
    Phone,
    Crown,
    Calendar,
    Trophy,
    ZoomIn
} from 'lucide-react';
import { Club, ClubEvent, LeadershipMember, Language } from '../app/data/clubsData';
import { ClubCard } from './ClubCard';
import { EventCard } from './EventCard';

// ==========================================
// 1. REUSABLE GENERIC CAROUSEL SHELL
// ==========================================

export interface MobileSwipeCarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    getItemKey?: (item: T, index: number) => string | number;
    language?: Language | string;
    accentColor?: string; // e.g. '#0c72b8' or 'red-600'
    cardWidthClass?: string; // default: 'w-[84vw] max-w-[320px]'
    ariaLabelPrefix?: string;
}

export function MobileSwipeCarousel<T>({
    items,
    renderItem,
    getItemKey = (_, idx) => idx,
    language = 'en',
    accentColor = '#0c72b8',
    cardWidthClass = 'w-[84vw] max-w-[320px]',
    ariaLabelPrefix = 'slide'
}: MobileSwipeCarouselProps<T>) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = useCallback(() => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstElementChild
            ? (container.firstElementChild as HTMLElement).offsetWidth + 16
            : 280;

        const newIndex = Math.round(scrollLeft / cardWidth);
        const clampedIndex = Math.max(0, Math.min(newIndex, items.length - 1));
        setActiveIndex(clampedIndex);

        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }, [items.length]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        updateScrollState();
        container.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);

        return () => {
            container.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState]);

    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const targetCard = container.children[index] as HTMLElement;
        if (targetCard) {
            targetCard.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            scrollToIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < items.length - 1) {
            scrollToIndex(activeIndex + 1);
        }
    };

    if (!items || items.length === 0) return null;

    return (
        <div className="relative w-full">
            {/* Helper Indicator & Item Counter */}
            <div className="flex items-center justify-between px-1 mb-3 text-xs text-slate-500">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200/60 font-medium text-slate-600">
                    <MoveHorizontal
                        className="w-3.5 h-3.5 animate-pulse"
                        style={{ color: accentColor }}
                    />
                    <span>
                        {language === 'en' ? 'Swipe left / right' : 'दायाँ-बायाँ स्वाइप गर्नुहोस्'}
                    </span>
                </div>

                <span className="font-semibold text-slate-600 bg-white/80 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    {activeIndex + 1} / {items.length}
                </span>
            </div>

            {/* Horizontal Scroll Track */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 -mx-4 scrollbar-none overscroll-x-contain [touch-action:pan-y_pan-x]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                {items.map((item, idx) => (
                    <div
                        key={getItemKey(item, idx)}
                        className={`${cardWidthClass} shrink-0 snap-center transition-opacity duration-300 flex flex-col`}
                    >
                        {renderItem(item, idx)}
                    </div>
                ))}
            </div>

            {/* Navigation Indicators & Prev/Next buttons */}
            <div className="flex items-center justify-between mt-2 px-1">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={!canScrollLeft}
                    aria-label={`Previous ${ariaLabelPrefix}`}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        canScrollLeft
                            ? 'bg-white text-slate-700 shadow-xs border-slate-200 active:scale-95 cursor-pointer'
                            : 'bg-slate-100 text-slate-300 border-transparent opacity-40 cursor-not-allowed'
                    }`}
                >
                    <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Dot Pagination */}
                <div className="flex items-center gap-1.5 justify-center flex-wrap max-w-[65%] py-1">
                    {items.map((item, idx) => (
                        <button
                            key={`dot-${getItemKey(item, idx)}`}
                            type="button"
                            onClick={() => scrollToIndex(idx)}
                            aria-label={`Go to ${ariaLabelPrefix} ${idx + 1}`}
                            className={`rounded-full transition-all duration-300 cursor-pointer ${
                                activeIndex === idx
                                    ? 'w-5 sm:w-6 h-1.5 sm:h-2'
                                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                            style={activeIndex === idx ? { backgroundColor: accentColor } : undefined}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canScrollRight}
                    aria-label={`Next ${ariaLabelPrefix}`}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        canScrollRight
                            ? 'bg-white text-slate-700 shadow-xs border-slate-200 active:scale-95 cursor-pointer'
                            : 'bg-slate-100 text-slate-300 border-transparent opacity-40 cursor-not-allowed'
                    }`}
                >
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
            </div>
        </div>
    );
}

// ==========================================
// 2. MOBILE CLUB CAROUSEL
// ==========================================

export interface MobileClubCarouselProps {
    clubs: Club[];
    onSelectClub: (club: Club) => void;
    language: Language;
}

export const MobileClubCarousel: React.FC<MobileClubCarouselProps> = ({
    clubs,
    onSelectClub,
    language
}) => {
    return (
        <MobileSwipeCarousel<Club>
            items={clubs}
            language={language}
            accentColor="#0c72b8"
            ariaLabelPrefix="club card"
            getItemKey={(club) => club.id}
            renderItem={(club) => (
                <ClubCard
                    club={club}
                    onSelect={onSelectClub}
                    language={language}
                />
            )}
        />
    );
};

// ==========================================
// 3. MOBILE EVENTS CAROUSEL
// ==========================================

export interface MobileEventsCarouselProps {
    events: ClubEvent[];
    language?: Language;
    onSelectClubById?: (clubId: string) => void;
    onOpenModal: (evt: ClubEvent) => void;
    getCategoryLabel: (cat: string, lang?: Language | string) => string;
    parseSafeDate: (dateStr: string) => { month: string; day: string; dateObj: Date };
}

export const MobileEventsCarousel: React.FC<MobileEventsCarouselProps> = ({
    events,
    language = 'en',
    onSelectClubById,
    onOpenModal,
    getCategoryLabel,
    parseSafeDate
}) => {
    return (
        <MobileSwipeCarousel<ClubEvent>
            items={events}
            language={language}
            accentColor="#0c72b8"
            ariaLabelPrefix="event card"
            getItemKey={(evt, idx) => evt.id || `event-${idx}`}
            renderItem={(evt) => (
                <EventCard
                    evt={evt}
                    language={language}
                    onSelectClubById={onSelectClubById}
                    onOpenModal={onOpenModal}
                    getCategoryLabel={getCategoryLabel}
                    parseSafeDate={parseSafeDate}
                />
            )}
        />
    );
};

// ==========================================
// 4. MOBILE MEMBERS / LEADERSHIP CAROUSEL
// ==========================================

export interface MobileMembersCarouselProps {
    members: LeadershipMember[];
    language?: Language;
    clubName?: string;
}

export const MobileMembersCarousel: React.FC<MobileMembersCarouselProps> = ({
    members,
    language = 'en',
    clubName = 'Club'
}) => {
    return (
        <MobileSwipeCarousel<LeadershipMember>
            items={members}
            language={language}
            accentColor="#0c72b8"
            ariaLabelPrefix="member card"
            getItemKey={(member, idx) => member.id || `member-${idx}`}
            renderItem={(member) => {
                const roleLower = (member.role || '').toLowerCase();
                const isPresident = roleLower.includes('president') && !roleLower.includes('vice');
                const isVicePresident = roleLower.includes('vice') && roleLower.includes('president');
                const isAdvisor = roleLower.includes('advisor') || roleLower.includes('patron') || roleLower.includes('faculty');
                const isSecretary = roleLower.includes('secretary');
                const isTreasurer = roleLower.includes('treasurer');

                let badgeBg = 'bg-[#eef2f7] text-[#0c72b8]';
                if (isPresident) badgeBg = 'bg-amber-100 text-amber-900 border-amber-300';
                else if (isVicePresident) badgeBg = 'bg-blue-100 text-blue-900 border-blue-300';
                else if (isAdvisor) badgeBg = 'bg-rose-100 text-rose-900 border-rose-300';
                else if (isSecretary) badgeBg = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                else if (isTreasurer) badgeBg = 'bg-purple-100 text-purple-900 border-purple-300';

                const initials = (member.name || 'Member')
                    .split(' ')
                    .filter(Boolean)
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase();

                return (
                    <div className="bg-[#eef2f7] rounded-3xl p-5 flex flex-col justify-between shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] border border-white/80 h-full">
                        <div>
                            <div className="flex items-center gap-3.5 mb-4">
                                <div className="w-14 h-14 rounded-full bg-[#eef2f7] p-1 flex items-center justify-center shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff] border border-white/90 shrink-0 overflow-hidden">
                                    {member.avatarUrl ? (
                                        <img
                                            src={member.avatarUrl}
                                            alt={member.name || 'Leadership Member'}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full rounded-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                                const fallbackEl = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                                                if (fallbackEl) fallbackEl.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className={`w-full h-full rounded-full flex items-center justify-center font-bold text-sm text-[#0c72b8] bg-blue-50 ${member.avatarUrl ? 'hidden' : 'flex'}`}
                                    >
                                        {initials}
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff] border border-white/80 ${badgeBg}`}>
                                            {member.role || 'Executive Member'}
                                        </span>
                                        {isPresident && (
                                            <span className="text-[10px] bg-amber-500 text-white font-black px-1.5 py-0.2 rounded-full inline-flex items-center gap-0.5 shadow-2xs">
                                                <Crown className="w-2.5 h-2.5 inline" /> Lead
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 mt-1 truncate" title={member.name || 'Executive Member'}>
                                        {member.name || 'Executive Member'}
                                    </h4>
                                    <p className="text-xs text-slate-500 truncate" title={member.department || clubName}>
                                        {member.department || 'Executive Committee'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-slate-300/40 space-y-2">
                            {member.phone ? (
                                <a
                                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                    className="w-full flex items-center justify-between px-3 py-2 bg-white/80 active:bg-white text-slate-700 active:text-[#0c72b8] rounded-xl text-xs font-bold transition-all border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] cursor-pointer"
                                    title={`Call ${member.name} (${member.phone})`}
                                >
                                    <div className="flex items-center gap-2 truncate">
                                        <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Phone className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="font-semibold text-slate-800 truncate">
                                            {member.phone}
                                        </span>
                                    </div>
                                    <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded-full shrink-0 ml-1">
                                        Call
                                    </span>
                                </a>
                            ) : (
                                <div className="flex items-center gap-2 text-xs text-slate-400 py-1 px-1">
                                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                                    <span>Direct line via Campus Desk</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }}
        />
    );
};

// ==========================================
// 5. MOBILE ACHIEVEMENTS CAROUSEL
// ==========================================

export interface AchievementCardItem {
    id?: string;
    title: string;
    description?: string;
    date?: string;
    badge?: string;
    image?: string;
    category?: string;
    organizer?: string;
    highlights?: string[];
}

export interface MobileAchievementsCarouselProps<T extends AchievementCardItem = AchievementCardItem> {
    achievements: T[];
    language?: Language | string;
    onSelectAchievement: (ach: T) => void;
    getContextualAchievementImage: (title: string, idx: number, category?: string) => string;
    clubCategory?: string;
    extractYear: (dateStr?: string, fallbackIdx?: number) => string;
}

export function MobileAchievementsCarousel<T extends AchievementCardItem = AchievementCardItem>({
    achievements,
    language = 'en',
    onSelectAchievement,
    getContextualAchievementImage,
    clubCategory = '',
    extractYear
}: MobileAchievementsCarouselProps<T>) {
    return (
        <MobileSwipeCarousel<T>
            items={achievements}
            language={language}
            accentColor="#0c72b8"
            ariaLabelPrefix="achievement card"
            getItemKey={(ach, idx) => ach.id || `ach-${idx}`}
            renderItem={(ach, idx) => {
                const year = extractYear(ach.date, idx);
                const categoryTag = ach.category || (idx === 0 ? 'Hackathon & Innovation' : idx === 1 ? 'Technical Training' : idx === 2 ? 'Campus Impact' : 'Academic Milestone');
                const awardBadge = ach.badge || (idx === 0 ? 'Major Milestone' : idx === 1 ? 'Capacity Building' : idx === 2 ? 'Institutional Impact' : 'Excellence Award');
                const fallbackImg = getContextualAchievementImage(ach.title, idx, clubCategory);

                return (
                    <div
                        onClick={() => onSelectAchievement(ach)}
                        className="group bg-[#eef2f7] rounded-3xl p-4.5 border border-white/90 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] active:shadow-[3px_3px_8px_#c8d2e2,-3px_-3px_8px_#ffffff] transition-all flex flex-col justify-between cursor-pointer relative overflow-hidden text-left h-full"
                    >
                        <div className="space-y-3">
                            {/* Media Viewport */}
                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-200 shadow-[inset_1.5px_1.5px_3px_#d1d9e6,inset_-1.5px_-1.5px_3px_#ffffff]">
                                <img
                                    src={ach.image || fallbackImg}
                                    alt={ach.title}
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                        e.currentTarget.src = fallbackImg;
                                    }}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                                {/* Top Date Pill */}
                                <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 bg-white/95 backdrop-blur-md shadow-xs flex items-center gap-1 border border-white/80">
                                        <Calendar className="w-3 h-3 text-[#0c72b8]" />
                                        <span>{year}</span>
                                    </span>
                                </div>

                                {/* Top Category Pill */}
                                <div className="absolute top-2.5 right-2.5">
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#0c72b8] bg-white/95 backdrop-blur-md shadow-xs border border-white/80 truncate max-w-[130px]">
                                        {categoryTag}
                                    </span>
                                </div>

                                {/* Quick View Trigger */}
                                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                                    <ZoomIn className="w-3 h-3" />
                                    <span>View</span>
                                </div>
                            </div>

                            {/* Headline & Description */}
                            <div className="space-y-1.5 pt-0.5">
                                <h4 className="text-sm font-bold text-slate-900 font-poppins leading-snug group-hover:text-[#0c72b8] transition-colors line-clamp-2">
                                    {ach.title}
                                </h4>
                                {ach.description && (
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                                        {ach.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Bottom Meta */}
                        <div className="pt-3 mt-3 border-t border-slate-300/40 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-50/90 px-2.5 py-1 rounded-xl border border-amber-200/60 truncate min-w-0">
                                <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span className="truncate">{awardBadge}</span>
                            </div>

                            <span className="text-xs text-[#0c72b8] font-bold flex items-center gap-0.5 shrink-0">
                                <span>Details →</span>
                            </span>
                        </div>
                    </div>
                );
            }}
        />
    );
};
