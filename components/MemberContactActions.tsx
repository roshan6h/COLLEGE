import React, { useState, useEffect } from 'react';
import {
    Globe,
    Mail,
    ExternalLink,
    MessageCircle,
    UserCheck
} from 'lucide-react';
import {
    Linkedin,
    Facebook,
    Instagram,
    Github,
    Twitter
} from './SocialIcons';
export { Linkedin, Facebook, Instagram, Github, Twitter };
import { LeadershipMember } from '../app/data/clubsData';

export type SocialPlatform =
    | 'linkedin'
    | 'facebook'
    | 'instagram'
    | 'github'
    | 'twitter'
    | 'x'
    | 'whatsapp'
    | 'website'
    | 'email';

export interface SocialLinkItem {
    platform: SocialPlatform;
    url: string;
    label: string;
}

interface MemberContactActionsProps {
    member: LeadershipMember | any;
    clubName?: string;
    language?: 'en' | 'np';
    onUpdateSocials?: (memberId: string, updatedSocials: Record<string, string>) => void;
}

/**
 * Normalizes any social link URLs or handles into valid clickable web links.
 */
export function normalizeSocialUrl(platform: string, input: string): string {
    const trimmed = input.trim();
    if (!trimmed) return '';

    if (platform === 'email') {
        return trimmed.startsWith('mailto:') ? trimmed : `mailto:${trimmed}`;
    }

    if (platform === 'whatsapp') {
        const cleaned = trimmed.replace(/[^\d+]/g, '');
        return trimmed.startsWith('http') ? trimmed : `https://wa.me/${cleaned.replace('+', '')}`;
    }

    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
    }

    // Handle bare usernames or partial paths
    switch (platform) {
        case 'linkedin':
            return trimmed.includes('linkedin.com')
                ? `https://${trimmed}`
                : `https://www.linkedin.com/in/${trimmed.replace(/^\/+/, '')}`;
        case 'facebook':
            return trimmed.includes('facebook.com')
                ? `https://${trimmed}`
                : `https://www.facebook.com/${trimmed.replace(/^\/+/, '')}`;
        case 'instagram':
            return trimmed.includes('instagram.com')
                ? `https://${trimmed}`
                : `https://www.instagram.com/${trimmed.replace(/^@|\/+/g, '')}`;
        case 'github':
            return trimmed.includes('github.com')
                ? `https://${trimmed}`
                : `https://github.com/${trimmed.replace(/^@|\/+/g, '')}`;
        case 'twitter':
        case 'x':
            return trimmed.includes('twitter.com') || trimmed.includes('x.com')
                ? `https://${trimmed}`
                : `https://x.com/${trimmed.replace(/^@|\/+/g, '')}`;
        case 'website':
            return `https://${trimmed}`;
        default:
            return `https://${trimmed}`;
    }
}

/**
 * Extracts all social media links defined on a member from any structure:
 * - member.socials { linkedin, facebook, ... }
 * - member.socialLinks [{ platform, url }]
 * - direct member props: member.linkedin, member.facebook, member.instagram, member.github, member.twitter, member.x, member.whatsapp, member.website
 */
