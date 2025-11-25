import type { NavContent } from '@/types';
import type { ExperienceAccordionItem } from '@/types';

export const navContent: NavContent[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
]

export const experienceAccordionContent: ExperienceAccordionItem[] = [
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