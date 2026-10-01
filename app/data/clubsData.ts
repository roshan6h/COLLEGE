export type Language = 'en' | 'np';
export type ViewMode = 'grid' | 'list' | 'categorized';

export type ClubCategory =
    | 'Technology & IT'
    | 'Student Welfare'
    | 'Business & Management'
    | 'Literature & Culture'
    | 'Sports & Athletics'
    | 'Science & Innovation'
    | 'Humanitarian & Service'
    | 'Academic & Analytics'
    | string;

export interface MemberSocials {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    x?: string;
    instagram?: string;
    github?: string;
    whatsapp?: string;
    website?: string;
    email?: string;
    [key: string]: string | undefined;
}

export interface LeadershipMember {
    id: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone?: string;
    avatarUrl: string;
    socials?: MemberSocials;
    socialLinks?: Array<{ platform: string; url: string; label?: string }>;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    x?: string;
    instagram?: string;
    github?: string;
    whatsapp?: string;
    website?: string;
    [key: string]: any;
}

export interface ClubEvent {
    id: string;
    clubId: string;
    clubName: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    category: string;
    description: string;
    capacity?: number;
    registeredCount?: number;
    isRegistered?: boolean;
    image?: string;
}

export interface ClubNotice {
    id: string;
    clubId: string;
    clubName: string;
    title: string;
    date: string;
    content: string;
    isImportant?: boolean;
    category: string;
}

export interface AchievementItem {
    id?: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    image?: string;
    badge?: string;
}

export interface ClubGalleryItem {
    id?: string;
    image: string;
    title?: string;
    date?: string;
    category?: string;
    description?: string;
}

export interface ClubCertificate {
    isRegistered: boolean;
    certificateNumber?: string;
    registeredDate?: string;
    registeredDateNp?: string;
    issuingAuthority?: string;
    issuingAuthorityNp?: string;
    registrationType?: string;
    validUntil?: string;
    certificateImage?: string;
    remarks?: string;
}

