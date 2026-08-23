import { useState, useMemo } from "react";
import { Calendar, Bell, ChevronRight, FileText, ArrowUpRight, ChevronDown, Search, X, Check, Share2 } from "lucide-react";
import { motion } from "motion/react";

export interface Notice {
    id: string;
    titleEn: string;
    titleNp: string;
    date: string;
    category: "Urgent" | "Academic" | "Sports" | "Solidarity" | "General" | "Cultural" | string;
    contentEn: string;
    contentNp: string;
    isUrgent: boolean;
    imageDesc?: string;
}

export const FSU_NOTICES: Notice[] = [
    {
        id: "n1",
        titleEn: "Solidarity Vigil & Seek Justice for Inisha BK",
        titleNp: "इनिसा विकको लागि न्याय र ऐक्यवद्धता कार्यक्रम",
        date: "2026-07-15",
        category: "Solidarity",
        isUrgent: true,
        contentEn: "Free Students' Union Aadikavi Bhanubhakta Campus has organized a solidarity movement seeking immediate justice for student Inisha BK under the slogan 'JUSTICE DELAYED, JUSTICE DENIED'. A peaceful candlelit vigil and assembly will be held at the campus entrance. All students are requested to join in solidarity.",
        contentNp: "स्ववियु आदिकवि भानुभक्त क्याम्पसद्वारा 'JUSTICE DELAYED, JUSTICE DENIED' नारा अन्तर्गत विद्यार्थी इनिसा विकको लागि तत्काल न्याय माग गर्दै ऐक्यवद्धता र दीप प्रज्वलन कार्यक्रम आयोजना गरिएको छ। सम्पूर्ण विद्यार्थी साथीहरूलाई उपस्थितिका लागि हार्दिक अनुरोध गरिन्छ।"
    },
    {
        id: "n2",
        titleEn: "Inter-Faculty Futsal Tournament 2026",
        titleNp: "अन्तर-संकाय फुटसल प्रतियोगिता २०८३",
        date: "2026-08-21",
        category: "Sports",
        isUrgent: true,
        contentEn: "The Free Student Union (FSU) of Aadikavi Bhanubhakta Campus proudly announces the Inter-Faculty Futsal Tournament 2026. The tournament will be held from 21 - 23 August 2026 at Damauli Futsal Court. Students from all faculties are encouraged to participate and represent their faculty. Boys' category prizes include Rs. 8,000 for first place and Rs. 5,000 for second place, while the Girls' category offers Rs. 5,000 for first place and Rs. 3,000 for second place. All winners will receive medals and certificates. Register now and be part of this exciting competition.",
        contentNp: "आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (FSU) द्वारा आयोजित अन्तर-संकाय फुटसल प्रतियोगिता २०८३ मा सम्पूर्ण विद्यार्थीहरूलाई हार्दिक निमन्त्रणा गरिन्छ। प्रतियोगिता २०८३ भदौ ५ देखि ७ गते (२१–२३ अगस्ट २०२६) सम्म दमौली फुटसल कोर्टमा सञ्चालन हुनेछ। सबै संकायका विद्यार्थीहरूले आफ्नो संकायको प्रतिनिधित्व गर्दै सहभागिता जनाउन सक्नेछन्। छात्रतर्फ प्रथम पुरस्कार रु. ८,000 तथा द्वितीय पुरस्कार रु. ५,000, छात्रीतर्फ प्रथम पुरस्कार रु. ५,000 तथा द्वितीय पुरस्कार रु. ३,000 प्रदान गरिनेछ। सबै विजेताहरूलाई मेडल र प्रमाणपत्र पनि प्रदान गरिनेछ। समयमै दर्ता गरी प्रतियोगितामा सहभागी बन्नुहोस्।"
    },
    {
        id: "n3",
        titleEn: "Inter-Faculty Original Teej Song Competition 2026",
        titleNp: "अन्तर-संकाय मौलिक तीज गीत प्रतियोगिता २०८३",
        date: "2026-08-25",
        category: "Cultural",
        isUrgent: false,
        contentEn: "The Free Student Union (FSU) of Aadikavi Bhanubhakta Campus is organizing the Inter-Faculty Original Teej Song Competition 2026 to celebrate the rich traditions of Teej and promote Nepali culture through music. Students from all faculties are invited to participate by presenting original Teej songs and showcasing their creativity, teamwork, and cultural talent. Outstanding performances will be recognized with attractive prizes, medals, and certificates. We encourage every faculty to register and make this cultural celebration memorable.",
        contentNp: "आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (FSU) द्वारा आयोजित अन्तर-संकाय मौलिक तीज गीत प्रतियोगिता २०८३ मा सम्पूर्ण विद्यार्थीहरूलाई हार्दिक निमन्त्रणा गरिन्छ। नेपाली संस्कृति, परम्परा तथा मौलिक सिर्जनशीलताको संरक्षण र प्रवर्द्धन गर्ने उद्देश्यले आयोजना गरिएको यस प्रतियोगितामा सबै संकायका विद्यार्थीहरूले मौलिक तीज गीत प्रस्तुत गर्दै आफ्नो प्रतिभा प्रदर्शन गर्न सक्नेछन्। उत्कृष्ट प्रस्तुतिलाई आकर्षक नगद पुरस्कार, मेडल तथा प्रमाणपत्र प्रदान गरिनेछ। समयमै दर्ता गरी आफ्नो संकायको प्रतिनिधित्व गर्दै यस सांस्कृतिक कार्यक्रममा सहभागी बन्नुहोस्।"
    }
];

