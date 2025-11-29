import type { NavContent, AccordionItem } from '@/types';
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