export interface Club {
    id: string;
    name: string;
    nepaliName?: string;
    category: string;
    logo: string;
    accentColor?: string;
    description?: string;
    shortDescription?: string;
    establishedYear?: number;
    memberCount?: number;
    facultyAdvisor?: string;
    clubAdvisor?: string;
    president?: string;
    meetingSchedule?: string;
    roomLocation?: string;
    leadership?: LeadershipMember[];
    achievements?: (string | AchievementItem)[];
    achievementItems?: AchievementItem[];
    aboutImages?: string[];
    aboutUsImages?: string[];
    galleryImages?: string[];
    galleryItems?: (string | ClubGalleryItem)[];
    gallery?: (string | ClubGalleryItem)[];
    contactEmail?: string;
    featured?: boolean;
    vision?: string;
    mission?: string[];
    certificate?: ClubCertificate;
    presidentMessage?: {
        senderName?: string;
        senderRole?: string;
        message?: string;
        avatarUrl?: string;
    };
    advisorMessage?: {
        senderName?: string;
        senderRole?: string;
        message?: string;
        avatarUrl?: string;
    };
    manifesto?: {
        title?: string;
        points?: string[];
    };
    history?: string;
    historyMilestones?: Array<{
        category: string;
        year: string;
        title: string;
        desc: string;
        image?: string;
    }>;
    [key: string]: any;
}
export const RedCross: Club = {
    id: 'yrcs-club',
    name: 'Youth Red Cross Circle',
    nepaliName: 'युवा रेडक्रस सर्कल',
    category: 'Social Service',
    logo: '../red/redLogo.webp',
    accentColor: '#dc2626',

    description:
        'Nepal Youth Red Cross Circle, Aadikavi Bhanubhakta Campus is a student organization dedicated to humanity, impartiality, social responsibility, humanitarian service, leadership development, and community welfare.',

    shortDescription:
        'Dedicated to humanitarian service, social responsibility, leadership, health awareness, disaster preparedness, and community welfare.',

    establishedYear: 1996,
    memberCount: 0,
    facultyAdvisor: 'Maha Prasad Hadkhale',
    president: 'Mausami Thapa',

    meetingSchedule: '',
    roomLocation: 'Aadikavi Bhanubhakta Campus',

    contactEmail: 'aadikaviyouthcrosscircle@gmail.com',

    aboutImages: [
        '../yrcs/group.webp',
        '../yrcs/023.webp',
        '../yrcs/024.webp'
    ],

    featured: true,

    vision:
        'To build a generation of socially responsible, humane youth dedicated to service, impartiality, and community welfare.',

    certificate: {
        isRegistered: false,
        certificateNumber: '',
        registeredDate: 'B.S. 2053',
        registeredDateNp: 'वि.सं. २०५३',
        issuingAuthority: 'Nepal Youth Red Cross Circle, Aadikavi Bhanubhakta Campus',
        issuingAuthorityNp:
            'नेपाल युवा रेडक्रस सर्कल, आदिकवि भानुभक्त क्याम्पस',
        registrationType: 'Youth Red Cross Circle',
        validUntil: '',
        certificateImage: '',
        remarks: 'This information has not been updated yet.'
    },

    mission: [
        'Engage students in humanitarian and social service activities.',
        'Uphold the principles of the Red Cross through meaningful community service.',
        'Develop leadership and community responsibility among students.',
        'Promote humanity, impartiality, courage, and social responsibility.'
    ],

    presidentMessage: {
        senderName: 'Safal Paudel',
        senderRole: 'Acting President, YRCS Aadikavi Bhanubhakta Campus',
        message:
            'Youth Red Cross Circle is not merely an ordinary student organization but an institution founded on the principles of humanity, impartiality, and social responsibility. Since its establishment, it has guided youth toward service-oriented leadership, social awareness, and human sensitivity. Through blood donation campaigns, health awareness programs, disaster risk reduction training, environmental conservation campaigns, and climate change awareness programs, the Circle continues to serve students and the wider community.',
        avatarUrl: '/yrcs/safal.webp'
    },

    advisorMessage: {
        senderName: 'Maha Prasad Hadkhale',
        senderRole: 'Patron & Campus Chief',
        message:
            'The Youth Red Cross Circle continues to contribute to humanitarian service, student leadership, social responsibility, and community welfare through meaningful activities and collective commitment.',
        avatarUrl: '/yrcs/maha.webp'
    },

    manifesto: {
        title: 'Youth Red Cross Circle Manifesto',
        points: [
            'Humanity: Promote humanity, impartiality, and a spirit of service among students.',
            'Leadership: Build leadership, courage, and self-confidence through humanitarian action.',
            'Community Support: Support communities in times of hardship and suffering.',
            'Values: Instill good values in youth for their all-round development.'
        ]
    },

    history:
        'Nepal Youth Red Cross Circle, Aadikavi Bhanubhakta Campus was established in B.S. 2053. It is a shared institution formed and run by students of the campus. Formed with representation from students of various faculties, the organization embraces the international principles of the Red Cross and connects the campus and its students with various associations, institutions, schools, and communities while remaining dedicated to humanitarian service.',

    historyMilestones: [
        {
            category: 'WHEN IT ALL BEGAN',
            year: '2053 B.S.',
            title: 'Establishment of Youth Red Cross Circle',
            desc:
                'Nepal Youth Red Cross Circle, Aadikavi Bhanubhakta Campus was established in B.S. 2053 by students of the campus.',
            image: ''
        }
    ],

    leadership: [
        {
            id: 'l1',
            name: 'Mausami Thapa',
            role: 'President',
            department: '',
            email: '',
            phone: '9702002665',
            facebook: '',
            avatarUrl: '../red/mausami.webp'
        },
        {
            id: 'l2',
            name: 'Safal Poudel',
            role: 'Vice President',
            department: '',
            email: 'safalpoudel471@gmail.com',
            phone: '9806580089',
            facebook: '',
            avatarUrl: '../red/safal.webp'
        },
        {
            id: 'l3',
            name: 'Sanjip Gurung',
            role: 'Secretary',
            department: '',
            email: '',
            phone: '9762865228',
            facebook: '',
            avatarUrl: '../red/sanjip.webp'
        },
        {
            id: 'l4',
            name: 'Dhananjaya Pandit',
            role: 'Treasurer',
            department: '',
            email: '',
            phone: '9767859730',
            facebook: '',
            avatarUrl: '../red/dhananjaya.webp'
        },
        {
            id: 'l5',
            name: 'Sadikshya Poudel',
            role: 'Joint Secretary',
            department: '',
            email: '',
            phone: '9742501450',
            facebook: '',
            avatarUrl: '../red/sadix.webp'
        },
        {
            id: 'l6',
            name: 'Sudip Basnet',
            role: 'Joint Treasurer',
            department: '',
            email: '',
            phone: '9829191303',
            facebook: '',
            avatarUrl: '../red/sudip.webp'
        },
        {
            id: 'l7',
            name: 'Dilip Karki',
            role: 'Member',
            department: '',
            email: '',
            phone: '9824189131',
            facebook: '',
            avatarUrl: '../red/dilip.webp'
        },
        {
            id: 'l8',
            name: 'Anisha Thapa',
            role: 'Member',
            department: '',
            email: '',
            phone: '9815180042',
            facebook: '',
            avatarUrl: '../red/anisha.webp'
        },
        {
            id: 'l9',
            name: 'Basanta Khanal',
            role: 'Member',
            department: '',
            email: '',
            phone: '9702618612',
            facebook: '',
            avatarUrl: '../red/basanta.webp'
        },
        {
            id: 'l10',
            name: 'Adit Thapa',
            role: 'Member',
            department: '',
            email: '',
            phone: '9828186261',
            facebook: '',
            avatarUrl: '../red/aadit.webp'
        },
        {
            id: 'l11',
            name: 'Aayusha Khawas',
            role: 'Member',
            department: '',
            email: '',
            phone: '984659291',
            facebook: '',
            avatarUrl: '../red/aayusha.webp'
        },

        // Sub-Committee Coordinators

        {
            id: 'sc1',
            name: 'Sadiksha Adhikari',
            role: 'Sub-Committee Coordinator - First Aid',
            department: '',
            email: '',
            phone: '9763249565',
            facebook: '',
            avatarUrl: '../red/sadikhya.webp'
        },
        {
            id: 'sc2',
            name: 'Biwas Ranabhat',
            role: 'Sub-Committee Coordinator - Information & Technology',
            department: '',
            email: '',
            phone: '9815178591',
            facebook: '',
            avatarUrl: '../red/biwash.webp'
        },
        {
            id: 'sc3',
            name: 'Shulav Shrestha',
            role: 'Sub-Committee Coordinator - Finance & Organization Coordination',
            department: '',
            email: '',
            phone: '9826600845',
            facebook: '',
            avatarUrl: '../red/shulav.webp'
        },
        {
            id: 'sc4',
            name: 'Arpana Pantha',
            role: 'Sub-Committee Coordinator - 11 & 12 Youth Red Cross',
            department: '',
            email: '',
            phone: '9702655245',
            facebook: '',
            avatarUrl: '../red/arpana.webp'
        },

        // Advisors and Officials

        {
            id: 'a1',
            name: 'Maha Prasad Hadkhale',
            role: 'Patron & Campus Chief',
            department: '',
            email: '',
            phone: '',
            facebook: '',
            avatarUrl: '../red/maha.webp'
        },
        {
            id: 'a2',
            name: 'Suman Khadka',
            role: 'Immediate Past President',
            department: '',
            email: '',
            phone: '',
            facebook: '',
            avatarUrl: '../red/suman.webp'
        },
        {
            id: 'a3',
            name: 'Narayani Adhikari',
            role: 'Focal Person',
            department: '',
            email: '',
            phone: '+9779856060469',
            facebook: '',
            avatarUrl: '../red/narayani.webp'
        },
        {
            id: 'a4',
            name: 'Buddha Kumar Shrestha',
            role: 'Assistant Focal Person',
            department: '',
            email: '',
            phone: '+977 984-6499209',
            facebook: '',
            avatarUrl: '../red/buddha.webp'
        }
    ],

    achievements: [],

    achievementItems: [
        {
            id: 'ach-1',
            title: 'Honored for Blood Donation Record',
            description:
                'Youth Red Cross Circle, Aadikavi Bhanubhakta Campus was honored by Nepal Red Cross Society, Kaski District Branch, Pokhara after donating 104 units of blood in FY 2080/81 and inspiring other institutions to contribute.',
            date: '12 Saun 2081',
            category: 'Blood Donation',
            badge: 'Major Achievement',
            image: '/yrcs/achievement1.webp'
        },
        {
            id: 'ach-2',
            title: '2nd Best Club of the Year 2080',
            description:
                'Among 11 clubs formed at the campus, Youth Red Cross Circle was declared the 2nd Best Club of the Year 2080 during the campus Annual General Assembly.',
            date: '19 Bhadra 2081',
            category: 'Best Club',
            badge: 'Major Achievement',
            image: '/yrcs/achievement2.webp'
        },
        {
            id: 'ach-3',
            title: 'Best Club of the Year 2081',
            description:
                'Among 11 clubs formed at the campus, Youth Red Cross Circle was declared the Best Club of the Year 2081 during the campus Annual General Assembly.',
            date: '18 Bhadra 2082',
            category: 'Best Club',
            badge: 'Major Achievement',
            image: '/yrcs/achievement3.webp'
        },
        {
            id: 'ach-4',
            title: 'District Excellent Circle - 4th Time',
            description:
                'Youth Red Cross Circle was declared Excellent for the fourth time based on performance evaluation at the 40th Youth Junior Red Cross Seminar organized by NRCS Tanahun.',
            date: '7 Asar 2082',
            category: 'District Achievement',
            badge: '4th Time',
            image: '/yrcs/achievement4.webp'
        },
        {
            id: 'ach-5',
            title: 'District Excellent Circle - 5th Time',
            description:
                'Youth Red Cross Circle was declared Excellent for the fifth time based on performance evaluation at the 41st Youth Junior Red Cross Seminar organized by NRCS Tanahun.',
            date: '6 Asar 2083',
            category: 'District Achievement',
            badge: '5th Time',
            image: '/yrcs/achievement5.webp'
        }
    ],

    activities: [
        {
            id: 'act-1',
            title: 'Y-ADAPT (TOT) Participation - Maldives',
            description:
                'Then-President Sunita Tiwari represented Aadikavi Bhanubhakta Campus Youth Red Cross Circle in the international climate change Y-ADAPT Training of Trainers program held in Malé, Maldives.',
            date: '11-18 July 2023',
            category: 'International',
            image: '/yrcs/activity1.webp'
        },
        {
            id: 'act-2',
            title: 'Mass Blood Donation Campaign',
            description:
                'A blood donation program organized on the occasion of the 59th Junior Youth Red Cross Day collected 104 pints of blood.',
            date: '22 Falgun 2080',
            category: 'Humanitarian Service',
            image: '/yrcs/activity2.webp'
        },
        {
            id: 'act-3',
            title: 'Community Health Checkup & Counseling Camp',
            description:
                'A large-scale community health checkup and counseling camp was organized at Gajure Health Post, Vyas-9, where more than 500 local residents received health checkups and counseling services.',
            date: '16 Bhadra 2080',
            category: 'Health Service',
            image: '/yrcs/activity3.webp'
        },
        {
            id: 'act-4',
            title: 'Educational Materials Distribution Program',
            description:
                'Educational materials were distributed to 30 students of Siddhabeni Basic School, Vyas-13, as part of a wider educational materials collection campaign.',
            date: '26 Baishakh 2081 / 8 May 2024',
            category: 'Community Service',
            image: '/yrcs/activity4.webp'
        },
        {
            id: 'act-5',
            title: 'Basic First Aid Training',
            description:
                'A one-day basic first aid training program was organized at the Campus Hall with technical support from the NRCS District Branch.',
            date: '24 Chaitra 2080',
            category: 'Training',
            image: '/yrcs/activity5.webp'
        }
    ],

    participation: [
        {
            id: 'p1',
            title: 'Asia Pacific Youth Mobilization Summit 2023',
            level: 'International',
            participants: 'Sandesh Adhikari',
            date: '15-18 June 2023',
            location: 'Kuala Lumpur, Malaysia'
        },
        {
            id: 'p2',
            title: 'Y-Adapt Sub-Regional Training of Facilitators',
            level: 'International',
            participants: 'Sunita Tiwari',
            date: '30 June - 8 July 2023',
            location: 'Malé, Maldives'
        },
        {
            id: 'p3',
            title: 'National Youth Leadership Development Training',
            level: 'National',
            participants: 'Suman Khadka',
            date: '9-11 June 2023',
            location: 'Tanahun'
        },
        {
            id: 'p4',
            title: '41st National Junior/Youth Red Cross Seminar',
            level: 'National',
            participants: 'Suman Khadka',
            date: '7-8 Poush 2080',
            location: 'Pokhara'
        },
        {
            id: 'p5',
            title: 'Youth Capacity Development - Trainers Training',
            level: 'Provincial',
            participants: 'Puspa Pandit',
            date: '1-5 October 2023',
            location: 'Pokhara'
        },
        {
            id: 'p6',
            title: 'Gandaki Province Junior/Youth Red Cross Seminar',
            level: 'Provincial',
            participants: 'Mausami Thapa',
            date: '',
            location: 'Gandaki Province'
        },
        {
            id: 'p7',
            title: '40th Tanahun District Seminar',
            level: 'District',
            participants:
                'Rupak Shrestha, Suman Khadka, Roshan Ojha, Roshni Kunwar',
            date: '6-7 Asar 2082',
            location: 'Satyawati S.S., Vyas-2'
        },
        {
            id: 'p8',
            title: 'Vyas Municipality Speech Competition',
            level: 'District',
            participants: 'Mausami Thapa',
            date: '19 Bhadra 2080',
            location: 'Satyawati S.S.'
        },
        {
            id: 'p9',
            title: 'District Quiz Competition',
            level: 'District',
            participants: 'Mausami Thapa, Pinka Tiwari, Kunjan Shrestha',
            date: '26 Magh 2080',
            location: 'Pabitra Ma.Vi.'
        },
        {
            id: 'p10',
            title: 'Basic First Aid Training',
            level: 'District',
            participants: 'Roshan Ojha, Sushila Lamsal',
            date: '11-12 Falgun 2080',
            location: 'Maharishi Ma.Vi., Vyas-3'
        },
        {
            id: 'p11',
            title: '41st Tanahun District Seminar',
            level: 'District',
            participants: 'Sanjip Gurung, Sadiksha Paudel',
            date: '5-6 Asar 2083',
            location: 'Barahi Ma.Vi., Vyas-13'
        }
    ],

    galleryItems: [
        {
            id: 'gal-yrcs-1',
            title: '',
            date: '',
            category: 'Activities',
            description: '',
            image: '/yrcs/g1.webp'
        },
        {
            id: 'gal-yrcs-2',
            title: '',
            date: '',
            category: 'Activities',
            description: '',
            image: '/yrcs/g2.webp'
        },
        {
            id: 'gal-yrcs-3',
            title: '',
            date: '',
            category: 'Activities',
            description: '',
            image: '/yrcs/g3.webp'
        },
        {
            id: 'gal-yrcs-4',
            title: '',
            date: '',
            category: 'Activities',
            description: '',
            image: '/yrcs/g4.webp'
        },
        {
            id: 'gal-yrcs-5',
            title: '',
            date: '',
            category: 'Activities',
            description: '',
            image: '/yrcs/g5.webp'
        }
    ],

    contactInfo: {
        email: 'aadikaviyouthcrosscircle@gmail.com',
        facebook: 'https://www.facebook.com/yuabcampus',
        phone: '065-590096',
        mobile: '+977 9806580089'
    }
};
export const abitClubData: Club = {
    id: 'abit-club',
    name: 'ABIT Club',
    nepaliName: 'एबीआइटी क्लब',
    category: 'Technology',
    logo: '../abit.jpg',
    accentColor: '#1d4ed8',
    description: 'The premier Information Technology student committee at Aadikavi Bhanubhakta Campus. Dedicated to fostering software development, artificial intelligence skills, cybersecurity awareness, web technologies, and tech innovation among students.',
    shortDescription: 'Empowering students in IT innovation, coding bootcamps, AI workshops, and hackathons.',
    establishedYear: 2018,
    memberCount: 120,
    facultyAdvisor: 'Er. Ghan Bahadur Thapa',
    president: 'Biwash Ranabhat',
    meetingSchedule: '',
    roomLocation: 'IT Building',
    contactEmail: 'abit.club@abcampus.edu.np',
    aboutImages: [
        '../abit/group.webp',
        '../abit/023.webp',
        '../abit/024.webp'
    ],
    featured: true,
    vision: 'To make Aadikavi Bhanubhakta Campus the leading force in technology across Tanahun District by helping students learn practical skills and inspiring the wider community through innovation.',
    certificate: {
        isRegistered: false,
        certificateNumber: 'ABC-IT-REG-2075/018',
        registeredDate: 'July 28, 2018 (2075-04-12)',
        registeredDateNp: '२०७५/०४/१२',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus - Student Welfare & Extra-Curricular Directorate',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस - विद्यार्थी कल्याण तथा अतिरिक्त क्रियाकलाप निर्देशनालय',
        registrationType: 'Recognized Autonomous IT Student Committee',
        validUntil: 'Academic Year 2083/84 (Active & Renewed)',
        certificateImage: '',
        remarks: 'Officially accredited student technology committee operating under the Department of Computer Science & Information Technology.'
    },
    mission: [
        'Teach students practical coding and tech skills through easy, hands-on learning.',
        'Organize workshops, bootcamps, and hackathons for all students.',
        'Connect students with real projects and industry mentors.',
        'Lead and inspire tech growth across Tanahun District.'
    ],
    presidentMessage: {
        senderName: 'Biwash Ranabhat',
        senderRole: 'President, ABIT Club',
        message: 'ABIT Club is a place where ideas become opportunities and students become confident creators. Together, let us learn from one another, build meaningful solutions and lead with purpose.',
        avatarUrl: '/abit/bibash.webp'
    },
    advisorMessage: {
        senderName: 'Er. Ghan Bahadur Thapa',
        senderRole: 'Club Advisor',
        message: 'ABIT Club has consistently led technical excellence on campus. We encourage students from all faculties to join our workshops and embrace digital literacy.',
        avatarUrl: '/abit/ghan.webp'
    },
    manifesto: {
        title: 'ABIT IT Code of Conduct',
        points: [
            'Open Access: Coding workshops and tech bootcamps remain 100% free for all enrolled campus students.',
            'Practical Mastery: Every member completes at least one hands-on software project per academic year.',
            'Ethics & Security: Promoting ethical hacking, cyber security awareness, and data privacy.',
            'Peer Mentorship: Senior IT students mentor junior members in programming fundamentals.'
        ]
    },
    history: 'ABIT Club was founded in 2018 by IT faculty members and enthusiastic BIM students. From a small study circle, it has grown into an active committee with over 120 members, managing campus digital initiatives and hosting Tanahun Tech Fest.',
    historyMilestones: [
        {
            category: 'WHEN IT ALL BEGAN',
            year: '2018',
            title: 'History',
            desc: '',
            image: ''
        }
    ],
    leadership: [
        {
            id: 'l1',
            name: 'Biwash Ranabhat',
            role: 'President',
            department: 'BICTE 8th Semester',
            email: '',
            facebook: 'https://www.facebook.com/ranabhat.biwash.0',
            avatarUrl: '../abit/bibash.webp'
        },
        {
            id: 'l2',
            name: 'Rajib Ranabhat',
            role: 'Vice President',
            department: 'BICTE 6th Semester',
            email: '',
            facebook: 'https://www.facebook.com/rajib.ranabhat.39',
            avatarUrl: '/abit/rajip.webp'
        },
        {
            id: 'l3',
            name: 'Suraj Bishwakarma',
            role: 'Secretary',
            department: 'BICTE 6th Semester',
            email: '',
            facebook: 'https://www.facebook.com/suraj.sadashankar.18',
            avatarUrl: '/abit/suraj.webp',
        },
        {
            id: 'l4',
            name: 'Prerana Thapa',
            role: 'Treasurer',
            department: 'BICTE 6th Semester',
            email: '',
            facebook: 'https://www.facebook.com/prerana.24.07',
            avatarUrl: '/abit/prerna.webp',
        },
        {
            id: 'l5',
            name: 'Ashim Chhetri',
            role: 'Joint Secretary',
            department: 'BICTE 5th Semester',
            email: '',
            facebook: 'https://www.facebook.com/profile.php?id=61592186128037',
            avatarUrl: '/abit/ashim.webp'
        },
        {
            id: 'l6',
            name: 'Rohit Thapa',
            role: 'Spokesperson',
            department: 'BICTE 8th Semester',
            email: '',
            facebook: 'https://www.facebook.com/rohit.jung.137609',
            avatarUrl: '/abit/rohit.webp'
        },
        {
            id: 'l7',
            name: 'Samikshya Shrestha',
            role: 'Member',
            department: 'BICTE 5th Semester',
            email: '',
            facebook: 'https://www.facebook.com/samikshya.shrestha.369658',
            avatarUrl: '/abit/samikshya.webp'
        },
        {
            id: 'l8',
            name: 'Diwash Bastola',
            role: 'Member',
            department: 'BICTE 5th Semester',
            email: '',
            facebook: 'https://www.facebook.com/dibash.banstola.5',
            avatarUrl: '/abit/dibash.webp'
        },
        {
            id: 'l9',
            name: 'Nisha Giri',
            role: 'Member',
            department: 'BICTE 6th Semester',
            email: '',
            facebook: 'https://www.facebook.com/profile.php?id=61577742166264',
            avatarUrl: '/abit/nisha.webp'
        },
        {
            id: 'l10',
            name: 'Diwash Ranabhat',
            role: 'Member',
            department: 'BICTE 6th Semester',
            email: '',
            facebook: 'https://www.facebook.com/',
            avatarUrl: '/abit/diwash.webp'
        },
        {
            id: 'l11',
            name: 'Biwash Ranabhat',
            role: 'Member',
            department: 'BICTE 8th Semester',
            email: '',
            facebook: 'https://www.facebook.com/',
            avatarUrl: '/abit/bibmem.webp'
        },
        {
            id: 'l12',
            name: 'Er. Ghan Bahadur Thapa',
            role: 'Club Advisor',
            department: 'Department of Computer Science & IT',
            email: '',
            facebook: 'https://www.facebook.com/aonjand.thapa',
            avatarUrl: '/abit/ghan.webp'
        },
        {
            id: 'l23',
            name: 'Mahaprashad Hadkhale',
            role: 'Club Advisor',
            department: 'Department of Computer Science & IT',
            email: '',
            facebook: 'https://www.facebook.com/maha.prasad.hadkhale.2025',
            avatarUrl: '/abit/maha.webp'
        },
    ],
    achievements: [],
    achievementItems: [
        {
            id: 'ach-1',
            title: 'Best Student Club of the Year',
            description: 'ABIT Club was honored with the Best Student Club Award 2023 for its outstanding contribution to technology education and innovation on campus.',
            date: 'September 2023',
            category: 'Best Club',
            badge: 'Major Milestone',
            image: '/abit/023.webp'
        },
        {
            id: 'ach-2',
            title: 'Best Club of the Year',
            description: "ABIT Club was honored with the Best Student Club Award 2024, recognizing its continued excellence in technology education, innovation, and student-led digital initiatives. This marked the club's second consecutive year receiving the award, reflecting its sustained impact on campus.",
            date: 'September 2024',
            category: 'Best Club',
            badge: 'Major Milestone',
            image: '/abit/024.webp'
        }
    ],

    galleryItems: [
        
        {
            id: 'gal-abit-1',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g1.webp'
        },
        {
            id: 'gal-abit-2',
            title: '',
            date: '202',
            category: 'Workshop',
            description: '',
            image: '/abit/g2.webp'
        },
        {
            id: 'gal-abit-3',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g3.webp'
        },
        {
            id: 'gal-abit-4',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image:'/abit/g4.webp'
        },
        {
            id: 'gal-abit-5',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g5.webp'
        },
        {
            id: 'gal-abit-6',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g6.webp'
        },
    
        {
            id: 'gal-abit-7',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g7.webp'
        },

        {
            id: 'gal-abit-8',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g8.webp'
        }
        ,
        {
            id: 'gal-abit-9',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g9.webp'
        }
        ,
        {
            id: 'gal-abit-10',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g10.webp'
        }
        ,
        {
            id: 'gal-abit-11',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g11.webp'
        } ,
        {
            id: 'gal-abit-12',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g12.webp'
        }
         ,
        {
            id: 'gal-abit-13',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g13.webp'
        }
         ,
        {
            id: 'gal-abit-14',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/image1.webp'
        }
         ,
        {
            id: 'gal-abit-15',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/image2.webp'
        }
         ,
        {
            id: 'gal-abit-16',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/image3.webp'
        }
         ,
        {
            id: 'gal-abit-17',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/image4.webp'
        }
         ,
        {
            id: 'gal-abit-18',
            title: '',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/image5.webp'
        }
    ]
};

