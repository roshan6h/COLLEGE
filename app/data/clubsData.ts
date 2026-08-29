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

export interface LeadershipMember {
    id: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone?: string;
    avatarUrl: string;
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
    meetingSchedule: 'Every Friday at 3:30 PM',
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
        isRegistered: true,
        certificateNumber: 'ABC-IT-REG-2075/018',
        registeredDate: 'July 28, 2018 (2075-04-12)',
        registeredDateNp: '२०७५/०४/१२',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus - Student Welfare & Extra-Curricular Directorate',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस - विद्यार्थी कल्याण तथा अतिरिक्त क्रियाकलाप निर्देशनालय',
        registrationType: 'Recognized Autonomous IT Student Committee',
        validUntil: 'Academic Year 2083/84 (Active & Renewed)',
        certificateImage: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&auto=format&fit=crop&q=80',
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
        senderRole: 'Club Advisor, Dept of CS & IT',
        message: 'ABIT Club has consistently led technical excellence on campus. We encourage students from all faculties to join our workshops and embrace digital literacy.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'ABIT IT Code of Conduct & Innovation Charter',
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
            title: 'Founding Charter & Inception',
            desc: 'Husbanded by campus IT faculty and enthusiastic BICTE & BIM students, ABIT Club was established to bridge academic learning with hands-on coding and technological innovation.',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80'
        }
    ],
    leadership: [
        {
            id: 'l1',
            name: 'Biwash Ranabhat',
            role: 'President',
            department: 'BICTE 8th Semester',
            email: '',
            phone: '+977 9815178591',
            avatarUrl: '../abit/bibash.webp'
        },
        {
            id: 'l2',
            name: 'Rajib Ranabhat',
            role: 'Vice President',
            department: 'BICTE 6th Semester',
            email: '',
            phone: '+977 9815189764',
            avatarUrl: '/abit/rajip.webp'
        },
        {
            id: 'l3',
            name: 'Suraj Bishwakarma',
            role: 'Secretary',
            department: 'BICTE 6th Semester',
            email: '',
            phone: '+977 9819186920',
            avatarUrl: '/abit/suraj.webp',
        },
        {
            id: 'l4',
            name: 'Prerana Thapa',
            role: 'Treasurer',
            department: 'BICTE 6th Semester',
            email: '',
            phone: '+977 9829161624',
            avatarUrl: '/abit/prerna.webp',
        },
        {
            id: 'l5',
            name: 'Ashim Chhetri',
            role: 'Joint Secretary',
            department: 'BICTE 5th Semester',
            email: '',
            phone: '+977 9712062701',
            avatarUrl: '/abit/ashim.webp'
        },
        {
            id: 'l6',
            name: 'Rohit Thapa',
            role: 'Spokesperson',
            department: 'BICTE 8th Semester',
            email: '',
            phone: '+977 9709018353',
            avatarUrl: '/abit/rohit.webp'
        },
        {
            id: 'l7',
            name: 'Samikshya Shrestha',
            role: 'Member',
            department: 'BICTE 5th Semester',
            email: '',
            phone: '+977 9864378850',
            avatarUrl: '/abit/samikshya.webp'
        },
        {
            id: 'l8',
            name: 'Diwash Bastola',
            role: 'Member',
            department: 'BICTE 5th Semester',
            email: '',
            phone: '+977 9844927162',
            avatarUrl: '/abit/dibash.webp'
        },
        {
            id: 'l9',
            name: 'Nisha Giri',
            role: 'Member',
            department: 'BICTE 6th Semester',
            email: '',
            phone: '+977 9709018440',
            avatarUrl: '/abit/nisha.webp'
        },
        {
            id: 'l10',
            name: 'Diwash Ranabhat',
            role: 'Member',
            department: 'BICTE 6th Semester',
            email: '',
            phone: '+977 9762861070',
            avatarUrl: '/abit/diwash.webp'
        },
        {
            id: 'l11',
            name: 'Biwash Ranabhat',
            role: 'Member',
            department: 'BICTE 8th Semester',
            email: '',
            phone: '+977 9707529958',
            avatarUrl: '/abit/bibmem.webp'
        },
           {
            id: 'l12',
            name: 'Er. Ghan Bahadur Thapa',
            role: 'Club Advisor',
            department: 'Department of Computer Science & IT',
            email: 'ghanbahadur@abcampus.edu.np',
            phone: '+977 9841154498',
            avatarUrl: '/abit/ghan.webp'
        },
        {
            id: 'l23',
            name: 'Mahaprashad Hadkhale',
            role: 'Club Advisor',
            department: 'Department of Computer Science & IT',
            email: 'mahaprashad@abcampus.edu.np',
            phone: '+977 9856012345',
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
            category: 'Graduation',
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
    name: 'Free Student Union & Alumni Welfare',
    nepaliName: 'स्वतन्त्र विद्यार्थी युनियन तथा पूर्वविद्यार्थी कल्याण',
    category: 'Student Welfare',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTjRGdyZbbonJMArck2KAjZKW90z39NnSUFKCejek5yjEyOC_93E0sgxFCj76NJUsqWvFokGGa2RIfFWQikaX4XR8CmX1M8mmcQq4VIqRV0h8QKQDdPR3uExr1dpHswI2HME96rnsuKI2-3x9xOs6G2XLSS-jtc-s2s6IJ7SGOsHHFUSTX2LwSuJpkiB3tSWK1JWeVlBJbM8CUNHcwz7CkdrxWrpyDvRpsLf3jFnFo1pVzCaJqhi7iEdUq2tzHs_StIdsKEhTIIIhNPA',
    accentColor: '#991b1b',
    description: 'The elected official governing body for all students at Aadikavi Bhanubhakta Campus. FSU works tirelessly to protect student rights, enhance campus infrastructure, coordinate cross-committee activities, and connect active students with the global alumni network.',
    shortDescription: 'The central student union guarding student rights, campus welfare, alumni connections, and institutional growth.',
    establishedYear: 1987,
    memberCount: 2400,
    facultyAdvisor: 'Campus Chief - Prof. Dr. Bhoj Raj Kafle',
    president: 'Anup Aale Magar',
    meetingSchedule: 'Bi-weekly Sunday at 2:00 PM',
    roomLocation: 'FSU Secretariat, Main Admin Wing',
    contactEmail: 'fsu@abcampus.edu.np',
    featured: true,
    vision: 'To serve as a resilient voice for student rights, campus excellence, and a vibrant lifelong alumni network.',
    mission: [
        'Safeguard student welfare, library resources, and academic equity.',
        'Establish an active Alumni Mentorship & Career Guidance network.',
        'Organize the annual Campus Week and inter-college sports championships.'
    ],
    presidentMessage: {
        senderName: 'Anup Aale Magar',
        senderRole: 'President, Free Student Union',
        message: 'Welcome fellow students and alumni! FSU stands firm as the voice of every student at Aadikavi Bhanubhakta Campus. We invite you to stay engaged and contribute to our campus community.',
        avatarUrl: '../fsu/anup.webp'
    },
    advisorMessage: {
        senderName: 'Prof. Dr. Bhoj Raj Kafle',
        senderRole: 'Campus Chief',
        message: 'Student leadership and alumni relations are integral to institutional quality. FSU continues to lead campus development with high dedication.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    manifesto: {
        title: 'FSU Student Welfare Charter',
        points: [
            'Student Defense: Unwavering commitment to student rights and academic fairness.',
            'Infrastructure Expansion: Upgrading digital library, canteen hygiene, and campus sports fields.',
            'Alumni Connection: Creating career placement pathways with distinguished ABC alumni.'
        ]
    },
    history: 'Founded in 1987 alongside the establishment of Aadikavi Bhanubhakta Campus, FSU has spearheaded decades of academic advancements, campus expansions, and alumni welfare initiatives.',
    leadership: [
        {
            id: 'fsu1',
            name: 'Anup Aale Magar',
            role: 'President',
            department: 'MBS 2nd Year',
            email: 'anup.magar@student.abcampus.edu.np',
            phone: '+977 9856098765',
            avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'fsu2',
            name: 'Saraswati Devkota',
            role: 'Vice President',
            department: 'MA Nepali',
            email: 'saraswati.d@student.abcampus.edu.np',
            phone: '+977 9846234567',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'fsu3',
            name: 'Deepak Raj Thapa',
            role: 'Secretary',
            department: 'BBS 4th Year',
            email: 'deepak.thapa@student.abcampus.edu.np',
            phone: '+977 9860345678',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
        }
    ],
    achievements: [],
    achievementItems: [],
    galleryImages: [
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80'
    ]
};

export const bbaClubData: Club = {
    id: 'bba-cloud',
    name: 'ABC BBA Student Cloud',
    nepaliName: 'एबीसी बीबीए विद्यार्थी क्लाउड',
    category: 'Management',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzUnP6eSb8SEAUNO-OUesJ2keSdthciymO40Cl281oQvu0Z6K9e9vEN3jfIL8FyM0cqoaDXulhAVrJTq4KX7BqmwuYNzXitE8Bg7hTTz38qgownOQKZUGnZ0y_oL6FVRzNUw_Kk-wOtYFufn_WTwgEycekVZXEtDOFlw8D1IddoCdmf0pgnc5Z2SjcjuAc6l6Pyh-fL-e32hXYQM9XZY-lzfwVLbleDx_KDouzX24FnpCA_u9HpD-2TEw3eotxPkPAE45vEmKQrtP_jA',
    accentColor: '#1d4ed8',
    description: 'ABC BBA Student Cloud is a student-led platform at Aadikavi Bhanubhakta Campus, dedicated to the academic, professional, and personal growth of BBA students. Through seminars, training sessions, and field visits, the club builds leadership, teamwork, and practical skills, fostering a united and collaborative student community.',
    establishedYear: 2076,
    memberCount: 85,
    facultyAdvisor: 'Chij Kumar Shrestha',
    president: 'Ashim Bhandari',
    meetingSchedule: 'Wednesdays at 4:00 PM',
    roomLocation: 'Management Block, Conference Hall B',
    contactEmail: 'bbastudentcloud1@gmail.com',
    featured: true,
    vision: 'To be a leading student platform that empowers BBA students through diverse academic, professional, and leadership opportunities, fostering a skilled and collaborative student community.',
    certificate: {
        isRegistered: true,
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
            phone: '+977 9856011223',
            avatarUrl: '../bba/chij2.webp'
        },
        {
            id: 'bba2',
            name: 'Ashim Bhandari',
            role: 'President',
            department: 'BBA 6th Semester',
            phone: '+977 9817152251',
            avatarUrl: '../bba/asim.webp',
            email: ""
        }
        ,
        {
            id: 'bba3',
            name: 'Shreedhar Khatri',
            role: 'Vice - President',
            department: 'BBA 6th Semester',
            phone: '+977 9829181846',
            avatarUrl: '../bba/sri.webp',
            email: ""
        },
        {
            id: 'bba4',
            name: 'Shristi Shrestha',
            role: 'Secretary',
            department: 'BBA 6th Semester',
            phone: '+977 9806765816',
            avatarUrl: '../bba/sristi.webp',
            email: ""
        },
        {
            id: 'bba5',
            name: 'Sushma Thapa',
            role: 'Joint - Secretary',
            department: 'BBA 6th Semester',
            phone: '+977 9829196990',
            avatarUrl: '../bba/susma.webp',
            email: ""
        },
        {
            id: 'bba6',
            name: 'Sabita Adhikari',
            role: 'Treasurer',
            department: 'BBA 8th Semester',
            phone: '+977 9824104395',
            avatarUrl: '../bba/sabita.webp',
            email: ""
        },
        {
            id: 'bba7',
            name: 'Safalta Gauli',
            role: 'Spokesperson',
            department: 'BBA 6th Semester',
            phone: '+9779701368577',
            avatarUrl: '../bba/safalta.webp',
            email: ""
        },
        {
            id: 'bba8',
            name: 'Kripa Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779817136160 ',
            avatarUrl: '../bba/kripa.webp',
            email: ""
        },
        {
            id: 'bba9',
            name: 'Sapana Thapa',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779806762359',
            avatarUrl: '../bba/sapana.webp',
            email: ""
        },
        {
            id: 'bba10',
            name: 'Bishnu Ranabhat',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779702722010 ',
            avatarUrl: '../bba/bisnu.webp',
            email: ""
        },
        {
            id: 'bba11',
            name: 'Bipin Adhikari',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779762861361',
            avatarUrl: '../bba/bipin.webp',
            email: ""
        },
        {
            id: 'bba12',
            name: 'Sumitra Dhungana',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779767561994',
            avatarUrl: '../bba/sumitra.webp',
            email: ""
        },
        {
            id: 'bba13',
            name: 'Apshara Thakuri',
            role: 'Member',
            department: 'BBA 4th Semester',
            phone: '+9779702618709',
            avatarUrl: '../bba/apsara.webp',
            email: ""
        },
        {
            id: 'bba14',
            name: 'Sujata B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779815166331',
            avatarUrl: '../bba/sujata.webp',
            email: ""
        },
        {
            id: 'bba15',
            name: 'Sadiksha Adhikari',
            role: 'Member',
            department: 'BBA 4th Semester',
            phone: '+9779815105797 ',
            avatarUrl: '../bba/sadik.webp',
            email: ""
        },
        {
            id: 'bba16',
            name: 'Jamira Miya',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779842268371 ',
            avatarUrl: '../bba/jamira.webp',
            email: ""
        },
        {
            id: 'bba17',
            name: 'Asmita B.K',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: '+9779769499653 ',
            avatarUrl: '../bba/asmita.webp',
            email: ""
        },
        {
            id: 'bba18',
            name: 'Jharana Sapkota',
            role: 'Member',
            department: 'BBA 6th Semester',
            phone: 'To be updated',
            avatarUrl: '../bba/jharna.webp',
            email: ""
        }
    ],
    achievements: [],
    achievementItems: [],
    galleryImages: [
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80'
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
        isRegistered: true,
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
    leadership: [
        {
            id: 'lit1',
            name: 'Shiva Mishra',
            role: 'Club Advisor',
            department: 'MA Nepali 2nd Year',
            email: '',
            phone: '+977 ',
            avatarUrl: '/cricket/shiva.webp'
        },
        {
            id: 'lit2',
            name: 'Dikpal Adhikari',
            role: 'Club Advisor',
            department: 'MA Nepali 2nd Year',
            email: '',
            phone: '+977 9846954665',
            avatarUrl: '/cricket/dikpal.webp'
        },
        {
            id: 'lit3',
            name: 'Pramish Neupane',
            role: 'President',
            department: 'MA Nepali 2nd Year',
            email: '',
            phone: '+977 9767279339',
            avatarUrl: '/cricket/pramish.webp'
        },
        {
            id: 'lit4',
            name: 'Ram Shrestha',
            role: 'Vice President',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977 9704703317',
            avatarUrl: '/cricket/laxg.webp'
        },
        {
            id: 'lit6',
            name: 'Bipin Adhikari',
            role: 'Secretary',
            department: '',
            email: '',
            phone: '+977 9762861361',
            avatarUrl: '/cricket/bipin.webp',
        },
        {
            id: 'lit7',
            name: 'Bipu Katila',
            role: 'Joint Secretary',
            department: 'BICTE 4th Semester',
            email: '',
            phone: '+977 9704506956',
            avatarUrl: '/cricket/bipug.webp'
        },
        {
            id: 'lit8',
            name: 'Bisham Thakuri',
            role: 'Treasurer',
            department: 'BICTE 4th Semester',
            email: '',
            phone: '+977 9806783037',
            avatarUrl: '/cricket/bisham.webp'
        },
        {
            id: 'lit9',
            name: 'Sabin Shrestha',
            role: 'Joint Treasurer',
            department: 'BICTE 4th Semester',
            email: '',
            phone: '+977 9812345678',
            avatarUrl: '/cricket/sabing.webp'
        },
        {
            id: 'lit10',
            name: 'Ashim Chhertri',
            role: 'Member',
            department: 'BICTE 4th Semester',
            email: '',
            phone: '+977 9712062701',
            avatarUrl: '/cricket/ashim.webp',
        },
        {
            id: 'lit11',
            name: 'Ankit Tiwari',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977 9704703317',
            avatarUrl: '/cricket/ankit.webp'
        },
        {
            id: 'lit12',
            name: 'Mandip Bishural',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977 ',
            avatarUrl: '/cricket/mandip.webp'
        },
        {
            id: 'lit13',
            name: 'Sandip Thapa',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977',
            avatarUrl: '/cricket/sandip.webp'
        },
        {
            id: 'lit14',
            name: 'Sagar Raj Kumar',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977 9820616913',
            avatarUrl: '/cricket/sagar.webp'
        },
        {
            id: 'lit15',
            name: 'Chandan Pariyar',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977',
            avatarUrl: '/cricket/chandan.webp'
        },
        {
            id: 'lit16',
            name: 'Sandesh Panthi',
            role: 'Member',
            department: 'BBS 2nd Year',
            email: '',
            phone: '+977',
            avatarUrl: '/cricket/sandesh.webp'
        }

    ],
    achievements: [],
    achievementItems: [],
    galleryImages: [
        '../cricket/c2.webp',
         '../cricket/c3.webp',
          '../cricket/c4.webp',
           '../cricket/c5.webp',
            '../cricket/c6.webp',
             '../cricket/c7.webp',
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
            phone: '+977 9856033445',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
        },
        {
            id: 'bbs2',
            name: 'Sita Adhikari',
            role: 'President',
            department: 'BBS 4th Year',
            email: 'sita.adhikari@student.abcampus.edu.np',
            phone: '+977 9867891234',
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

    facultyAdvisor: 'Club Advisor, Department of Humanities',
    president: 'Dilip Karki',

    meetingSchedule: 'Every Wednesday at 3:30 PM',
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
        title: 'Humanities Club Values & Creative Charter',

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
            phone: '+977 9856012345',
            avatarUrl:
                ''
        },

        {
            id: 'h2',
            name: 'Dilip Karki',
            role: 'President',
            department: 'Humanities, 7th Semester',
            email: '',
            phone: '+977 9824189131',
            avatarUrl:
                ''
        },

        {
            id: 'h3',
            name: 'Suraj Sunar',
            role: 'Vice President',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9826600026',
            avatarUrl:
                ''
        },
        {
            id: 'h4',
            name: 'Pratigya Pandey',
            role: 'Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9814163135',
            avatarUrl:
                ''
        },
        {
            id: 'h5',
            name: 'Rohan Gurung',
            role: 'Joint - Secretary',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815161226',
            avatarUrl:
                ''
        },
        {
            id: 'h6',
            name: 'Manisha Thapa Magar',
            role: 'Treasurer',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9707795101',
            avatarUrl:
                ''
        },
        {
            id: 'h7',
            name: 'Man Prashad Nepali',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9846723968',
            avatarUrl: ''
        },
        {
            id: 'h8',
            name: 'Sajina Ale',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9701682017',
            avatarUrl: ''
        },
        {
            id: 'h9',
            name: 'Bimala Sahi',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9816619897',
            avatarUrl: ''
        },
        {
            id: 'h10',
            name: 'Milan Pariyar',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815127704',
            avatarUrl: ''
        },
        {
            id: 'h11',
            name: 'Saraswati Shrestha',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9807241144',
            avatarUrl: ''
        },
        {
            id: 'h12',
            name: 'Sanumati Basnet',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9815189739',
            avatarUrl: ''
        },
        {
            id: 'h13',
            name: 'Muskan Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9826600545',
            avatarUrl: ''
        },
        {
            id: 'h14',
            name: 'Robin Thapa',
            role: 'Member',
            department: 'Humanities, 5th Semester',
            email: '',
            phone: '+977 9702003110',
            avatarUrl: ''
        }
    ],

    achievements: [
       
    ],

    achievementItems: [
        
    ],

    galleryImages: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=80'
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
    meetingSchedule: 'Fridays at 4:00 PM',
    roomLocation: 'Bhanubhakta Cultural Hall, Room 201',
    contactEmail: 'vyasabc0123@gmail.com',
    vision: 'VYAS ABC is dedicated to fostering the holistic development of students by promoting mental, emotional, physical, and spiritual well-being. The club aims to empower students to build resilience, manage stress effectively, and discover their full potential through a balanced and fulfilling approach to personal growth.',
    certificate: {
        isRegistered: true,
        certificateNumber: '०३/०८२/०८३',
        registeredDate: '२०८२/०८/१४ (बिहान ८:४३ बजे)',
        registeredDateNp: '२०८२/०८/१४',
        issuingAuthority: 'Aadikavi Bhanubhakta Campus, Vyas-01, Bigyanchaur, Tanahun',
        issuingAuthorityNp: 'आदिकवि भानुभक्त क्याम्पस, व्यास-०१, विज्ञानचौर, तनहुँ',
        registrationType: 'विद्यार्थी क्लब/संस्था निर्देशिका २०७५ बमोजिम',
        validUntil: 'शैक्षिक सत्र २०८२/०८३ (Active)',
        remarks: 'यस आदिकवि भानुभक्त क्याम्पस व्यास-०१, विज्ञानचौर, तनहुँमा विद्यार्थी क्लब/संस्था निर्देशिका २०७५ बमोजिम दर्ता भएको व्यहोरा प्रमाणित गरिन्छ। क्याम्पस प्रमुख: महाप्रसाद हड्खने।'
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
    leadership: [

        {
            id: 'vy1',
            name: 'Puspa Pandit',
            role: 'President',
            department: 'BICTE 7th Semester',
            email: 'panditpuspa000@gmail.com',
            phone: '+977 9814151727',
            avatarUrl: '../vyas/pushpa.webp'
        },
        {
            id: 'vy2',
            name: 'Deepika Shrestha',
            role: 'Vice-President',
            department: 'BICTE 5th Semester',
            email: 'vyasabc0123@gmail.com',
            phone: '+977 9816684940',
            avatarUrl: '../vyas/deepika.webp'
        },
        {
            id: 'vy3',
            name: 'Anil Mahato',
            role: 'Secretary',
            department: 'BICTE 4th Semester',
            email: 'vyasabc0123@gmail.com',
            phone: '+977 9746846173',
            avatarUrl: '../vyas/anil.webp'
        },
        {
            id: 'vy4',
            name: 'Sweta khadka',
            role: 'Joint-secretary',
            department: 'BICTE 7th Semester',
            email: 'vyasabc0123@gmail.com',
            phone: '+977 9826601227',
            avatarUrl: '../vyas/sweta.webp'
        },
        {
            id: 'vy5',
            name: 'Kamal dauliya',
            role: 'Treasurer',
            department: 'BICTE 7th Semester',
            email: 'vyasabc0123@gmail.com',
            phone: '+977 9806561230',
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
            id: 'gal-vyas-1',
            title: 'Vedic Quiz & Youth Gathering',
            date: 'Jan 2025',
            category: 'Quiz Competition',
            description: 'Participating students engaging in the inter-school Vedic quiz competition at Aadikavi Bhanubhakta Campus.',
            image: '../vyas/vyas1.webp'
        },
        {
            id: 'gal-vyas-2',
            title: 'Club Formation & Inauguration Ceremony',
            date: '2082 B.S.',
            category: 'Official Inauguration',
            description: 'Executive committee and student members during the charter registration ceremony.',
            image: '../vyas/vyas2.webp'
        }
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

];

export const UPCOMING_EVENTS: ClubEvent[] = [
    {
        id: 'evt-fsu-2',
        clubId: 'free-student-union',
        clubName: 'Free Student Union & Alumni Welfare',
        title: 'InterFaculty Futsal Tournament',
        date: '2026-09-18',
        time: '11:00 AM - 03:00 PM',
        venue: 'Damauli Futsal',
        category: 'Sports',
        description: 'Annual inter-faculty futsal championship organized by Free Student Union & Alumni Welfare.',
        capacity: 250,
        registeredCount: 140,
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80'
    }
];