export function extractSocialLinks(member: any): SocialLinkItem[] {
    if (!member) return [];

    const result: SocialLinkItem[] = [];
    const addedPlatforms = new Set<string>();

    const addLink = (platform: SocialPlatform, rawUrl?: string, customLabel?: string) => {
        if (!rawUrl || typeof rawUrl !== 'string' || !rawUrl.trim()) return;
        if (addedPlatforms.has(platform)) return;

        const normalizedUrl = normalizeSocialUrl(platform, rawUrl);
        if (!normalizedUrl) return;

        addedPlatforms.add(platform);
        const labels: Record<SocialPlatform, string> = {
            linkedin: 'LinkedIn',
            facebook: 'Facebook',
            instagram: 'Instagram',
            github: 'GitHub',
            twitter: 'X / Twitter',
            x: 'X',
            whatsapp: 'WhatsApp',
            website: 'Website',
            email: 'Email'
        };

        result.push({
            platform,
            url: normalizedUrl,
            label: customLabel || labels[platform] || platform
        });
    };

    // 1. Direct top-level shortcut props
    if (member.linkedin) addLink('linkedin', member.linkedin);
    if (member.facebook) addLink('facebook', member.facebook);
    if (member.instagram) addLink('instagram', member.instagram);
    if (member.github) addLink('github', member.github);
    if (member.x) addLink('x', member.x);
    if (member.twitter) addLink('twitter', member.twitter);
    if (member.whatsapp) addLink('whatsapp', member.whatsapp);
    if (member.website) addLink('website', member.website);
    if (member.email && member.email.trim()) addLink('email', member.email);

    // 2. member.socials object
    if (member.socials && typeof member.socials === 'object') {
        const s = member.socials;
        if (s.linkedin) addLink('linkedin', s.linkedin);
        if (s.facebook) addLink('facebook', s.facebook);
        if (s.instagram) addLink('instagram', s.instagram);
        if (s.github) addLink('github', s.github);
        if (s.x) addLink('x', s.x);
        if (s.twitter) addLink('twitter', s.twitter);
        if (s.whatsapp) addLink('whatsapp', s.whatsapp);
        if (s.website) addLink('website', s.website);
        if (s.email) addLink('email', s.email);

        // Any other custom keys in socials
        Object.keys(s).forEach((key) => {
            const k = key.toLowerCase() as SocialPlatform;
            if (!addedPlatforms.has(k) && typeof s[key] === 'string') {
                addLink(k, s[key]);
            }
        });
    }

    // 3. member.socialLinks array
    if (Array.isArray(member.socialLinks)) {
        member.socialLinks.forEach((item: any) => {
            if (typeof item === 'string') {
                const lower = item.toLowerCase();
                let p: SocialPlatform = 'website';
                if (lower.includes('linkedin')) p = 'linkedin';
                else if (lower.includes('facebook')) p = 'facebook';
                else if (lower.includes('instagram')) p = 'instagram';
                else if (lower.includes('github')) p = 'github';
                else if (lower.includes('twitter') || lower.includes('x.com')) p = 'x';
                else if (lower.includes('wa.me') || lower.includes('whatsapp')) p = 'whatsapp';
                addLink(p, item);
            } else if (item && typeof item === 'object' && item.url) {
                const p = (item.platform?.toLowerCase() || 'website') as SocialPlatform;
                addLink(p, item.url, item.label);
            }
        });
    }

    // 4. Fallback check for single socialUrl
    if (member.socialUrl) {
        addLink('website', member.socialUrl, 'Social Link');
    }

    return result;
}

/**
 * Returns brand-specific icon, colors, and styling.
 */
function getPlatformConfig(platform: SocialPlatform) {
    switch (platform) {
        case 'linkedin':
            return {
                icon: Linkedin,
                name: 'LinkedIn',
                bg: 'bg-[#0077b5]/10',
                text: 'text-[#0077b5]',
                hoverBg: 'hover:bg-[#0077b5]',
                hoverText: 'hover:text-white',
                border: 'border-[#0077b5]/20',
                activeColor: '#0077b5'
            };
        case 'facebook':
            return {
                icon: Facebook,
                name: 'Facebook',
                bg: 'bg-[#1877f2]/10',
                text: 'text-[#1877f2]',
                hoverBg: 'hover:bg-[#1877f2]',
                hoverText: 'hover:text-white',
                border: 'border-[#1877f2]/20',
                activeColor: '#1877f2'
            };
        case 'instagram':
            return {
                icon: Instagram,
                name: 'Instagram',
                bg: 'bg-[#e1306c]/10',
                text: 'text-[#e1306c]',
                hoverBg: 'hover:bg-[#e1306c]',
                hoverText: 'hover:text-white',
                border: 'border-[#e1306c]/20',
                activeColor: '#e1306c'
            };
        case 'github':
            return {
                icon: Github,
                name: 'GitHub',
                bg: 'bg-slate-900/10',
                text: 'text-slate-800',
                hoverBg: 'hover:bg-slate-900',
                hoverText: 'hover:text-white',
                border: 'border-slate-800/20',
                activeColor: '#0f172a'
            };
        case 'twitter':
        case 'x':
            return {
                icon: Twitter,
                name: 'X',
                bg: 'bg-slate-900/10',
                text: 'text-slate-900',
                hoverBg: 'hover:bg-slate-900',
                hoverText: 'hover:text-white',
                border: 'border-slate-800/20',
                activeColor: '#0f172a'
            };
        case 'whatsapp':
            return {
                icon: MessageCircle,
                name: 'WhatsApp',
                bg: 'bg-[#25D366]/10',
                text: 'text-[#25D366]',
                hoverBg: 'hover:bg-[#25D366]',
                hoverText: 'hover:text-white',
                border: 'border-[#25D366]/20',
                activeColor: '#25D366'
            };
        case 'email':
            return {
                icon: Mail,
                name: 'Email',
                bg: 'bg-[#0c72b8]/10',
                text: 'text-[#0c72b8]',
                hoverBg: 'hover:bg-[#0c72b8]',
                hoverText: 'hover:text-white',
                border: 'border-[#0c72b8]/20',
                activeColor: '#0c72b8'
            };
        case 'website':
        default:
            return {
                icon: Globe,
                name: 'Website',
                bg: 'bg-emerald-600/10',
                text: 'text-emerald-700',
                hoverBg: 'hover:bg-emerald-600',
                hoverText: 'hover:text-white',
                border: 'border-emerald-600/20',
                activeColor: '#059669'
            };
    }
}