export const alumniWelfareData: Club = {
    id: 'free-student-union',
    name: 'Free Student Union',
    nepaliName: 'स्वतन्त्र विद्यार्थी युनियन ',
    category: 'Student Welfare',
    logo: '/fsu/logo1.webp',
    accentColor: '#991b1b',
    shortDescription: 'The central student union guarding student rights, campus welfare and institutional growth.',
    memberCount: 2400,
    president: 'Anup Aale Magar',
    featured: true,
    
};

export const bbaClubData: Club = {
    id: 'bba-cloud',
    name: 'ABC BBA Student Cloud',
    nepaliName: 'एबीसी बीबीए विद्यार्थी क्लाउड',
    category: 'Management',
    logo: '/bbalogo.webp',
    accentColor: '#1d4ed8',
    description: 'ABC BBA Student Cloud is a student-led platform at Aadikavi Bhanubhakta Campus, dedicated to the academic, professional, and personal growth of BBA students. Through seminars, training sessions, and field visits, the club builds leadership, teamwork, and practical skills, fostering a united and collaborative student community.',
    establishedYear: 2076,
    memberCount: 85,
    facultyAdvisor: 'Chij Kumar Shrestha',
    president: 'Ashim Bhandari',
    meetingSchedule: '',
    roomLocation: 'BBA Building',
    contactEmail: 'bbastudentcloud1@gmail.com',
    featured: true,
    vision: 'To be a leading student platform that empowers BBA students through diverse academic, professional, and leadership opportunities, fostering a skilled and collaborative student community.',
    certificate: {
        isRegistered: false,
        certificateNumber: 'ABC-BBA-REG-2076/009',
        registeredDate: 'September 4, 2019 (2076-05-18)',
        registeredDateNp: '२०७६/०५/१८',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus - Faculty of Management & Student Affairs',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस - व्यवस्थापन संकाय तथा विद्यार्थी कल्याण शाखा',
        registrationType: 'Accredited Departmental Student Organization',
        validUntil: 'Academic Year 2083/84 (Active & Renewed)',
        certificateImage: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200&auto=format&fit=crop&q=80',
        remarks: 'Certified student association empowering BBA scholars in leadership, management summits, and business innovation.'
    },
    mission: [
        'ABC BBA Student Cloud is committed to organizing seminars, workshops, training sessions, and community-oriented initiatives in coordination with Aadikavi Bhanubhakta Campus. Through these programs, the club aims to enhance student practical knowledge, leadership abilities, communication skills, and professional competence.'
    ],
    presidentMessage: {
        senderName: 'Ashim Bhandari',
        senderRole: 'President, BBA Summit Circle',
        message: 'It is a privilege to serve as President of ABC BBA Student Cloud, dedicated to the academic, professional, and personal growth of BBA students. We provide a platform for students to connect, collaborate, and build leadership through academic and extracurricular activities, believing true learning extends beyond the classroom. We remain committed to fostering a culture of unity, teamwork, and excellence. I encourage all BBA students to actively participate and help make our club stronger and more impactful.',
        avatarUrl: '../bba/asim.webp'
    },
    advisorMessage: {
        senderName: 'Chij Kumar Shrestha',
        senderRole: 'Club Advisor, BBA Program Head',
        message: 'BBA Summit provides an exceptional platform for students to hone strategic thinking, business ethics, and entrepreneurial initiative.',
        avatarUrl: '../bba/chij2.webp'
    },
    manifesto: {
        title: 'BBA Summit Leadership & Professional Ethics Manifesto',
        points: [
            'hh: Promote unity, leadership, academic excellence, teamwork, and personal development among BBA students. ',
            'hh :Encourage active participation in academic, cultural, social, sports, and extracurricular activities. ',
            'hh: Provide opportunities to build practical skills, share ideas, showcase talents, and take on leadership responsibilities. ',
            'hh: Contribute to the overall growth, confidence, and professional development of BBA students at Aadikavi Bhanubhakta Campus'
        ]
    },
    history: 'Established in 2076 B.S. at Aadikavi Bhanubhakta Campus, Damauli, Tanahun, ABC BBA Student Cloud brings BBA students together on a common platform for academic growth, leadership, teamwork, and communication. Founded under the leadership of its first President, Samundra Dhakal, the club encourages student participation in academic, social, cultural, sports, and leadership activities. Today, it continues to serve as a student-led platform fostering collaboration and the overall development of BBA students within the campus',
    leadership: [
        {
            id: 'bba1',
            name: 'Chij Kumar Shrestha',
            role: 'Club Advisor',
            department: 'Department of Management',
            email: '',
            avatarUrl: '../bba/chij2.webp'
        },
        {
            id: 'bba2',
            name: 'Ashim Bhandari',
            role: 'President',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/asim.webp',
            email: ""
        }
        ,
        {
            id: 'bba3',
            name: 'Shreedhar Khatri',
            role: 'Vice - President',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/sri.webp',
            email: ""
        },
        {
            id: 'bba4',
            name: 'Shristi Shrestha',
            role: 'Secretary',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/sristi.webp',
            email: ""
        },
        {
            id: 'bba5',
            name: 'Sushma Thapa',
            role: 'Joint - Secretary',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/susma.webp',
            email: ""
        },
        {
            id: 'bba6',
            name: 'Sabita Adhikari',
            role: 'Treasurer',
            department: 'BBA 8th Semester',
            avatarUrl: '../bba/sabita.webp',
            email: ""
        },
        {
            id: 'bba7',
            name: 'Safalta Gauli',
            role: 'Spokesperson',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/safalta.webp',
            email: ""
        },
        {
            id: 'bba8',
            name: 'Kripa Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/kripa.webp',
            email: ""
        },
        {
            id: 'bba9',
            name: 'Sapana Thapa',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/sapana.webp',
            email: ""
        },
        {
            id: 'bba10',
            name: 'Bishnu Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/bisnu.webp',
            email: ""
        },
        {
            id: 'bba11',
            name: 'Bipin Adhikari',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/bipin.webp',
            email: ""
        },
        {
            id: 'bba12',
            name: 'Sumitra Dhungana',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/sumitra.webp',
            email: ""
        },
        {
            id: 'bba13',
            name: 'Apshara Thakuri',
            role: 'Member',
            department: 'BBA 4th Semester',
            avatarUrl: '../bba/apsara.webp',
            email: ""
        },
        {
            id: 'bba14',
            name: 'Sujata B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/sujata.webp',
            email: ""
        },
        {
            id: 'bba15',
            name: 'Sadiksha Adhikari',
            role: 'Member',
            department: 'BBA 4th Semester',
            avatarUrl: '../bba/sadik.webp',
            email: ""
        },
        {
            id: 'bba16',
            name: 'Jamira Miya',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/jamira.webp',
            email: ""
        },
        {
            id: 'bba17',
            name: 'Asmita B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/asmita.webp',
            email: ""
        },
        {
            id: 'bba18',
            name: 'Jharana Sapkota',
            role: 'Member',
            department: 'BBA 6th Semester',
            avatarUrl: '../bba/jharna.webp',
            email: ""
        }
    ],
    achievements: [],
    achievementItems: [],
    galleryItems: [

    ]
};

