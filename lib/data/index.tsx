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
import tasky0 from '@/public/images/projects/tasky-0.png';
import tasky1 from '@/public/images/projects/tasky-1.png';
import tasky2 from '@/public/images/projects/tasky-2.png';
import tasky3 from '@/public/images/projects/tasky-3.png';
import lumio0 from '@/public/images/projects/lumio-0.png';
import lumio1 from '@/public/images/projects/lumio-1.png';
import lumio2 from '@/public/images/projects/lumio-2.png';
import lumio3 from '@/public/images/projects/lumio-3.png';
import lumio4 from '@/public/images/projects/lumio-4.png';
import eSkolar0 from '@/public/images/projects/eSkolar-0.png';
import eSkolar1 from '@/public/images/projects/eSkolar-1.png';
import eSkolar2 from '@/public/images/projects/eSkolar-2.png';
import nixar0 from '@/public/images/projects/nixar-0.png';
import nixar1 from '@/public/images/projects/nixar-1.png';
import nixar2 from '@/public/images/projects/nixar-2.png';
import shift0 from '@/public/images/projects/shift-0.png';
import shift1 from '@/public/images/projects/shift-1.png';
import shift2 from '@/public/images/projects/shift-2.png';
import shift3 from '@/public/images/projects/shift-3.png';
import axis0 from '@/public/images/projects/axis-0.png';
import axis1 from '@/public/images/projects/axis-1.png';
import axis2 from '@/public/images/projects/axis-2.png';
import axis3 from '@/public/images/projects/axis-3.png';
import axis4 from '@/public/images/projects/axis-4.png';
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
        images: [tasky0, tasky1, tasky2, tasky3],
        role: 'Full Stack',
        liveLink: 'https://tasky-cyan-ten.vercel.app/',
        repoLink: 'https://github.com/gen1chiro/tasky-v2',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    },
    {
        id: 2,
        title: 'Axis',
        description: 'A project management tool with issue tracking and task management, issue grouping, along with status, priority, and deadline tracking.',
        images: [axis0, axis1, axis2, axis3, axis4],
        role: 'Full Stack',
        liveLink: 'https://axis-amber.vercel.app/',
        repoLink: 'https://github.com/gen1chiro/axis',
        tags: ['Next.js', 'TypeScript', 'Drizzle', 'Neon']
    },
    {
        id: 3,
        title: 'Lumio',
        description: 'An online movie search app powered by the TMDB API, featuring dynamic search and detailed movie information.',
        images: [lumio0, lumio1, lumio2, lumio3, lumio4],
        role: 'Frontend',
        liveLink: 'https://lumio-tmdb.vercel.app/',
        repoLink: 'https://github.com/gen1chiro/lumio-tmdb',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'TMDB API'],
    },
    {
        id: 4,
        title: 'eSkolar',
        description: 'An AI powered scholarship application and management platform for students and institutions. I collaborated on the development of the platform’s AI-enabled chat interface and features.',
        images: [eSkolar0, eSkolar1, eSkolar2],
        role: 'Full Stack',
        liveLink: '',
        repoLink: 'https://github.com/ChocoCodes/eskolar',
        tags: ['Next.js', 'TypeScript', 'Supabase'],
    },
    {
        id: 5,
        title: 'Nixar POS',
        description: 'A web based point-of-sale system for Nixar Auto Glass & Car Tint. I contributed to the building of the transaction interfaces and features.',
        images: [nixar0, nixar1, nixar2],
        role: 'Frontend',
        liveLink: '',
        repoLink: 'https://github.com/ChocoCodes/nixar-pos',
        tags: ['PHP', 'JavaScript', 'MySQL'],
    },
    {
        id: 6,
        title: 'sh/ft: between realms',
        description: 'A 3D isometric puzzle-adventure game developed using Blender and Unity. I contributed as a 3D artist and developer, creating assets and implementing them in-game.',
        images: [shift0, shift1, shift2, shift3],
        role: '3D Artist & Developer',
        liveLink: '',
        repoLink: 'https://github.com/ChocoCodes/shift',
        tags: ['Blender', 'Unity', 'C#'],
    }
]