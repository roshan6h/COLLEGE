import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Club } from '../app/data/clubsData';

interface RegistrationCertificateDocProps {
    club: Club;
    certData?: {
        certificateNumber?: string;
        registeredDate?: string;
        registeredDateNp?: string;
        issuedBy?: string;
        remarks?: string;
        certificateImage?: string;
    };
    isFullView?: boolean;
}

export const RegistrationCertificateDoc: React.FC<RegistrationCertificateDocProps> = ({
    club,
    certData,
    isFullView = false,
}) => {
    const regNo = certData?.certificateNumber || club.certificateNumber || 'ABC-IT-REG-2075/018';
    const regDate = certData?.registeredDate || 'July 28, 2018';

    return (
        <div
            className={`relative w-full aspect-[1/1.414] bg-white overflow-hidden select-none transition-shadow ${
                isFullView
                    ? 'rounded-2xl shadow-2xl border border-slate-200'
                    : 'rounded-xl shadow-lg border border-slate-200/80 group-hover:shadow-xl'
            }`}
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* --- GEOMETRIC ACCENTS (Blue Theme matching reference structure) --- */}
            
            {/* Top-Left Geometric Shapes */}
            <div className="absolute top-0 left-0 w-[45%] h-[30%] pointer-events-none z-0">
                {/* Sky / Ice Blue angled background facet */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#7bb3dd] opacity-80"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 85%)' }}
                />
                {/* Primary Campus Blue angular band */}
                <div
                    className="absolute top-0 left-0 w-[80%] h-full bg-[#0c72b8]"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 0 100%)' }}
                />
                {/* Deep Midnight Navy accent edge */}
                <div
                    className="absolute top-0 left-0 w-[45%] h-[60%] bg-[#082b4a]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                />
            </div>

            {/* Top-Right Geometric Accent */}
            <div className="absolute top-0 right-0 w-[35%] h-[18%] pointer-events-none z-0">
                <div
                    className="absolute top-0 right-0 w-full h-full bg-[#7bb3dd] opacity-90"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
                <div
                    className="absolute top-0 right-0 w-[60%] h-[70%] bg-[#0c72b8]"
                    style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%)' }}
                />
            </div>

            {/* Left Edge Angular Accent */}
            <div className="absolute top-[32%] left-0 w-[14%] h-[35%] pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-[#e0effa]"
                    style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                />
                <div
                    className="absolute inset-0 bg-[#0c72b8]"
                    style={{ clipPath: 'polygon(0 15%, 85% 50%, 0 85%)' }}
                />
            </div>

            {/* Bottom-Left & Bottom-Right Geometric Base (Corner Anchors) */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[28%] pointer-events-none z-0">
                {/* Deep Midnight Navy large base polygon */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full bg-[#082b4a]"
                    style={{ clipPath: 'polygon(0 20%, 0 100%, 85% 100%)' }}
                />
                {/* Primary Blue intersecting polygon */}
                <div
                    className="absolute bottom-0 left-0 w-[80%] h-[70%] bg-[#0c72b8]"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                />
                {/* Sky Blue small wing */}
                <div
                    className="absolute bottom-0 left-[20%] w-[50%] h-[40%] bg-[#7bb3dd] opacity-90"
                    style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
                />
            </div>

            <div className="absolute bottom-0 right-0 w-[45%] h-[25%] pointer-events-none z-0">
                {/* Sky Blue base */}
                <div
                    className="absolute bottom-0 right-0 w-full h-full bg-[#7bb3dd] opacity-90"
                    style={{ clipPath: 'polygon(15% 100%, 100% 0, 100% 100%)' }}
                />
                {/* Primary Blue inner cut */}
                <div
                    className="absolute bottom-0 right-0 w-[75%] h-[80%] bg-[#0c72b8]"
                    style={{ clipPath: 'polygon(30% 100%, 100% 20%, 100% 100%)' }}
                />
            </div>

            {/* --- INNER ORNATE THIN FRAME WITH NOTCHED CORNERS --- */}
            <div className="absolute inset-[4.5%] sm:inset-[5%] z-10 pointer-events-none border border-[#7bb3dd]/60 p-[3px]">
                <div className="w-full h-full border border-[#7bb3dd]/40 relative">
                    {/* Corner decorative notch crosses */}
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0c72b8]" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0c72b8]" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0c72b8]" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0c72b8]" />
                </div>
            </div>

            {/* --- TOP RIBBON & 3D GOLD MEDALLION --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                {/* Gold ribbon hanging from top border */}
                <div
                    className={`bg-gradient-to-b from-[#e7c777] via-[#c69a47] to-[#dfb76c] shadow-xs flex items-center justify-center ${
                        isFullView ? 'w-10 h-7' : 'w-7 h-5'
                    }`}
                >
                    <div className="w-[85%] h-full border-x border-amber-200/50" />
                </div>

                {/* 3D Circular Medallion */}
                <div
                    className={`-mt-1 rounded-full p-[2.5px] bg-gradient-to-tr from-[#9c7526] via-[#fae6a2] to-[#ab7d27] shadow-[0_4px_12px_rgba(0,0,0,0.22)] flex items-center justify-center ${
                        isFullView ? 'w-16 h-16 sm:w-18 sm:h-18' : 'w-11 h-11'
                    }`}
                >
                    {/* Scalloped / Ring Layer */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#0c72b8] to-[#082b4a] border border-amber-300/80 flex flex-col items-center justify-center text-center text-amber-100 shadow-inner px-1">
                        <Award className={`${isFullView ? 'w-4 h-4 sm:w-5 sm:h-5 text-amber-200' : 'w-3 h-3 text-amber-200'} stroke-[2.2]`} />
                        <span
                            className={`font-black uppercase tracking-tighter text-amber-200 leading-none ${
                                isFullView ? 'text-[7px] sm:text-[8px] mt-0.5' : 'text-[5px] mt-0.2'
                            }`}
                        >
                            OFFICIAL
                        </span>
                        <span
                            className={`font-semibold uppercase tracking-widest text-sky-200/80 leading-none scale-75 ${
                                isFullView ? 'text-[5px] sm:text-[6px]' : 'text-[4px]'
                            }`}
                        >
                            SEAL
                        </span>
                    </div>
                </div>
            </div>

            {/* --- CERTIFICATE TYPOGRAPHIC CONTENT --- */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center px-6 sm:px-9 pt-14 sm:pt-20 pb-5 sm:pb-8">
                
                {/* Header Title Block */}
                <div className="space-y-0.5 sm:space-y-1">
                    <h1
                        className={`font-serif-luxury font-bold text-slate-700 tracking-[0.22em] uppercase leading-tight ${
                            isFullView ? 'text-xl sm:text-3xl' : 'text-xs sm:text-sm'
                        }`}
                        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                    >
                        CERTIFICATE
                    </h1>
                    <p
                        className={`font-sans uppercase tracking-[0.28em] text-slate-400 font-semibold ${
                            isFullView ? 'text-[10px] sm:text-xs' : 'text-[6px] sm:text-[7px]'
                        }`}
                    >
                        OF ACCREDITATION & REGISTRATION
                    </p>
                </div>

                {/* Recipient Name in Cursive Script */}
                <div className="my-auto w-full px-2">
                    <p
                        className={`text-slate-800 font-normal leading-none truncate ${
                            isFullView ? 'text-3xl sm:text-5xl my-2' : 'text-lg sm:text-xl my-1'
                        }`}
                        style={{ fontFamily: 'Alex Brush, cursive' }}
                    >
                        {club.name}
                    </p>
                    
                    {/* Organization / Campus Subtitle */}
                    <div className="mt-1 sm:mt-2 space-y-0.5">
                        <p
                            className={`font-serif-luxury uppercase tracking-[0.18em] font-bold text-slate-600 ${
                                isFullView ? 'text-xs sm:text-sm' : 'text-[7px] sm:text-[8px]'
                            }`}
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            AADIKAVI BHANUBHAKTA CAMPUS
                        </p>
                        <p
                            className={`text-slate-500 font-medium ${
                                isFullView ? 'text-[9px] sm:text-[11px] max-w-sm mx-auto leading-relaxed' : 'text-[5.5px] max-w-[180px] mx-auto leading-tight'
                            }`}
                        >
                            This certificate is issued to authenticate the formal registration and institutional accreditation of the student organization under Campus Regulations.
                        </p>
                    </div>
                </div>

                {/* Bottom Signature & Date Lines */}
                <div className="w-full grid grid-cols-2 gap-4 sm:gap-8 pt-2">
                    {/* Left: Date */}
                    <div className="flex flex-col items-center">
                        <span
                            className={`font-mono text-slate-700 font-bold ${
                                isFullView ? 'text-[10px] sm:text-xs' : 'text-[6px]'
                            }`}
                        >
                            {regDate}
                        </span>
                        <div className="w-full max-w-[90px] sm:max-w-[140px] h-[1px] bg-slate-400/80 my-0.5" />
                        <span
                            className={`font-serif-luxury uppercase tracking-widest text-slate-400 font-semibold ${
                                isFullView ? 'text-[8px] sm:text-[10px]' : 'text-[5px]'
                            }`}
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            DATE
                        </span>
                    </div>

                    {/* Right: Signature */}
                    <div className="flex flex-col items-center">
                        <span
                            className={`text-slate-700 font-normal leading-none italic ${
                                isFullView ? 'text-sm sm:text-lg -mb-0.5' : 'text-[8px] -mb-0.5'
                            }`}
                            style={{ fontFamily: 'Alex Brush, cursive' }}
                        >
                            Campus Authority
                        </span>
                        <div className="w-full max-w-[90px] sm:max-w-[140px] h-[1px] bg-slate-400/80 my-0.5" />
                        <span
                            className={`font-serif-luxury uppercase tracking-widest text-slate-400 font-semibold ${
                                isFullView ? 'text-[8px] sm:text-[10px]' : 'text-[5px]'
                            }`}
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            AUTHORIZED SIGNATURE
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};