export const abccricket: Club = {
    id: 'abc-cricket-club',
    name: 'ABC Cricket Club',
    nepaliName: 'एबीसी क्रिकेट क्लब',
    category: 'Sports',
    logo: '../cricket/crilogo.webp',
    accentColor: '#b45309',
    description: 'The ABC Cricket Club is dedicated to promoting cricketing excellence and fostering a love for the game among students.',
    shortDescription: 'Promoting cricketing excellence and fostering a love for the game among students.',
    establishedYear: 2081,
    memberCount: 15,
    clubAdvisor: 'Dikpal Adhikari' + ' ' + 'Shiva Mishra',
    president: 'Pramish Neupane',
    meetingSchedule: 'Saturdays at 11:00 AM',
    roomLocation: 'Campus Main Building',
    contactEmail: 'npramish1@gmail.com',
    vision: 'To be a leading sports club on campus that nurtures cricketing talent and builds a strong sporting culture among students.',
    certificate: {
        isRegistered:false,
        certificateNumber: 'ABC-SPT-REG-2081/031',
        registeredDate: 'May 14, 2024 (2081-02-01)',
        registeredDateNp: '२०८१/०२/०१',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus - Sports & Physical Education Board',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस - खेलकुद तथा शारीरिक शिक्षा परिषद्',
        registrationType: 'Official Campus Sports Organization',
        validUntil: 'Academic Year 2082/83 (Active)',
        certificateImage: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=1200&auto=format&fit=crop&q=80',
        remarks: 'Officially accredited student sports committee fostering athletic excellence and tournament coordination.'
    },
    mission: [
        "ABC Cricket Club is committed to developing players' skills through regular practice, coaching, and friendly matches. The club promotes teamwork, discipline, and physical fitness while encouraging students to actively participate in sports beyond academics.",
    ],
    presidentMessage: {
        senderName: 'Pramish Neupane',
        senderRole: 'President, ABC Cricket Club',
        message: 'As the President of ABC Cricket Club, I’m proud to be part of a team that believes in cricket, teamwork, and friendship. Grateful to everyone who supports us and helps make the club better. Let’s keep playing, improving, and growing together!',
    },

    manifesto: {
        title: 'ABC Cricket Club Manifesto',
        points: [
            'We believe in building a strong team spirit through discipline, hard work, and fair play.',
            'We aim to develop players cricketing skills while promoting physical fitness and teamwork.',
            'We encourage sportsmanship, respect, and healthy competition both on and off the field.',
            'We strive to represent our campus with pride and inspire more students to take up the sport.'
        ]
    },
    history: 'Founded in 2081, the club has organized numerous cricket tournaments and matches, fostering a strong sporting culture among students.',
     historyMilestones: [
        {
            category: 'WHEN IT ALL BEGAN',
            year: '2081',
            title: 'History',
            desc: '',
            image: ''
        }
    ],
    leadership: [
        {
            id: 'lit1',
            name: 'Shiva Mishra',
            role: 'Club Advisor',
            department: 'MA Nepali 2nd Year',
            email: '',
            avatarUrl: '/cricket/shiva.webp'
        },
        {
            id: 'lit2',
            name: 'Dikpal Adhikari',
            role: 'Club Advisor',
            department: 'MA Nepali 2nd Year',
            email: '',
            avatarUrl: '/cricket/dikpal.webp'
        },
        {
            id: 'lit3',
            name: 'Pramish Neupane',
            role: 'President',
            department: 'MA Nepali 2nd Year',
            email: '',
            avatarUrl: '/cricket/pramish.webp'
        },
        {
            id: 'lit4',
            name: 'Ram Shrestha',
            role: 'Vice President',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/laxg.webp'
        },
        {
            id: 'lit6',
            name: 'Bipin Adhikari',
            role: 'Secretary',
            department: '',
            email: '',
            avatarUrl: '/cricket/bipin.webp',
        },
        {
            id: 'lit7',
            name: 'Bipu Katila',
            role: 'Joint Secretary',
            department: 'BICTE 4th Semester',
            email: '',
            avatarUrl: '/cricket/bipug.webp'
        },
        {
            id: 'lit8',
            name: 'Bisham Thakuri',
            role: 'Treasurer',
            department: 'BICTE 4th Semester',
            email: '',
            avatarUrl: '/cricket/bisham.webp'
        },
        {
            id: 'lit9',
            name: 'Sabin Shrestha',
            role: 'Joint Treasurer',
            department: 'BICTE 4th Semester',
            email: '',
            avatarUrl: '/cricket/sabing.webp'
        },
        {
            id: 'lit10',
            name: 'Ashim Chhertri',
            role: 'Member',
            department: 'BICTE 4th Semester',
            email: '',
            avatarUrl: '/cricket/ashim.webp',
        },
        {
            id: 'lit11',
            name: 'Ankit Tiwari',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/ankit.webp'
        },
        {
            id: 'lit12',
            name: 'Mandip Bishural',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/mandip.webp'
        },
        {
            id: 'lit13',
            name: 'Sandip Thapa',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/sandip.webp'
        },
        {
            id: 'lit14',
            name: 'Sagar Raj Kumar',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/sagar.webp'
        },
        {
            id: 'lit15',
            name: 'Chandan Pariyar',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/chandan.webp'
        },
        {
            id: 'lit16',
            name: 'Sandesh Panthi',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            avatarUrl: '/cricket/sandesh.webp'
        }

    ],
    achievements: [],
    achievementItems: [],
    galleryItems: [
        
        {
            id: 'c1',
            title: 'Moment 1',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c2.webp'
        },
         {
            id: 'c2',
            title: 'Moment 2',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c3.webp'
        },
         {
            id: 'c3',
            title: 'Moment 3',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c4.webp'
        },
         {
            id: 'c4',
            title: 'Moment 4',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c5.webp'
        },
         {
            id: 'c5',
            title: 'Moment 5',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c6.webp'
        },
         {
            id: 'c6',
            title: 'Moment 6',
            date: '2025',
            category: '',
            description: '',
            image: '/cricket/c7.webp'
        }
    ]
};