interface NoticeBoardProps {
    language: "en" | "np";
}

export default function NoticeBoard({ language }: NoticeBoardProps) {
    // Sort notices by date descending (most recent date first)
    const sortedNotices = useMemo(() => {
        return [...FSU_NOTICES].sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }, []);

    const [selectedNotice, setSelectedNotice] = useState<Notice | null>(sortedNotices[0] || null);
    const [filter, setFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [showAll, setShowAll] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);

    const categories = ["all", "Solidarity", "Sports", "Academic", "General", "Cultural"];
    const INITIAL_LIMIT = 4;

    const filteredNotices = useMemo(() => {
        return sortedNotices.filter((n) => {
            const matchesCategory = filter === "all" || n.category.toLowerCase() === filter.toLowerCase();
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !q ||
                n.titleEn.toLowerCase().includes(q) ||
                n.titleNp.toLowerCase().includes(q) ||
                n.contentEn.toLowerCase().includes(q) ||
                n.contentNp.toLowerCase().includes(q) ||
                n.category.toLowerCase().includes(q);

            return matchesCategory && matchesSearch;
        });
    }, [sortedNotices, filter, searchQuery]);

    const displayedNotices = showAll ? filteredNotices : filteredNotices.slice(0, INITIAL_LIMIT);

    const handleFilterChange = (cat: string) => {
        setFilter(cat);
        setShowAll(false);
    };

    const handleCopy = (notice: Notice) => {
        const text = `${notice.titleEn} / ${notice.titleNp}\nDate: ${notice.date}\nCategory: ${notice.category}\n\n${notice.contentEn}\n\n${notice.contentNp}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Category count helper
    const getCategoryCount = (cat: string) => {
        if (cat === "all") return sortedNotices.length;
        return sortedNotices.filter((n) => n.category.toLowerCase() === cat.toLowerCase()).length;
    };

    return (
        <section id="notices" className="py-6 w-full scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                {/* Header with Title and Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6 w-full min-w-0 max-w-full">
                    <div className="min-w-0 max-w-full">
                        <span className="neu-flat-sm text-[#052855] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                            <Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                            {language === "en" ? "Announcements" : "सूचना तथा गतिविधि"}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-devanagari tracking-tight">
                            {language === "en" ? "FSU Notice Board" : "स्ववियु सूचना बोर्ड"}
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-xl text-xs sm:text-sm leading-relaxed">
                            {language === "en"
                                ? "Stay informed on active student issues, administrative submissions, campaigns, and upcoming college events organized by the FSU."
                                : "स्ववियुले सञ्चालन गरेका आन्दोलन, मागपत्र पेस, जर्सी वितरण तथा महत्वपूर्ण निर्णयहरूका सूचनाहरू प्राप्त गर्नुहोस्।"}
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
                                placeholder={language === "en" ? "Search notices..." : "सूचना खोज्नुहोस्..."}
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

                {/* Highly Accessible Filter Navigation (Wrap-friendly, no ugly scrollbar) */}
                <div className="mb-8 neu-pressed p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl bg-[#eef2f7]">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {categories.map((cat) => {
                            const count = getCategoryCount(cat);
                            const isActive = filter === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => handleFilterChange(cat)}
                                    className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize cursor-pointer flex items-center gap-1.5 ${
                                        isActive
                                            ? "neu-button-navy text-white shadow-md scale-105"
                                            : "neu-button text-slate-700 hover:text-blue-900 hover:scale-102"
                                    }`}
                                >
                                    <span>
                                        {cat === "all"
                                            ? language === "en"
                                                ? "All"
                                                : "सबै"
                                            : language === "en"
                                            ? cat
                                            : cat === "Solidarity"
                                            ? "ऐक्यवद्धता"
                                            : cat === "Sports"
                                            ? "खेलकुद"
                                            : cat === "Academic"
                                            ? "शैक्षिक"
                                            : cat === "Cultural"
                                            ? "सांस्कृतिक"
                                            : "सामान्य"}
                                    </span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                                            isActive
                                                ? "bg-white/20 text-white"
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

                {/* Notices list & details split view */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* List of Notices */}
                    <div className="lg:col-span-3 space-y-4">
                        {displayedNotices.length > 0 ? (
                            displayedNotices.map((notice) => {
                                const isSelected = selectedNotice?.id === notice.id;
                                return (
                                    <div
                                        key={notice.id}
                                        onClick={() => {
                                            setSelectedNotice(notice);
                                            // Smooth scroll on mobile screens to detail
                                            if (window.innerWidth < 1024) {
                                                const el = document.getElementById("notice-detail-view");
                                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                            }
                                        }}
                                        className={`p-5 rounded-2xl transition-all cursor-pointer relative ${
                                            isSelected
                                                ? "neu-pressed border-l-4 border-red-500 bg-[#eef2f7]"
                                                : "neu-flat hover:scale-[1.01]"
                                        }`}
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold tracking-wider uppercase ${
                                                        notice.isUrgent
                                                            ? "neu-button-red text-white shadow-xs"
                                                            : "neu-pressed-sm text-slate-700"
                                                    }`}
                                                >
                                                    {notice.category}
                                                </span>
                                                {notice.isUrgent && (
                                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600">
                                                        <span className="flex h-2 w-2 rounded-full bg-red-600 relative">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                        </span>
                                                        {language === "en" ? "Urgent" : "जरुरी"}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-medium">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {notice.date}
                                            </div>
                                        </div>

                                        <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors leading-snug">
                                            {language === "en" ? notice.titleEn : notice.titleNp}
                                        </h3>
                                        <p className="mt-2 text-slate-600 text-xs line-clamp-2 leading-relaxed text-justify">
                                            {language === "en" ? notice.contentEn : notice.contentNp}
                                        </p>

                                        <div className="mt-4 flex items-center justify-between text-xs text-blue-900 font-bold">
                                            <span className="inline-flex items-center gap-1">
                                                <FileText className="w-3.5 h-3.5" />
                                                {language === "en" ? "Read Details" : "विस्तृत विवरण"}
                                            </span>
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform ${
                                                    isSelected ? "translate-x-1 text-red-600" : ""
                                                }`}
                                            />
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="p-8 neu-pressed rounded-3xl text-center text-slate-500 bg-[#eef2f7]">
                                <FileText className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                                <p className="text-sm font-bold text-slate-700">
                                    {language === "en" ? "No notices found" : "कुनै सूचना भेटिएन"}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {language === "en"
                                        ? "Try adjusting your search query or category filter."
                                        : "कृपया खोज शब्द वा वर्ग परिवर्तन गर्नुहोस्।"}
                                </p>
                                {(searchQuery || filter !== "all") && (
                                    <button
                                        onClick={() => {
                                            setFilter("all");
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
                        {filteredNotices.length > INITIAL_LIMIT && (
                            <div className="pt-2 text-center">
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
                                            ? `Show All Notices (${filteredNotices.length})`
                                            : `सबै सूचनाहरू हेर्नुहोस् (${filteredNotices.length} वटा)`}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${
                                            showAll ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Active Notice Detail Frame */}
                    <div id="notice-detail-view" className="lg:col-span-2 scroll-mt-28">
                        {selectedNotice ? (
                            <motion.div
                                key={selectedNotice.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="neu-card p-6 rounded-3xl sticky top-24 space-y-4"
                            >
                                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                                    <span className="neu-flat-sm text-red-600 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                                        {selectedNotice.category} Notice
                                    </span>
                                    <div className="text-xs text-slate-500 font-mono font-bold flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {selectedNotice.date}
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                                    {selectedNotice.titleEn}
                                </h3>
                                <h4 className="text-sm text-blue-900 font-bold font-devanagari pb-2 border-b border-slate-200">
                                    {selectedNotice.titleNp}
                                </h4>

                                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                                    <p className="font-sans text-justify leading-relaxed">{selectedNotice.contentEn}</p>
                                    <p className="font-devanagari text-slate-800 neu-pressed-sm p-4 rounded-2xl border-l-4 border-red-500 text-justify leading-relaxed">
                                        {selectedNotice.contentNp}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                                    <span className="font-medium text-[11px]">Issued By: FSU Secretariat</span>
                                    <button
                                        onClick={() => handleCopy(selectedNotice)}
                                        className="neu-button px-3.5 py-1.5 rounded-xl font-bold text-[10px] text-slate-700 hover:text-blue-900 cursor-pointer flex items-center gap-1.5"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3 h-3 text-emerald-600" />
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Share2 className="w-3 h-3" />
                                                <span>Copy Notice</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center neu-pressed rounded-3xl p-6 text-center text-slate-500 bg-[#eef2f7]">
                                <div className="w-14 h-14 neu-flat rounded-2xl flex items-center justify-center text-slate-400 mb-3">
                                    <FileText className="w-7 h-7 text-blue-900" />
                                </div>
                                <p className="text-sm font-bold text-slate-800">
                                    {language === "en" ? "Select a notice to view details" : "विवरण हेर्नको लागि सूचना चयन गर्नुहोस्"}
                                </p>
                                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                                    {language === "en"
                                        ? "Click on any item on the notice list to see full English and Nepali descriptions."
                                        : "नेपाली र अंग्रेजी विवरणहरू हेर्न सूचीमा क्लिक गर्नुहोस्।"}
                                </p>
                                {filteredNotices.length > 0 && (
                                    <button
                                        onClick={() => setSelectedNotice(filteredNotices[0])}
                                        className="mt-4 neu-button px-4 py-1.5 rounded-xl text-xs text-blue-900 font-bold inline-flex items-center gap-1 cursor-pointer"
                                    >
                                        {language === "en" ? "Open first notice" : "पहिलो सूचना खोल्नुहोस्"}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

