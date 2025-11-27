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

const icons = [
    <SiNextdotjs key={1} className='icon' />,
    <SiTypescript key={2} className='icon' />,
    <SiReact key={3} className='icon' />,
    <SiTailwindcss key={4} className='icon' />,
    <SiReactrouter key={5} className='icon' />,
    <SiSupabase key={6} className='icon' />,
    <SiFirebase key={7} className='icon' />,
    <SiVercel key={8} className='icon' />
]

export default function TechStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Technologies</h1>
            <AnimatedGrid icons={icons} />
        </section>
    )
}