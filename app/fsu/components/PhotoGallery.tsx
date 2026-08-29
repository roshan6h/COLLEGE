import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
    Images,
    Expand,
    X,
    ChevronDown,
    ChevronUp,
    Search,
    ChevronLeft,
    ChevronRight,
    Share2,
    Heart,
    ExternalLink,
    ZoomIn,
    MoreHorizontal,
    Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface GalleryImage {
    id: string;
    titleEn: string;
    titleNp: string;
    category: "Protest" | "Campaign" | "Interaction" | "Sports" | "Academic" | "Solidarity" | "Tribute" | "Social Service" | string;
    descriptionEn: string;
    descriptionNp: string;
    placeholderBg: string;
    imageUrl?: string;
    aspectRatio?: "portrait" | "landscape" | "square" | "tall";
}

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: "g1",
        titleEn: "In Solidarity with INISHA BK",
        titleNp: "इनिसा विकको न्यायको लागि ऐक्यवद्धता र्याली",
        category: "Solidarity",
        descriptionEn: "Justice for Inisha BK Solidarity Rally - unified student march demanding safety and student protection at Aadikavi Campus.",
        descriptionNp: "इनिसा विकको तत्काल न्यायका लागि क्याम्पस गेट बाहिर आयोजित वृहत दीप प्रज्वलन र शान्तिपूर्ण ऐक्यवद्धता प्रदर्शन।",
        placeholderBg: "from-red-900 to-slate-950",
        imageUrl: "../fsu/img12.webp"
    },
    {
        id: "g2",
        titleEn: "Awareness Campaign",
        titleNp: "क्याम्पस सचेतना कार्यक्रम",
        category: "Interaction",
        descriptionEn: "Standing in solidarity during campus awareness and leadership workshops, encouraging participation.",
        descriptionNp: "विद्यार्थी सचेतना तथा व्यावहारिक नेतृत्व विकास कार्यक्रमको एक सुखद क्षण।",
        placeholderBg: "from-blue-900 to-indigo-950",
        imageUrl: "../fsu/img4.webp"
    },
    {
        id: "g3",
        titleEn: "Official Jersey Launch",
        titleNp: "आधिकारिक फुटबल जर्सी अनावरण",
        category: "Sports",
        descriptionEn: "Supporting Sports: President Anup Ale Magar presenting the official team jerseys to our campus players.",
        descriptionNp: "खेलकुद प्रवर्द्धन: स्ववियु अध्यक्ष अनुप आले मगरद्वारा क्याम्पस फुटबल टोलीलाई नयाँ जर्सी हस्तान्तरण।",
        placeholderBg: "from-rose-700 to-slate-900",
        imageUrl: "../fsu/imag.webp"
    },
    {
        id: "g4",
        titleEn: "Promoting Student Athletics",
        titleNp: "खेलकुद विकास तथा सामग्री",
        category: "Sports",
        descriptionEn: "Promoting Student Athletics: Union members with the new campus sports kits preparing for the league.",
        descriptionNp: "खेलाडीहरू र स्ववियु पदाधिकारीहरू नयाँ फुटबल जर्सी तथा खेलकुद सामग्रीका साथ एकीकृत।",
        placeholderBg: "from-blue-800 to-red-800",
        imageUrl: "../fsu/sp2.webp"
    },
    {
        id: "g5",
        titleEn: "Academic Guidance",
        titleNp: "शैक्षिक सहजीकरण र सहयोग",
        category: "Academic",
        descriptionEn: "Academic Support: Facilitating student resources and college administrative assistance.",
        descriptionNp: "विद्यार्थीहरूलाई शैक्षिक सामग्री वितरण र फारम दर्ता प्रक्रियामा सहजीकरण।",
        placeholderBg: "from-teal-800 to-slate-900",
        imageUrl: "../fsu/img11.webp"
    },
    {
        id: "g6",
        titleEn: "Advocating for Student Rights",
        titleNp: "प्रशासन समक्ष ज्ञापन पत्र पेस",
        category: "Campaign",
        descriptionEn: "Advocating for Student Rights: Submitting official memorandums and 15-point charter to the campus administration.",
        descriptionNp: "विद्यार्थी हकहित र शैक्षिक सुधारका विषय समेटिएको ज्ञापन पत्र क्याम्पस प्रशासनलाई बुझाउँदै स्ववियु प्रतिनिधि।",
        placeholderBg: "from-slate-800 to-sky-950",
        imageUrl: "../fsu/img6.webp"
    },
    {
        id: "g7",
        titleEn: "Union Proposals Submission",
        titleNp: "विद्यार्थी प्रस्ताव दर्ता",
        category: "Campaign",
        descriptionEn: "Strengthening Communication: Official handover of student union proposals for library digitalization.",
        descriptionNp: "सुदृढ संचार तथा डिजिटल पुस्तकालय सम्बन्धी प्रस्तावहरू आधिकारिक रूपमा दर्ता गरिँदै।",
        placeholderBg: "from-emerald-800 to-slate-900",
        imageUrl: "../fsu/imgee.webp"
    },
    {
        id: "g8",
        titleEn: "Annual Student Gathering",
        titleNp: "स्ववियु वार्षिक भेला तथा स्वागत",
        category: "Solidarity",
        descriptionEn: "FSU Annual Gathering: Celebrating student unity, academic excellence, and progressive leadership.",
        descriptionNp: "स्ववियु वार्षिक भेलामा विद्यार्थी एकता, सहभागिता र लोकतान्त्रिक प्रतिबद्धता प्रदर्शन।",
        placeholderBg: "from-amber-800 to-indigo-950",
        imageUrl: "../fsu/img8.webp"
    },
    {
        id: "g9",
        titleEn: "Inclusive Leadership Desk",
        titleNp: "स्ववियु अध्यक्ष र सरोकारवाला छलफल",
        category: "Interaction",
        descriptionEn: "Inclusive Leadership: Engaging directly with students, faculty, and delegates at the Union office.",
        descriptionNp: "समावेशी नेतृत्व: स्ववियु कार्यालयमा विद्यार्थी र प्राध्यापकहरूसँग निरन्तर संवाद तथा सर-सल्लाह।",
        placeholderBg: "from-blue-900 to-neutral-900",
        imageUrl: "../fsu/img10.webp"
    },
    {
        id: "g10",
        titleEn: "Mourning Session for Inisha BK",
        titleNp: "इनिशा बिकको सम्झनामा श्रद्धाञ्जली सभा",
        category: "Tribute",
        descriptionEn: "A heartfelt mourning session organized by the Free Students' Union to pay tribute to the late Inisha BK. Students, teachers, and staff gathered to offer condolences, observe a moment of silence, and honor her memory.",
        descriptionNp: "स्वर्गीय इनिशा बिकको सम्झनामा स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित श्रद्धाञ्जली सभामा विद्यार्थी, शिक्षक तथा कर्मचारीहरूको सहभागिता। दिवंगत आत्माप्रति श्रद्धाञ्जली अर्पण गर्दै मौनधारण गरिएको क्षण।",
        placeholderBg: "from-slate-800 to-gray-900",
        imageUrl: "../fsu/img5.webp"
    },
    {
        id: "g11",
        titleEn: "Donation Campaign",
        titleNp: "दान अभियान",
        category: "Social Service",
        descriptionEn: "A donation campaign organized by the Free Students' Union to support individuals and families in need. Students, teachers, and well-wishers came together to contribute generously, promoting the values of compassion, unity, and social responsibility.",
        descriptionNp: "आवश्यकतामा परेका व्यक्ति तथा परिवारहरूको सहयोगका लागि स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित दान अभियान। विद्यार्थी, शिक्षक तथा शुभेच्छुकहरूको सक्रिय सहभागिताले सहयोग, एकता र सामाजिक उत्तरदायित्वको भावना झल्काएको कार्यक्रम।",
        placeholderBg: "from-blue-950 to-slate-900",
        imageUrl: "../fsu/img7.webp"
    },
    {
        id: "g12",
        titleEn: "Extracurricular Athletics",
        titleNp: "अतिरिक्त खेलकुद गतिविधि",
        category: "Sports",
        descriptionEn: "Fostering Teamwork: Supporting dynamic campus sports leagues and extracurricular participation.",
        descriptionNp: "क्याम्पसमा अतिरिक्त क्रियाकलाप र खेलकुद सहभागिताको विकासका लागि खेल आयोजना।",
        placeholderBg: "from-red-700 to-indigo-950",
        imageUrl: "../fsu/sp3.webp"
    }
];