/**
 * MemberContactActions: Replaces phone numbers with interactive social media profiles.
 * Strict privacy-first design: NO phone numbers are rendered anywhere.
 */
export const MemberContactActions: React.FC<MemberContactActionsProps> = ({
    member,
    clubName = 'Committee',
    language = 'en',
    onUpdateSocials
}) => {
    const [localOverrides, setLocalOverrides] = useState<Record<string, string> | null>(null);

    const storageKey = `member_socials_${member.id || member.name}`;

    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                // Ensure any old cached phone number is deleted
                if (parsed.phone) {
                    delete parsed.phone;
                    localStorage.setItem(storageKey, JSON.stringify(parsed));
                }
                setLocalOverrides(parsed);
            }
        } catch {
            // Ignore localStorage errors
        }
    }, [storageKey]);

    // Merge member props with any localOverrides, explicitly stripping out phone
    const effectiveMember = {
        ...member,
        ...(localOverrides || {}),
        phone: undefined // Enforce no phone number
    };

    const rawSocialLinks = extractSocialLinks(effectiveMember);

    // If no explicit social links are configured, generate standard social search profiles based on name
    const memberName = member.name || member.nameEn || 'Member';
    const hasExplicitSocials = rawSocialLinks.length > 0;

    const socialLinks: SocialLinkItem[] = hasExplicitSocials
        ? rawSocialLinks
        : [
              {
                  platform: 'linkedin',
                  url: `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(memberName)}`,
                  label: 'LinkedIn'
              },
              {
                  platform: 'facebook',
                  url: `https://www.facebook.com/search/top?q=${encodeURIComponent(memberName)}`,
                  label: 'Facebook'
              }
          ];

    return (
        <div className="w-full relative">
            {/* SOCIAL MEDIA LINKS DISPLAY (STRICTLY NO PHONE NUMBERS) */}
            <div className="w-full">
                {socialLinks.length === 1 ? (
                    // Single social media link: Render full-width card
                    (() => {
                        const link = socialLinks[0];
                        const config = getPlatformConfig(link.platform);
                        const IconComponent = config.icon;
                        return (
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between px-3 py-2 bg-white/80 hover:bg-white text-slate-700 hover:text-[#0c72b8] rounded-xl text-xs font-bold transition-all border border-white/80 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] hover:shadow-[3px_3px_8px_#c8d2e2,-3px_-3px_8px_#ffffff] group/social cursor-pointer"
                                title={`Connect with ${memberName} on ${link.label}`}
                            >
                                <div className="flex items-center gap-2 truncate">
                                    <div
                                        className={`w-6 h-6 rounded-lg ${config.bg} ${config.text} flex items-center justify-center shrink-0 transition-transform group-hover/social:scale-110`}
                                    >
                                        <IconComponent className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-semibold text-slate-800 group-hover/social:text-[#0c72b8] transition-colors truncate">
                                        {link.label} Profile
                                    </span>
                                </div>
                                <span
                                    className={`text-[10px] ${config.text} font-extrabold uppercase tracking-wide ${config.bg} px-2 py-0.5 rounded-full shrink-0 ml-1 inline-flex items-center gap-0.5`}
                                >
                                    Connect <ExternalLink className="w-2.5 h-2.5 inline" />
                                </span>
                            </a>
                        );
                    })()
                ) : (
                    // Multiple social media links: Render branded responsive link buttons
                    <div className="w-full space-y-1.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                            {socialLinks.slice(0, 4).map((link, idx) => {
                                const config = getPlatformConfig(link.platform);
                                const IconComponent = config.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[70px] flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 rounded-xl text-xs font-bold transition-all border border-white/90 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff] hover:shadow-[3px_3px_7px_#c8d2e2,-3px_-3px_7px_#ffffff] hover:-translate-y-0.5 group/pill cursor-pointer"
                                        title={`${memberName} on ${link.label}`}
                                    >
                                        <div
                                            className={`w-4 h-4 rounded-md ${config.bg} ${config.text} flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform`}
                                        >
                                            <IconComponent className="w-2.5 h-2.5" />
                                        </div>
                                        <span className="text-[11px] font-bold truncate">
                                            {link.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>

                        {/* If more than 4 links, render remaining as compact icons */}
                        {socialLinks.length > 4 && (
                            <div className="flex items-center gap-1 overflow-x-auto pt-0.5 scrollbar-none">
                                {socialLinks.slice(4).map((link, idx) => {
                                    const config = getPlatformConfig(link.platform);
                                    const IconComponent = config.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-1.5 bg-white/80 hover:bg-white rounded-lg border border-white shadow-[1px_1px_3px_#d1d9e6,-1px_-1px_3px_#ffffff] ${config.text} hover:scale-105 transition-all shrink-0 cursor-pointer`}
                                            title={`Connect on ${link.label}`}
                                        >
                                            <IconComponent className="w-3 h-3" />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberContactActions;
