import type { NavContent, AccordionItem, Project } from '@/types';
import fcc1 from '@/public/images/certifications/fcc-1.png';
import fcc2 from '@/public/images/certifications/fcc-2.png';
import scrimba0 from '@/public/images/certifications/scrimba-0.png';
import scrimba1 from '@/public/images/certifications/scrimba-1.png';
import scrimba2 from '@/public/images/certifications/scrimba-2.png';
import project1 from '@/public/images/projects/project-1.png';
import project2 from '@/public/images/projects/project-2.png';
import project3 from '@/public/images/projects/project-3.png';
import project4 from '@/public/images/projects/project-4.png';
import {
    SiBlender,
    SiFigma,
    SiFirebase, SiGithub,
    SiNextdotjs,
    SiReact,
    SiReactrouter,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel, SiWebstorm
} from "react-icons/si";

export const navContent: NavContent[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
]

export const experienceAccordionContent: AccordionItem[] = [
    {
        id: 1,
        position: 'Frontend Officer',
        company: 'GDG OC USLS',
        durationFull: 'July 2025 - present',
        durationShort: '2025',
        details: [
            'Built promotional event websites using React',
            'Collaborated with a team of developers and designers to deliver engaging web experiences',
            'Used Git/GitHub for version control and team workflows',
        ],
        tags: ['Frontend', 'React', 'Git'],
        isOpen: false,
    },
    {
        id: 2,
        position: 'Full Stack Developer',
        company: 'eSkolar',
        durationFull: 'July 2025 - November 2025',
        durationShort: '2025',
        details: [
            'Developed the MVP using Next.js and Supabase',
            'Collaborated with a team of 4 developers and 1 designer',
            'Recognized as a Top 10 National Finalist out of 433 submissions in the DAP NextGen PH competition',
        ],
        tags: ['Full Stack', 'Next.js', 'Supabase'],
        isOpen: false,
    }
]

export const educationAccordionContent: AccordionItem[] = [
    {
        id: 1,
        position: 'Computer Science',
        company: 'USLS',
        durationFull: 'August 2023 - May 2027',
        durationShort: '2023 - 2027',
        details: [
            'Running candidate for Summa Cum Laude (GWA: 1.22)',
            'Dean\'s Lister for 4 consecutive semesters',
            'Completed relevant courses in Data Structures, Algorithms, Web Development, and Database Management',
        ],
        tags: [],
        isOpen: false,
    },
    {
        id: 2,
        position: 'Senior High School',
        company: 'UNO-R',
        durationFull: 'August 2021 - June 2023',
        durationShort: '2021 - 2023',
        details: [
            'Science Technology Engineering and Mathematics (STEM) Strand with a specialization in Engineering and Information Technology',
            'Ranked 13 out of 479 graduates with a final grade of 95.57%',
            'Completed relevant courses in General Physics, Calculus, and Programming',
        ],
        tags: [],
        isOpen: false,
    }
]

export const techIconData = {
    name: 'tech-stack',
    icons: [
        { name: 'Next.js', icon: <SiNextdotjs className='icon' /> },
        { name: 'TypeScript', icon: <SiTypescript className='icon' /> },
        { name: 'React', icon: <SiReact className='icon' /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className='icon' /> },
        { name: 'React Router', icon: <SiReactrouter className='icon' /> },
        { name: 'Supabase', icon: <SiSupabase className='icon' /> },
        { name: 'Firebase', icon: <SiFirebase className='icon' /> },
        { name: 'Vercel', icon: <SiVercel className='icon' /> }
    ]
}

export const toolIconData = {
    name: 'tool-stack',
    icons: [
        { name: 'WebStorm', icon: <SiWebstorm className="icon" /> },
        { name: 'GitHub', icon: <SiGithub className="icon" /> },
        { name: 'Figma', icon: <SiFigma className="icon" /> },
        { name: 'Blender', icon: <SiBlender className="icon" /> }
    ]
}

export const certificationImages = [
    { id: 1, img: scrimba2, alt: 'Scrimba TypeScript Certification' },
    { id: 2, img: scrimba1, alt: 'Scrimba React Certification' },
    { id: 3, img: scrimba0, alt: 'Scrimba JavaScript Certification' },
    { id: 4, img: fcc2, alt: 'FreeCodeCamp JavaScript Algorithms and Data Structures Certification' },
    { id: 5, img: fcc1, alt: 'FreeCodeCamp Responsive Web Design Certification' }
]

export const projectImages = [
    { id: 3, img: project4, alt: 'Project 4 Image' },
    { id: 4, img: project3, alt: 'Project 3 Image' },
    { id: 5, img: project2, alt: 'Project 2 Image' },
    { id: 6, img: project1, alt: 'Project 1 Image' },
]

export const projectData: Project[] = [
    {
        id: 1,
        title: 'Tasky',
        description: 'A kanban web-app with real-time collaboration, board management, and interactive drag-and-drop features.',
        role: 'Full Stack',
        liveLink: 'https://tasky-cyan-ten.vercel.app/',
        repoLink: 'https://github.com/gen1chiro/tasky-v2',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    },
    {
        id: 2,
        title: 'Lumio',
        description: 'An online movie search app powered by the TMDB API, featuring dynamic search and detailed movie information.',
        role: 'Frontend',
        liveLink: 'https://lumio-tmdb.vercel.app/',
        repoLink: 'https://github.com/gen1chiro/lumio-tmdb',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
    }
]