interface PhotoGalleryProps {
    language: "en" | "np";
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
    const [toastMessage, setToastMessage] = useState<string>("");

    const categories = ["all", "Protest", "Sports", "Solidarity", "Campaign", "Interaction"];
    const INITIAL_LIMIT = 8;

    const filteredImages = useMemo(() => {
        return GALLERY_IMAGES.filter((img) => {
            const matchesCategory =
                activeCategory === "all" || img.category.toLowerCase() === activeCategory.toLowerCase();
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !q ||
                img.titleEn.toLowerCase().includes(q) ||
                img.titleNp.toLowerCase().includes(q) ||
                img.descriptionEn.toLowerCase().includes(q) ||
                img.descriptionNp.toLowerCase().includes(q) ||
                img.category.toLowerCase().includes(q);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const displayedImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_LIMIT);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setShowAll(false);
    };

    const getCategoryCount = (cat: string) => {
        if (cat === "all") return GALLERY_IMAGES.length;
        return GALLERY_IMAGES.filter((img) => img.category.toLowerCase() === cat.toLowerCase()).length;
    };

    const toggleLike = (id: string, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setLikedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const handleShare = (img: GalleryImage, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: language === "en" ? img.titleEn : img.titleNp,
                text: language === "en" ? img.descriptionEn : img.descriptionNp,
                url: window.location.href
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
            setToastMessage(language === "en" ? "Link copied to clipboard!" : "लिङ्क क्लिपबोर्डमा कपी भयो!");
            setTimeout(() => setToastMessage(""), 2500);
        }
    };

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") {
                setSelectedIndex(null);
            } else if (e.key === "ArrowRight") {
                setSelectedIndex((prev) => (prev !== null && prev < displayedImages.length - 1 ? prev + 1 : 0));
            } else if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayedImages.length - 1));
            }
        },
        [selectedIndex, displayedImages.length]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const currentLightboxImg = selectedIndex !== null ? displayedImages[selectedIndex] : null;

    return (
        <section id="gallery" className="py-6 w-full scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                {/* Header with Title and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6 w-full min-w-0 max-w-full">
                    <div className="min-w-0 max-w-full">
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#b91c1c] mb-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{language === "en" ? "Visual Pins & Moments" : "तस्वीर तथा मिडिया ग्यालेरी"}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-devanagari tracking-tight">
                            {language === "en" ? "FSU in Action" : "मैदानमा स्ववियु: झलकहरू"}
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl text-xs sm:text-sm leading-relaxed">
                            {language === "en"
                                ? "Visual updates from active protest movements, football games, classroom dialogs, and petition submissions in Tanahun, Nepal."
                                : "अनेरास्ववियु तथा स्ववियुका आन्दोलन, खेलकुद प्रतियोगिता, कक्षाकोठा छलफल र आधिकारिक अभियानका मुख्य झलकहरू।"}
                        </p>
                    </div>

                    {/* Quick Search Bar */}
                    <div className="w-full lg:w-72 shrink-0">
                        <div className="relative">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowAll(true);
                                }}
                                placeholder={language === "en" ? "Search pins & photos..." : "तस्वीर खोज्नुहोस्..."}
                                className="w-full pl-10 pr-9 py-2.5 neu-input rounded-2xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Highly Accessible Filter Navigation (Wrap-friendly, no scrollbar clip) */}
                <div className="mb-6 sm:mb-8 neu-pressed p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl bg-[#eef2f7]">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {categories.map((cat) => {
                            const count = getCategoryCount(cat);
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize cursor-pointer flex items-center gap-1.5 ${
                                        isActive
                                            ? "neu-button-red text-white shadow-md scale-105"
                                            : "neu-button text-slate-700 hover:text-red-700 hover:scale-102"
                                    }`}
                                >
                                    <span>
                                        {cat === "all"
                                            ? language === "en"
                                                ? "All Pins"
                                                : "सबै झलक"
                                            : language === "en"
                                            ? cat
                                            : cat === "Protest"
                                            ? "आन्दोलन"
                                            : cat === "Sports"
                                            ? "खेलकुद"
                                            : cat === "Solidarity"
                                            ? "ऐक्यवद्धता"
                                            : cat === "Campaign"
                                            ? "ज्ञापनपत्र"
                                            : "अन्तरक्रिया"}
                                    </span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                                            isActive
                                                ? "bg-white/25 text-white"
                                                : "bg-slate-200/80 text-slate-600"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Toast Notification */}
                <AnimatePresence>
                    {toastMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2"
                        >
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span>{toastMessage}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pinterest Masonry Feed (2 columns on mobile, 3 on tablet, 4 on desktop) */}
                {displayedImages.length > 0 ? (
                    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3.5 sm:gap-4 md:gap-5 space-y-3.5 sm:space-y-4 md:space-y-5">
                        {displayedImages.map((img, idx) => {
                            const isLiked = likedIds.has(img.id);
                            return (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: (idx % 4) * 0.04 }}
                                    className="break-inside-avoid group relative flex flex-col cursor-pointer mb-3.5 sm:mb-4 md:mb-5"
                                    onClick={() => setSelectedIndex(idx)}
                                >
                                    {/* Pinterest Pin Card Container */}
                                    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#eef2f7] p-1.5 sm:p-2 shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff] border border-white/80 group-hover:shadow-[6px_6px_18px_#c8d2e2,-6px_-6px_18px_#ffffff] transition-all duration-300">
                                        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200">
                                            {/* Image or Gradient fallback */}
                                            {img.imageUrl ? (
                                                <img
                                                    src={img.imageUrl}
                                                    alt={language === "en" ? img.titleEn : img.titleNp}
                                                    referrerPolicy="no-referrer"
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-auto object-cover block group-hover:scale-[1.03] transition-transform duration-500 will-change-transform"
                                                />
                                            ) : (
                                                <div
                                                    className={`w-full ${
                                                        img.aspectRatio === "tall"
                                                            ? "aspect-[3/5]"
                                                            : img.aspectRatio === "portrait"
                                                            ? "aspect-[3/4]"
                                                            : img.aspectRatio === "landscape"
                                                            ? "aspect-[4/3]"
                                                            : "aspect-square"
                                                    } bg-gradient-to-br ${img.placeholderBg} flex items-center justify-center`}
                                                >
                                        
                                                </div>
                                            )}

                                            {/* Pinterest Hover & Tap Overlay */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none p-2.5 sm:p-3.5 flex flex-col justify-between">
                                                {/* Top Bar: Category tag on left, Red Pinterest Save/View pill on right */}
                                                <div className="flex items-center justify-between w-full pointer-events-auto">
                                                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                                        {img.category}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedIndex(idx);
                                                        }}
                                                        className="px-3 sm:px-4 py-1 rounded-full bg-[#e60023] hover:bg-[#b91c1c] text-white text-[11px] sm:text-xs font-bold shadow-md transition-all cursor-pointer transform group-hover:scale-100 scale-95"
                                                        title="View Pin"
                                                    >
                                                        {language === "en" ? "View" : "हेर्नुहोस्"}
                                                    </button>
                                                </div>

                                                {/* Bottom Action Bar: Share, Zoom, and Like buttons */}
                                                <div className="flex items-center justify-between w-full pointer-events-auto">
                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            type="button"
                                                            onClick={(e) => handleShare(img, e)}
                                                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                                                            title="Share"
                                                        >
                                                            <Share2 className="w-3.5 h-3.5" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={(e) => toggleLike(img.id, e)}
                                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md backdrop-blur-md transition-transform hover:scale-110 cursor-pointer ${
                                                                isLiked
                                                                    ? "bg-rose-500 text-white"
                                                                    : "bg-white/90 hover:bg-white text-slate-800"
                                                            }`}
                                                            title="Like photo"
                                                        >
                                                            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
                                                        </button>
                                                    </div>

                                                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md backdrop-blur-md">
                                                        <ZoomIn className="w-3.5 h-3.5 text-red-600" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pinterest Style Underneath Info */}
                                        <div className="pt-2 px-1 pb-1 flex items-start justify-between gap-1.5">
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-red-700 transition-colors">
                                                    {language === "en" ? img.titleEn : img.titleNp}
                                                </h3>
                                                <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-devanagari">
                                                    {language === "en" ? img.descriptionEn : img.descriptionNp}
                                                </p>
                                            </div>
                                            <div
                                                onClick={(e) => handleShare(img, e)}
                                                className="shrink-0 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
                                                title="Share options"
                                            >
                                                <MoreHorizontal className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="p-10 neu-pressed rounded-3xl text-center text-slate-500 bg-[#eef2f7]">
                        <Images className="w-10 h-10 mx-auto text-slate-400 mb-2" />
                        <p className="text-sm font-bold text-slate-700">
                            {language === "en" ? "No media found" : "कुनै तस्विर भेटिएन"}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            {language === "en"
                                ? "Try adjusting your search term or selecting another category."
                                : "कृपया खोज शब्द वा वर्ग परिवर्तन गर्नुहोस्।"}
                        </p>
                        {(searchQuery || activeCategory !== "all") && (
                            <button
                                onClick={() => {
                                    setActiveCategory("all");
                                    setSearchQuery("");
                                }}
                                className="mt-3 neu-button px-4 py-1.5 rounded-xl text-xs font-bold text-[#052855] cursor-pointer"
                            >
                                {language === "en" ? "Clear Filters" : "फिल्टर हटाउनुहोस्"}
                            </button>
                        )}
                    </div>
                )}

                {/* Show More / Show Less Button */}
                {filteredImages.length > INITIAL_LIMIT && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="neu-button inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl text-slate-800 font-bold text-xs transition-all cursor-pointer hover:scale-102"
                        >
                            <span>
                                {showAll
                                    ? language === "en"
                                        ? "Show Less"
                                        : "कम देखाउनुहोस्"
                                    : language === "en"
                                    ? `Show All Pins (${filteredImages.length})`
                                    : `सबै मिडिया हेर्नुहोस् (${filteredImages.length} वटा)`}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 text-red-700" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-red-700" />
                            )}
                        </button>
                    </div>
                )}

                {/* Full-screen Pinterest Lightbox Modal with Index Navigation & Keyboard Controls */}
                <AnimatePresence>
                    {currentLightboxImg && selectedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-3 sm:p-6 backdrop-blur-md"
                            onClick={() => setSelectedIndex(null)}
                        >
                            {/* Top Control Bar */}
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-5xl flex items-center justify-between text-white pb-3 px-2"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                                        Photo {selectedIndex + 1} of {displayedImages.length}
                                    </span>
                                    <span className="text-xs text-white/60 hidden sm:inline">
                                        (Use ← → Arrow keys to navigate, Esc to close)
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={(e) => handleShare(currentLightboxImg, e)}
                                        className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/20"
                                        title="Share pin"
                                    >
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedIndex(null)}
                                        className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/20"
                                        title="Close (Esc)"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Main Frame with Prev, Image, and Next */}
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-5xl w-full max-h-[82vh] flex items-center justify-center"
                            >
                                {/* Left Prev Button */}
                                {displayedImages.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedIndex((prev) =>
                                                prev !== null && prev > 0 ? prev - 1 : displayedImages.length - 1
                                            )
                                        }
                                        className="absolute -left-2 sm:-left-6 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-110 cursor-pointer"
                                        title="Previous Photo (Left Arrow)"
                                    >
                                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                )}

                                <div className="flex flex-col items-center max-h-[80vh] max-w-full overflow-y-auto no-scrollbar">
                                    <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/20 max-h-[65vh] flex items-center justify-center">
                                        {currentLightboxImg.imageUrl ? (
                                            <img
                                                src={currentLightboxImg.imageUrl}
                                                alt={language === "en" ? currentLightboxImg.titleEn : currentLightboxImg.titleNp}
                                                referrerPolicy="no-referrer"
                                                className="w-full max-h-[64vh] object-contain select-none"
                                            />
                                        ) : (
                                            <div
                                                className={`w-96 h-80 bg-gradient-to-br ${currentLightboxImg.placeholderBg} flex items-center justify-center`}
                                            >
                                               
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full max-w-2xl text-center mt-3 px-4 pb-2">
                                        <span className="inline-block bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                                            {currentLightboxImg.category} Archives
                                        </span>
                                        <h3 className="text-white text-base sm:text-lg font-bold font-devanagari">
                                            {language === "en" ? currentLightboxImg.titleEn : currentLightboxImg.titleNp}
                                        </h3>
                                        <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl mx-auto font-devanagari leading-relaxed">
                                            {language === "en" ? currentLightboxImg.descriptionEn : currentLightboxImg.descriptionNp}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Next Button */}
                                {displayedImages.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedIndex((prev) =>
                                                prev !== null && prev < displayedImages.length - 1 ? prev + 1 : 0
                                            )
                                        }
                                        className="absolute -right-2 sm:-right-6 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 shadow-xl transition-transform hover:scale-110 cursor-pointer"
                                        title="Next Photo (Right Arrow)"
                                    >
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