export const managementclub: Club = {
    id: 'bbs-student',
    name: 'Student Management Circle',
    nepaliName: 'विद्यार्थी व्यवस्थापन वृत्त ',
    category: 'Management',
    logo: '/bbs/logo.webp',
    accentColor: '#0369a1',
    description: 'Promoting student mental and physical health, ergonomic wellness, financial literacy, taxation workshops, and auditing masterclasses tailored for campus students.',
    shortDescription: 'Student wellness, health awareness, financial literacy, tax seminars, and auditing.',
    establishedYear: 2010,
    memberCount: 160,
    facultyAdvisor: 'Ganesh Shrestha',
    president: 'Sita Adhikari',
    meetingSchedule: 'Tuesdays at 3:30 PM',
    roomLocation: 'BBS Block, Hall 102',
    contactEmail: 'bbs.circle@abcampus.edu.np',
    vision: 'To foster physical health, mental resilience, and financial acumen for holistic student success.',
    certificate: {
        isRegistered: true,
        certificateNumber: 'ABC-BBS-REG-2067/004',
        registeredDate: 'August 10, 2010 (2067-04-26)',
        registeredDateNp: '२०६७/०४/२६',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus - Commerce & Accountancy Division',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस - वाणिज्य तथा लेखा संकाय',
        registrationType: 'Institutional Commerce & Management Circle',
        validUntil: 'Academic Year 2083/84 (Active & Renewed)',
        certificateImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
        remarks: 'Pioneering student commerce circle promoting taxation masterclasses, banking orientations, and professional ethics.'
    },
    mission: [
        'Host campus health screenings and mental health wellness seminars.',
        'Conduct tax filing and personal financial literacy workshops.',
        'Organize yoga, meditation, and fitness sessions.'
    ],
    presidentMessage: {
        senderName: 'Sita Adhikari',
        senderRole: 'President, Health & Commerce Forum',
        message: 'Maintaining physical health and financial literacy are the two pillars of sustainable career growth.',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
    },
    advisorMessage: {
        senderName: 'Ganesh Shrestha',
        senderRole: 'Club Advisor',
        message: 'Healthy students build strong academic communities.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'Health & Professional Development Charter',
        points: [
            'Student Health Checks: Free health and fitness checks.',
            'Financial Education: Tax and budgeting seminars.'
        ]
    },
    history: 'Founded in 2010, the forum has organized health drives and tax workshops benefiting hundreds of students.',
    leadership: [
        {
            id: 'bbs1',
            name: 'Ganesh Shrestha',
            role: 'Club Advisor',
            department: 'Department of Accountancy',
            email: 'ganesh.shrestha@abcampus.edu.np',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'bbs2',
            name: 'Sita Adhikari',
            role: 'President',
            department: 'BBS 4th Year',
            email: 'sita.adhikari@student.abcampus.edu.np',
            avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [],
    achievementItems: [],
    galleryImages: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    ]
};


export const human: Club = {
    id: 'human-club',
    name: 'Humanities Club',
    nepaliName: 'मानविकी क्लब',
    category: 'Arts',
    logo: '../human/hlogo.webp',
    accentColor: '#7c3aed',

    description:
        'The Humanities Club at Aadikavi Bhanubhakta Campus is dedicated to promoting literature, language, culture, creativity, critical thinking, and social awareness among students. The club provides a platform for students to express ideas, explore creativity, and celebrate the richness of humanities and the arts.',

    shortDescription:
        'Promoting literature, creativity, culture, critical thinking, and student expression.',

    establishedYear: 2019,
    memberCount: 13,

    facultyAdvisor: '',
    president: 'Dilip Karki',

    meetingSchedule: '',
    roomLocation: 'Main Campus Building',

    contactEmail: 'humanities.club@abcampus.edu.np',

    featured: true,

    vision:
        'To create a vibrant intellectual and creative community where students develop critical thinking, cultural awareness, communication skills, and a deeper appreciation for literature, arts, and society.',

    certificate: {
        isRegistered: false,
        remarks: 'The Humanities Club registration is currently being compiled and reviewed by the Campus Student Affairs Committee for official certification.'
    },

    mission: [
        'Organize literary events, debates, essay competitions, poetry recitals, and creative writing programs.',
        'Promote Nepali literature, language, culture, arts, and heritage among students.',
        'Provide students with opportunities to develop communication, presentation, and critical-thinking skills.',
        'Encourage meaningful discussions on society, culture, education, and contemporary issues.'
    ],

    presidentMessage: {
        senderName: 'Dilip Karki',
        senderRole: 'President, Humanities Club',
        message: 'It is my great pleasure to welcome you to the Humanities Club. Our club is a platform where students can learn, share ideas, develop leadership skills, and express their creativity.As the President, I am committed to making the club more active, inclusive, and meaningful for every student. We will continue to organize educational, literary, cultural, and social programs that encourage students to discover their potential.I believe that the Humanities Club is not only about organizing programs; it is about building confidence, friendship, teamwork, and leadership among students.Let us work together, learn together, and create memorable experiences together.Thank you.',
        avatarUrl: ''
    },

    advisorMessage: {
        senderName: 'Club Advisor',
        senderRole: 'Club Advisor, Humanities Department',
        message:
            'The Humanities Club encourages students to think deeply, express themselves confidently, and appreciate literature, culture, and society. We welcome every student who wishes to learn, create, and contribute.',
        avatarUrl: ''
    },

    manifesto: {
        title: 'Humanities Club Values',

        points: [
            'Creative Expression: Provide every student with a platform to express ideas through writing, art, speech, and performance.',
            'Literary Appreciation: Promote Nepali and international literature through readings, discussions, and literary events.',
            'Cultural Heritage: Celebrate and preserve Nepals diverse languages, traditions, literature, and cultural practices.',
            'Critical Thinking: Encourage thoughtful discussion, debate, research, and awareness of contemporary social issues.'
        ]
    },

    history:
        'The Humanities Club was established to provide students with a dedicated platform for literary, cultural, and creative activities at Aadikavi Bhanubhakta Campus. Starting as a small group of students interested in literature and the arts, the club has grown into an active student community organizing literary programs, debates, cultural events, creative competitions, and awareness activities.',

    leadership: [
        {
            id: 'h1',
            name: '',
            role: 'Club Advisor',
            department: 'Department of Humanities',
            email: 'humanities@abcampus.edu.np',
            avatarUrl:
                ''
        },

        {
            id: 'h2',
            name: 'Dilip Karki',
            role: 'President',
            department: 'Humanities, 7th Semester',
            email: '',
            avatarUrl:
                ''
        },

        {
            id: 'h3',
            name: 'Suraj Sunar',
            role: 'Vice President',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl:
                ''
        },
        {
            id: 'h4',
            name: 'Pratigya Pandey',
            role: 'Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl:
                ''
        },
        {
            id: 'h5',
            name: 'Rohan Gurung',
            role: 'Joint - Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl:
                ''
        },
        {
            id: 'h6',
            name: 'Manisha Thapa Magar',
            role: 'Treasurer',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl:
                ''
        },
        {
            id: 'h7',
            name: 'Man Prashad Nepali',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h8',
            name: 'Sajina Ale',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h9',
            name: 'Bimala Sahi',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h10',
            name: 'Milan Pariyar',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h11',
            name: 'Saraswati Shrestha',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h12',
            name: 'Sanumati Basnet',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h13',
            name: 'Muskan Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        },
        {
            id: 'h14',
            name: 'Robin Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            avatarUrl: ''
        }
    ],

    achievements: [
       
    ],

    achievementItems: [
        
    ],

  galleryItems: [
        
        {
            id: 'h1',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g1.webp'
        },
           {
            id: 'h3',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g2.webp'
        },
           {
            id: 'h4',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g3.webp'
        },
           {
            id: 'h5',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g4.webp'
        },
           {
            id: 'h6',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g5.webp'
        },
           {
            id: 'h7',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g6.webp'
        },
           {
            id: 'h8',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g7.webp'
        },
           {
            id: 'h9',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g8.webp'
        },
           {
            id: 'h10',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g9.webp'
        },
           {
            id: 'h11',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g10.webp'
        },
           {
            id: 'h12',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g11.webp'
        },
           {
            id: 'h13',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g12.webp'
        },
           {
            id: 'h14',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/human/g13.webp'
        }
    ]
};
export const vyasABC: Club = {
    id: 'vyas abc',
    name: 'VYAS ABC',
    nepaliName: 'व्यास एबिसी (भिजनरी युथ फर अवेकनिङ सोसाइटी आदिकवि भानुभक्त क्याम्पस)',
    category: 'Humanitarian & Service',
    logo: '../vyas/vyaslogo.webp',
    accentColor: '#c026d3',
    description: '“Empowering youth with wisdom, values, and a Krishna-centered lifestyle. Visionary Youth for Awakening Society (VYAS).”',
    shortDescription: 'Preserving Nepalese heritage through folk dance, music ensembles, and cultural pageants.',
    establishedYear: 2082,
    memberCount: 5,
    president: 'Puspa Pandit',
    meetingSchedule: '',
    roomLocation: 'Campus Main Building',
    contactEmail: 'vyasabc0123@gmail.com',
    vision: 'VYAS ABC is dedicated to fostering the holistic development of students by promoting mental, emotional, physical, and spiritual well-being. The club aims to empower students to build resilience, manage stress effectively, and discover their full potential through a balanced and fulfilling approach to personal growth.',
     certificate: {
        isRegistered: true,
        certificateNumber: '03-067-03',
        registeredDate: '2082-06-14',
        registeredDateNp: '२०८२/०६/१४',
        issuingAuthority: 'Campus Chief, Aadikavi Bhanubhakta Campus',
        issuingAuthorityNp: 'क्याम्पस प्रमुख, आदिकवि भानुभक्त क्याम्पस',
        registrationType: 'Student Committee',
        certificateImage: '../vyas/certificate.webp',
        remarks: 'Officially registered student club under Aadikavi Bhanubhakta Campus, promoting youth awareness, leadership, and student engagement.'
    },
    mission: [
        'VYAS ABC works to support the overall growth of students by helping them stay mentally, emotionally, and physically healthy. The club helps students build strength, manage stress, and grow into their full potential.'
    ],
    presidentMessage: {
        senderName: 'Puspa Pandit',
        senderRole: 'President, VYAS ABC',
        message: 'It is my great pleasure to welcome you to VYAS ABC, where I get to work with a passionate team of students who want to make a positive difference on our campus and community. VYAS ABC is more than just a place for activities — it helps students build leadership, teamwork, and social responsibility through educational, cultural, and community programs. I believe real change starts with small efforts, and I encourage everyone to work together with unity and dedication. I want to thank the campus administration, teachers, advisors, and members for their constant support. Let us continue to learn, lead, serve, and inspire. Let us continue to learn, lead, serve, and inspire.',
        avatarUrl: '../vyas/pushpa.webp'
    },

    manifesto: {
        title: 'VYAS ABC Manifesto',
        points: [
            'We believe in the complete growth of every student — mind, body, and spirit.',
            'We create a safe and supportive space where students can learn and grow together.',
            'We help students build strength, manage stress, and reach their full potential.',
            'We promote a balanced and healthy way of life, both on and off campus.',
        ]
    },
    history: 'Founded in 2082, VYAS ABC has been a beacon of hope and inspiration for countless students, fostering a community dedicated to holistic development and social responsibility.',
     historyMilestones: [
        {
            category: 'WHEN IT ALL BEGAN',
            year: 'pending',
            title: 'History',
            desc: 'pending',
            image: ''
        }
    ],
    leadership: [

        {
            id: 'vy1',
            name: 'Puspa Pandit',
            role: 'President',
            department: 'BICTE 7th Semester',
            email: 'panditpuspa000@gmail.com',
            avatarUrl: '../vyas/pushpa.webp'
        },
        {
            id: 'vy2',
            name: 'Deepika Shrestha',
            role: 'Vice-President',
            department: 'BICTE 5th Semester',
            email: 'vyasabc0123@gmail.com',
            avatarUrl: '../vyas/deepika.webp'
        },
        {
            id: 'vy3',
            name: 'Anil Mahato',
            role: 'Secretary',
            department: 'BICTE 4th Semester',
            email: 'vyasabc0123@gmail.com',
            avatarUrl: '../vyas/anil.webp'
        },
        {
            id: 'vy4',
            name: 'Sweta khadka',
            role: 'Joint-secretary',
            department: 'BICTE 7th Semester',
            email: 'vyasabc0123@gmail.com',
            avatarUrl: '../vyas/sweta.webp'
        },
        {
            id: 'vy5',
            name: 'Kamal dauliya',
            role: 'Treasurer',
            department: 'BICTE 7th Semester',
            email: 'vyasabc0123@gmail.com',
            avatarUrl: '../vyas/kamal.webp'
        }
    ],
    achievements: [
       
    ],
    achievementItems: [
   

    ],

    galleryImages: [
        '../vyas/vyas1.webp',
        '../vyas/vyas2.webp'
    ],
    galleryItems: [
         {
            id: 'gal-abit-1',
            title: 'Moment 1',
            date: '202',
            category: 'Graduation',
            description: '',
            image: '/abit/g1.webp'
        }
    ]
};
export const scienceClubData: Club = {
    id: 'science-club',
    name: 'ABC Science Club',
    nepaliName: 'एबीसी विज्ञान क्लब',
    category: 'Science & Technology',
    logo: '/logo2.jpg',
    accentColor: '#059669',
    description: 'ABC Science Club is dedicated to developing scientific thinking, creativity, curiosity, and innovation among students by providing opportunities to explore, experiment, and learn beyond the classroom.',
    establishedYear: 2080,
    memberCount: 10,
    facultyAdvisor: 'To be updated',
    president: 'Rubi Khadka',
    meetingSchedule: 'Fridays at 3:30 PM',
    roomLocation: 'Science Building',
    contactEmail: 'rubikhadka302@gmail.com',
    featured: true,
    vision: 'To create a vibrant learning environment where students can discover their potential, develop practical and research-oriented skills, and use science and technology for the betterment of society and the community.',
    certificate: {
        isRegistered: true,
        certificateNumber: 'pending',
        registeredDate: 'pending',
        registeredDateNp: 'pending',
        issuingAuthority: 'pending',
        issuingAuthorityNp: 'pending',
        registrationType: 'pending',
        certificateImage: '../vyas/',
        remarks: ''
    },
    mission: [
        'The ABC Science Club is dedicated to developing scientific thinking, creativity, curiosity, and innovation among students by providing opportunities to explore, experiment, and learn beyond the classroom. Our motive is to encourage students to ask questions, solve real-life problems through scientific methods, share knowledge, and work collaboratively on innovative ideas and projects.'
    ],
    presidentMessage: {
        senderName: 'Rubi Khadka',
        senderRole: 'President, ABC Science Club',
        message: 'It is my great pleasure and honor to welcome you to the ABC Science Club. As the President, I believe that science is not only a subject we study but also a way of thinking, questioning, discovering, and creating solutions to real-world problems. Our club is a platform where students can share ideas, explore their curiosity, conduct experiments, develop innovative projects, and learn from one another. Together, we aim to build a culture of creativity, collaboration, research, and scientific thinking. I encourage every member to actively participate, ask questions without hesitation, and turn their ideas into meaningful actions. Let us work together to make the ABC Science Club a place where curiosity becomes knowledge, knowledge becomes innovation, and innovation contributes to a better future.',
        avatarUrl: '../science/rubi.webp'
    },
    manifesto: {
        title: 'ABC Science Club Scientific Thinking & Innovation Manifesto',
        points: [
            'Innovation: Develop scientific thinking, creativity, curiosity, and innovation among students.',
            'Exploration: Provide continuous opportunities to explore, experiment, and learn beyond traditional classroom boundaries.',
            'Inquiry: Encourage students to ask questions, share knowledge, and solve real-life problems using scientific methods.',
            'Collaboration: Collaborate on innovative projects and utilize science and technology for the betterment of society and the community.'
        ]
    },
    history: 'Formed at Aadikavi Bhanubhakta Campus, Damauli, Tanahun, the ABC Science Club serves as a student-led platform to promote scientific inquiry and hands-on learning. Through collaborative projects, laboratory exploration, observational programs, and field visits, the club creates a space where students discover their potential and connect scientific concepts to practical community solutions.',
    leadership: [
        {
            id: 'sci1',
            name: 'Rubi Khadka',
            role: 'President',
            department: 'B.Ed Science',
            avatarUrl: '../science/rubi.webp',
            email: '',
            facebook: ''
        },
        {
            id: 'sci2',
            name: 'Aadit Thapa',
            role: 'Vice - President',
            department: 'B.Ed Science',
            avatarUrl: '../science/adit.webp',
            email: '',
            facebook: ''
        },
        {
            id: 'sci3',
            name: 'Salina Majakoti',
            role: 'Secretary',
            department: 'B.Ed Science',
            avatarUrl: '../science/salina.webp',
            email: ''
        },
        {
            id: 'sci4',
            name: 'Ankita Ojha',
            role: 'Joint - Secretary',
            department: 'B.Ed Science',
            avatarUrl: '../science/ankita.webp',
            email: ''
        },
        {
            id: 'sci5',
            name: 'Sadikshya Thapa',
            role: 'Treasurer',
            department: 'B.Ed Science',
            avatarUrl: '../science/sadikshya.webp',
            email: ''
        },
        {
            id: 'sci6',
            name: 'Asmita Thapa',
            role: 'Member',
            department: 'B.Ed Science',
            avatarUrl: '../science/asmita.webp',
            email: ''
        },
        {
            id: 'sci7',
            name: 'Kanchan Bisural',
            role: 'Member',
            department: 'B.Ed Science',
            avatarUrl: '../science/kanchan.webp',
            email: ''
        },
        {
            id: 'sci8',
            name: 'Manisha Bhandari',
            role: 'Member',
            department: 'B.Ed Science',
            avatarUrl: '../science/manisha.webp',
            email: ''
        },
        {
            id: 'sci9',
            name: 'Roshani Adhikari',
            role: 'Member',
            department: 'B.Ed Science',
            avatarUrl: '../science/roshni.webp',
            email: ''
        },
        {
            id: 'sci10',
            name: 'Mandeep Malla',
            role: 'Member',
            department: 'B.Ed Science',
            avatarUrl: '',
            email: ''
        }
    ],
    achievements: [],
   galleryItems: [
    
    ]
};


// Master independent array of all 14 clubs with 0 external file dependencies
export const ALL_CLUBS: Club[] = [
    abitClubData,
    alumniWelfareData,
    bbaClubData,
    abccricket,
    managementclub,
    human,
    vyasABC,
    scienceClubData,
    RedCross
];

export const UPCOMING_EVENTS: ClubEvent[] = [
    //humanities events
     {
        id: 'h1',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: ' Educational Seminar',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An informative event organized by the club to provide students with valuable knowledge, practical insights, and opportunities to learn from experienced speakers through presentations, discussions, and interactive sessions.',
        image: '/soon.webp'
    },
     {
        id: 'h2',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: 'Speech & Presentation Competition',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An engaging event organized by the club to encourage students to develop their public speaking, communication, and presentation skills. Participants will have the opportunity to showcase their abilities, express ideas, and gain confidence in front of an audience.',
        image: '/soon.webp'
    },
     {
        id: 'h3',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: 'Essay & Creative Writing Competition',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An exciting event organized by the club to inspire students to express their thoughts, ideas, and creativity through written words. Participants will have the opportunity to showcase their writing skills, explore different genres, and receive feedback from experienced writers and judges.',
        image: '/soon.webp'
    }
    ,
     {
        id: 'h4',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: 'Inter-school/Inter-college Competition',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An exciting event organized by the club to foster collaboration, healthy competition, and cultural exchange among students from different schools and colleges. Participants will have the opportunity to showcase their talents, engage in friendly rivalry, and build connections with peers from diverse backgrounds.',
        image: '/soon.webp'
    }, 
     {
        id: 'h5',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: ' Farewell & Welcome Program',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'A special event to celebrate the achievements of graduating students and welcome new ones, fostering a sense of community and continuity within the club.',
        image: '/soon.webp'
    }, 
     {
        id: 'h6',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: 'Social Awareness Program',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An initiative to raise awareness about social issues and promote community engagement through discussions, workshops, and interactive sessions.',
        image: '/soon.webp'
    }, 
     {
        id: 'h7',
        clubId: 'human-club',
        clubName: 'Humanities Club',
        title: 'Career & Skill Development Program',
        date: '2026',
        time: 'Pending',
        venue: 'Pending',
        category: '',
        description: 'An initiative to provide students with opportunities to explore career paths, develop essential skills, and enhance their professional growth through workshops, seminars, and interactive sessions.',
        image: '/soon.webp'
    }, 
   //abit
   //redcross
   {
    id: 'yr1',
    clubId: 'yrcs-club',
    clubName: 'Youth Red Cross Circle',
    title: 'Disaster Management & Climate Change Awareness Program',
    date: '2026',
    time: 'Pending',
    venue: 'Pending',
    category: '',
    description: 'An upcoming awareness program focused on disaster management and climate change, aimed at equipping students with knowledge on risk reduction, preparedness, and environmental responsibility.',
    image: '/soon.webp'
},
{
    id: 'yr2',
    clubId: 'yrcs-club',
    clubName: 'Youth Red Cross Circle',
    title: 'Blood Donation Program',
    date: '2026',
    time: 'Pending',
    venue: 'Pending',
    category: '',
    description: 'An upcoming blood donation campaign organized by the Youth Red Cross Circle to promote humanitarian service and provide life-saving support to the community.',
    image: '/soon.webp'
},
];