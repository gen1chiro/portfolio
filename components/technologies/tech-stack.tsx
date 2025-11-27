import {
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiReactrouter,
    SiTailwindcss,
    SiSupabase,
    SiVercel,
    SiFirebase
} from "react-icons/si";
import AnimatedGrid from "@/components/technologies/animated-grid";

const iconData = {
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
};

export default function TechStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Technologies</h1>
            <AnimatedGrid iconData={iconData} />
        </section>
    )
}