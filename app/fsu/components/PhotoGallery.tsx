import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
    Search,
    X,
    ChevronDown,
    ChevronUp,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Share2,
    Download,
    Check,
    Calendar,
    Tag,
    Expand
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface GalleryImage {
    id: string;
    titleEn: string;
    titleNp: string;
    category: "Protest" | "Campaign" | "Interaction" | "Sports" | "Academic" | "Solidarity" | string;
    descriptionEn: string;
    descriptionNp: string;
    placeholderBg: string;
    pinHeightClass: string;
    imageUrl?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: "g1",
        titleEn: "In Solidarity with INISHA BK",
        titleNp: "इनिसा विकको न्यायको लागि ऐक्यवद्धता र्याली",
        category: "Solidarity",
        descriptionEn: "Justice for Inisha BK Solidarity Rally - unified student march demanding safety and student protection at Aadikavi Campus.",
        descriptionNp: "इनिसा विकको तत्काल न्यायका लागि क्याम्पस गेट बाहिर आयोजित वृहत दीप प्रज्वलन र शान्तिपूर्ण ऐक्यवद्धता प्रदर्शन।",
        placeholderBg: "from-red-950 via-slate-900 to-black",
        pinHeightClass: "min-h-[280px] sm:min-h-[320px]",
        imageUrl: "../fsu/img12.webp"
    },
    {
        id: "g2",
        titleEn: "Awareness Campaign",
        titleNp: "क्याम्पस सचेतना कार्यक्रम",
        category: "Interaction",
        descriptionEn: "Standing in solidarity during campus awareness and leadership workshops, encouraging participation.",
        descriptionNp: "विद्यार्थी सचेतना तथा व्यावहारिक नेतृत्व विकास कार्यक्रमको एक सुखद क्षण।",
        placeholderBg: "from-blue-950 via-indigo-950 to-slate-950",
        pinHeightClass: "min-h-[190px] sm:min-h-[210px]",
        imageUrl: "../fsu/img4.webp"
    },
    {
        id: "g3",
        titleEn: "Official Jersey Launch",
        titleNp: "आधिकारिक फुटबल जर्सी अनावरण",
        category: "Sports",
        descriptionEn: "Supporting Sports: President Anup Ale Magar presenting the official team jerseys to our campus players.",
        descriptionNp: "खेलकुद प्रवर्द्धन: स्ववियु अध्यक्ष अनुप आले मगरद्वारा क्याम्पस फुटबल टोलीलाई नयाँ जर्सी हस्तान्तरण।",
        placeholderBg: "from-rose-950 via-slate-900 to-slate-950",
        pinHeightClass: "min-h-[310px] sm:min-h-[350px]",
        imageUrl: "../fsu/imag.webp"
    },
    {
        id: "g4",
        titleEn: "Promoting Student Athletics",
        titleNp: "खेलकुद विकास तथा सामग्री",
        category: "Sports",
        descriptionEn: "Promoting Student Athletics: Union members with the new campus sports kits preparing for the league.",
        descriptionNp: "खेलाडीहरू र स्ववियु पदाधिकारीहरू नयाँ फुटबल जर्सी तथा खेलकुद सामग्रीका साथ एकीकृत।",
        placeholderBg: "from-indigo-950 via-blue-950 to-slate-950",
        pinHeightClass: "min-h-[220px] sm:min-h-[240px]",
        imageUrl: "../fsu/sp2.webp"
    },
    {
        id: "g5",
        titleEn: "Academic Guidance",
        titleNp: "शैक्षिक सहजीकरण र सहयोग",
        category: "Academic",
        descriptionEn: "Academic Support: Facilitating student resources and college administrative assistance.",
        descriptionNp: "विद्यार्थीहरूलाई शैक्षिक सामग्री वितरण र फारम दर्ता प्रक्रियामा सहजीकरण।",
        placeholderBg: "from-teal-950 via-slate-900 to-slate-950",
        pinHeightClass: "min-h-[270px] sm:min-h-[310px]",
        imageUrl: "../fsu/img11.webp"
    },
    {
        id: "g6",
        titleEn: "Advocating for Student Rights",
        titleNp: "प्रशासन समक्ष ज्ञापन पत्र पेस",
        category: "Campaign",
        descriptionEn: "Advocating for Student Rights: Submitting official memorandums and 15-point charter to the campus administration.",
        descriptionNp: "विद्यार्थी हकहित र शैक्षिक सुधारका विषय समेटिएको ज्ञापन पत्र क्याम्पस प्रशासनलाई बुझाउँदै स्ववियु प्रतिनिधि।",
        placeholderBg: "from-slate-900 via-sky-950 to-black",
        pinHeightClass: "min-h-[180px] sm:min-h-[200px]",
        imageUrl: "../fsu/img6.webp"
    },
    {
        id: "g7",
        titleEn: "Union Proposals Submission",
        titleNp: "विद्यार्थी प्रस्ताव दर्ता",
        category: "Campaign",
        descriptionEn: "Strengthening Communication: Official handover of student union proposals for library digitalization.",
        descriptionNp: "सुदृढ संचार तथा डिजिटल पुस्तकालय सम्बन्धी प्रस्तावहरू आधिकारिक रूपमा दर्ता गरिँदै।",
        placeholderBg: "from-emerald-950 via-slate-900 to-slate-950",
        pinHeightClass: "min-h-[300px] sm:min-h-[340px]",
        imageUrl: "../fsu/imgee.webp"
    },
    {
        id: "g8",
        titleEn: "Annual Student Gathering",
        titleNp: "स्ववियु वार्षिक भेला तथा स्वागत",
        category: "Solidarity",
        descriptionEn: "FSU Annual Gathering: Celebrating student unity, academic excellence, and progressive leadership.",
        descriptionNp: "स्ववियु वार्षिक भेलामा विद्यार्थी एकता, सहभागिता र लोकतान्त्रिक प्रतिबद्धता प्रदर्शन।",
        placeholderBg: "from-amber-950 via-indigo-950 to-black",
        pinHeightClass: "min-h-[220px] sm:min-h-[240px]",
        imageUrl: "../fsu/img8.webp"
    },
    {
        id: "g9",
        titleEn: "Inclusive Leadership Desk",
        titleNp: "स्ववियु अध्यक्ष र सरोकारवाला छलफल",
        category: "Interaction",
        descriptionEn: "Inclusive Leadership: Engaging directly with students, faculty, and delegates at the Union office.",
        descriptionNp: "समावेशी नेतृत्व: स्ववियु कार्यालयमा विद्यार्थी र प्राध्यापकहरूसँग निरन्तर संवाद तथा सर-सल्लाह।",
        placeholderBg: "from-blue-950 via-neutral-900 to-black",
        pinHeightClass: "min-h-[290px] sm:min-h-[330px]",
        imageUrl: "../fsu/img10.webp"
    },
    {
        id: "g10",
        titleEn: "Mourning Session for Inisha BK",
        titleNp: "इनिशा बिकको सम्झनामा श्रद्धाञ्जली सभा",
        category: "Solidarity",
        descriptionEn: "A heartfelt mourning session organized by the Free Students' Union to pay tribute to the late Inisha BK. Students, teachers, and staff gathered to offer condolences, observe a moment of silence, and honor her memory.",
        descriptionNp: "स्वर्गीय इनिशा बिकको सम्झनामा स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित श्रद्धाञ्जली सभामा विद्यार्थी, शिक्षक तथा कर्मचारीहरूको सहभागिता।",
        placeholderBg: "from-slate-900 via-gray-900 to-black",
        pinHeightClass: "min-h-[200px] sm:min-h-[220px]",
        imageUrl: "../fsu/img5.webp"
    },
    {
        id: "g11",
        titleEn: "Donation Campaign",
        titleNp: "दान अभियान",
        category: "Campaign",
        descriptionEn: "A donation campaign organized by the Free Students' Union to support individuals and families in need. Students, teachers, and well-wishers came together to contribute generously.",
        descriptionNp: "आवश्यकतामा परेका व्यक्ति तथा परिवारहरूको सहयोगका लागि स्वतन्त्र विद्यार्थी युनियनद्वारा आयोजित दान अभियान।",
        placeholderBg: "from-blue-950 via-slate-950 to-black",
        pinHeightClass: "min-h-[270px] sm:min-h-[300px]",
        imageUrl: "../fsu/img7.webp"
    },
    {
        id: "g12",
        titleEn: "Extracurricular Athletics",
        titleNp: "अतिरिक्त खेलकुद गतिविधि",
        category: "Sports",
        descriptionEn: "Fostering Teamwork: Supporting dynamic campus sports leagues and extracurricular participation.",
        descriptionNp: "क्याम्पसमा अतिरिक्त क्रियाकलाप र खेलकुद सहभागिताको विकासका लागि खेल आयोजना।",
        placeholderBg: "from-red-950 via-indigo-950 to-black",
        pinHeightClass: "min-h-[240px] sm:min-h-[260px]",
        imageUrl: "../fsu/sp3.webp"
    }
];

interface PhotoGalleryProps {
    language: "en" | "np";
}

interface FilterCategory {
    key: string;
    labelEn: string;
    labelNp: string;
}

const CATEGORIES: FilterCategory[] = [
    { key: "all", labelEn: "All Pins", labelNp: "सबै पिन" },
    { key: "Protest", labelEn: "Protest", labelNp: "आन्दोलन" },
    { key: "Sports", labelEn: "Sports", labelNp: "खेलकुद" },
    { key: "Solidarity", labelEn: "Solidarity", labelNp: "ऐक्यवद्धता" },
    { key: "Campaign", labelEn: "Campaign", labelNp: "अभियान" },
    { key: "Interaction", labelEn: "Interaction", labelNp: "अन्तरक्रिया" }
];

export default function PhotoGallery({ language }: PhotoGalleryProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedImg, setSelectedImg] = useState<GalleryImage | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Initial limit matching the 8 pins in the screenshot
    const INITIAL_LIMIT = 8;

    const filteredImages = useMemo(() => {
        return GALLERY_IMAGES.filter((img) => {
            const matchesCategory =
                activeCategory === "all" ||
                img.category.toLowerCase() === activeCategory.toLowerCase();

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

    const [columnCount, setColumnCount] = useState<number>(() => {
        if (typeof window !== "undefined") {
            const w = window.innerWidth;
            if (w >= 1280) return 4;
            if (w >= 1024) return 3;
            if (w >= 640) return 3;
            return 2;
        }
        return 2;
    });

    useEffect(() => {
        const updateColumns = () => {
            const w = window.innerWidth;
            if (w >= 1280) setColumnCount(4);
            else if (w >= 1024) setColumnCount(3);
            else if (w >= 640) setColumnCount(3);
            else setColumnCount(2);
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    const galleryColumns = useMemo(() => {
        const cols: typeof displayedImages[] = Array.from({ length: columnCount }, () => []);
        displayedImages.forEach((item, index) => {
            cols[index % columnCount].push(item);
        });
        return cols;
    }, [displayedImages, columnCount]);

    const handleCategoryChange = (catKey: string) => {
        setActiveCategory(catKey);
        setShowAll(false);
    };

    const getCategoryCount = (catKey: string) => {
        if (catKey === "all") return GALLERY_IMAGES.length;
        return GALLERY_IMAGES.filter(
            (img) => img.category.toLowerCase() === catKey.toLowerCase()
        ).length;
    };

    // Keyboard navigation for Lightbox
    const handleNextImage = useCallback(() => {
        if (!selectedImg) return;
        const currentIndex = filteredImages.findIndex((img) => img.id === selectedImg.id);
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImg(filteredImages[currentIndex + 1]);
        } else {
            setSelectedImg(filteredImages[0]);
        }
    }, [selectedImg, filteredImages]);

    const handlePrevImage = useCallback(() => {
        if (!selectedImg) return;
        const currentIndex = filteredImages.findIndex((img) => img.id === selectedImg.id);
        if (currentIndex > 0) {
            setSelectedImg(filteredImages[currentIndex - 1]);
        } else {
            setSelectedImg(filteredImages[filteredImages.length - 1]);
        }
    }, [selectedImg, filteredImages]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImg) return;
            if (e.key === "Escape") setSelectedImg(null);
            if (e.key === "ArrowRight") handleNextImage();
            if (e.key === "ArrowLeft") handlePrevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImg, handleNextImage, handlePrevImage]);

    const handleCopyLink = (img: GalleryImage) => {
        navigator.clipboard?.writeText(window.location.origin + "#gallery-" + img.id);
        setCopiedId(img.id);
        setTimeout(() => setCopiedId(null), 1800);
    };

    return (
        <section id="gallery" className="py-8 w-full scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Area matching screenshot */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">
                    <div>
                        {/* Red Tagline with Pushpin */}
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <svg
                                className="w-3.5 h-3.5 text-red-600 fill-red-600 -rotate-45 shrink-0"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                            </svg>
                            <span className="text-red-600 text-xs font-extrabold tracking-wider uppercase">
                                {language === "en" ? "VISUAL PINS & MOMENTS" : "तस्वीर तथा गतिविधिहरू"}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {language === "en" ? "FSU in Action" : "मैदानमा स्ववियु"}
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                            {language === "en"
                                ? "Visual updates from active protest movements, football games, classroom dialogs, and petition submissions in Tanahun, Nepal."
                                : "अनेरास्ववियु तथा स्ववियुका आन्दोलन, खेलकुद प्रतियोगिता, कक्षाकोठा छलफल र आधिकारिक अभियानका मुख्य झलकहरू।"}
                        </p>
                    </div>

                    {/* Search Bar on the Right */}
                    <div className="w-full md:w-72 shrink-0">
                        <div className="relative">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowAll(true);
                                }}
                                placeholder={
                                    language === "en"
                                        ? "Search pins & photos..."
                                        : "पिन तथा तस्विर खोज्नुहोस्..."
                                }
                                className="w-full pl-9 pr-8 py-2 rounded-full bg-slate-100/70 border border-slate-200/80 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-red-500/50 transition-all shadow-2xs"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                                    title="Clear search"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Elongated Neumorphic/Soft Pill Container Bar */}
                <div className="mb-7 w-full bg-[#e8ecf2] p-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar shadow-inner border border-white/60">
                    {CATEGORIES.map((cat) => {
                        const count = getCategoryCount(cat.key);
                        const isActive = activeCategory === cat.key;
                        return (
                            <button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all shrink-0 flex items-center gap-1.5 cursor-pointer select-none ${
                                    isActive
                                        ? "bg-[#991b1b] text-white shadow-xs font-bold"
                                        : "bg-white/60 hover:bg-white text-slate-700 hover:text-slate-900 border border-white/60 shadow-2xs font-semibold"
                                }`}
                            >
                                <span>{language === "en" ? cat.labelEn : cat.labelNp}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold leading-none ${
                                        isActive
                                            ? "bg-black/25 text-white"
                                            : "bg-slate-200/80 text-slate-600"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Pinterest Multi-column Masonry Layout */}
                {displayedImages.length > 0 ? (
                    <div className="flex gap-3 sm:gap-4 md:gap-5 w-full items-start">
                        {galleryColumns.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-4 sm:gap-5 flex-1 min-w-0">
                                {col.map((img) => (
                                    <div
                                        key={img.id}
                                        id={`gallery-${img.id}`}
                                        onClick={() => setSelectedImg(img)}
                                        className="w-full group cursor-pointer"
                                    >
                                        {/* Pin Media Container */}
                                        <div
                                            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${img.placeholderBg} shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 w-full ${img.pinHeightClass} flex flex-col justify-between p-3.5`}
                                        >
                                            {img.imageUrl ? (
                                                <img
                                                    src={img.imageUrl}
                                                    alt={language === "en" ? img.titleEn : img.titleNp}
                                                    className="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
                                                    loading="lazy"
                                                    decoding="async"
                                                    referrerPolicy="no-referrer"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = "none";
                                                    }}
                                                />
                                            ) : null}

                                            {/* Dark Dimmer on Hover */}
                                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                                            {/* Top Bar: Category Pill & Pinterest Red Save / View Button */}
                                            <div className="relative z-10 flex items-center justify-between w-full">
                                                <span className="bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-xs">
                                                    {img.category}
                                                </span>
                                                <span className="bg-[#e60023] hover:bg-[#b6001c] active:scale-95 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    View
                                                </span>
                                            </div>

                                            {/* Center Graphic Accent: Clean subtle typography watermark (NO EMOJIS) */}
                                            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2 text-center pointer-events-none">
                                                <span className="text-white/20 font-black text-xl tracking-widest uppercase select-none">
                                                    {img.category}
                                                </span>
                                            </div>

                                            {/* Bottom Bar: Action Icon */}
                                            <div className="relative z-10 flex items-center justify-end w-full">
                                                <div className="w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Expand className="w-3.5 h-3.5" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Metadata (Pinterest Style) */}
                                        <div className="pt-2 pb-1 px-1">
                                            <div className="flex items-start justify-between gap-1.5">
                                                <h3 className="text-xs sm:text-[14px] font-semibold text-slate-900 leading-snug line-clamp-2 group-hover:underline">
                                                    {language === "en" ? img.titleEn : img.titleNp}
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedImg(img);
                                                    }}
                                                    className="text-slate-400 hover:text-slate-800 p-0.5 rounded-full hover:bg-slate-200/50 transition-colors shrink-0 cursor-pointer"
                                                    title="Pin details"
                                                >
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500">
                                                <div className="w-4 h-4 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-[8px] font-bold shrink-0">
                                                    FSU
                                                </div>
                                                <span className="truncate font-medium text-slate-600">
                                                    {img.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty Search State */
                    <div className="py-16 px-6 bg-white/70 rounded-3xl text-center border border-slate-200 shadow-xs max-w-md mx-auto">
                        <p className="text-sm font-bold text-slate-800">
                            {language === "en" ? "No pins found" : "कुनै पिन भेटिएन"}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            {language === "en"
                                ? "Try a different search keyword or category filter."
                                : "कृपया खोज शब्द वा वर्ग परिवर्तन गर्नुहोस्।"}
                        </p>
                        <button
                            onClick={() => {
                                setActiveCategory("all");
                                setSearchQuery("");
                            }}
                            className="mt-4 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer transition-colors"
                        >
                            {language === "en" ? "Reset Filters" : "फिल्टर रिसेट गर्नुहोस्"}
                        </button>
                    </div>
                )}

                {/* Show All Pins Button matching screenshot */}
                {filteredImages.length > INITIAL_LIMIT && (
                    <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowAll(!showAll)}
                            className="px-5 py-2 rounded-full bg-white/90 hover:bg-white text-slate-700 text-xs font-semibold shadow-xs border border-slate-200/80 hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                            <span>
                                {showAll
                                    ? language === "en"
                                        ? "Show Less"
                                        : "कम देखाउनुहोस्"
                                    : language === "en"
                                    ? `Show All Pins (${filteredImages.length})`
                                    : `सबै पिनहरू हेर्नुहोस् (${filteredImages.length})`}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-3.5 h-3.5 text-red-600" />
                            ) : (
                                <ChevronDown className="w-3.5 h-3.5 text-red-600" />
                            )}
                        </button>
                    </div>
                )}

                {/* Full-view Lightbox Modal with Details & Controls */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs"
                            onClick={() => setSelectedImg(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.94, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 relative max-h-[92vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Top Controls & Image */}
                                <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden min-h-[260px] max-h-[55vh]">
                                    {selectedImg.imageUrl ? (
                                        <img
                                            src={selectedImg.imageUrl}
                                            alt={language === "en" ? selectedImg.titleEn : selectedImg.titleNp}
                                            className="w-full h-full object-contain max-h-[55vh]"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none";
                                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                if (fallback) fallback.style.display = "flex";
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        style={{ display: selectedImg.imageUrl ? "none" : "flex" }}
                                        className={`w-full h-64 bg-gradient-to-br ${selectedImg.placeholderBg} flex flex-col items-center justify-center text-white p-6`}
                                    >
                                        <span className="text-xl font-bold tracking-wider uppercase text-white/90">
                                            {selectedImg.category}
                                        </span>
                                        <span className="text-xs text-white/60 mt-1 text-center max-w-md">
                                            {language === "en" ? selectedImg.titleEn : selectedImg.titleNp}
                                        </span>
                                    </div>

                                    {/* Prev & Next Floating Buttons */}
                                    <button
                                        type="button"
                                        onClick={handlePrevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                                        title="Previous Pin"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                                        title="Next Pin"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    {/* Close Button */}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImg(null)}
                                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer"
                                        title="Close"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Modal Content & Actions */}
                                <div className="p-5 sm:p-6 bg-white overflow-y-auto">
                                    <div className="flex items-center justify-between gap-2 flex-wrap">
                                        <span className="inline-flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                            <Tag className="w-3 h-3" />
                                            {selectedImg.category}
                                        </span>

                                        <div className="flex items-center gap-1.5">
                                            <button
                                                type="button"
                                                onClick={() => handleCopyLink(selectedImg)}
                                                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                                                title="Copy pin link"
                                            >
                                                {copiedId === selectedImg.id ? (
                                                    <>
                                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                        <span className="text-emerald-700">Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Share2 className="w-3.5 h-3.5" />
                                                        <span>Share</span>
                                                    </>
                                                )}
                                            </button>
                                            {selectedImg.imageUrl && (
                                                <a
                                                    href={selectedImg.imageUrl}
                                                    download={`${selectedImg.id}.jpg`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                                                    title="View or download image"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    <span>Original</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-extrabold mt-2.5 text-slate-900 leading-snug">
                                        {selectedImg.titleEn}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-slate-600 font-devanagari mt-0.5">
                                        {selectedImg.titleNp}
                                    </h4>

                                    <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        <p>{selectedImg.descriptionEn}</p>
                                        <p className="font-devanagari p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700">
                                            {selectedImg.descriptionNp}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                                        <span>Pin ID: {selectedImg.id}</span>
                                        <span>Aadikavi Bhanubhakta Campus, Tanahun</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
