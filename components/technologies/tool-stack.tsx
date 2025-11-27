import {
    SiBlender,
    SiFigma,
    SiGithub,
    SiWebstorm
} from "react-icons/si";
import AnimatedGrid from "@/components/technologies/animated-grid";

const icons = [
    <SiWebstorm key={1} className='icon' />,
    <SiGithub key={2} className='icon' />,
    <SiFigma key={3} className='icon' />,
    <SiBlender key={4} className='icon' />
]

export default function ToolStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Tools</h1>
            <AnimatedGrid icons={icons} />
        </section>
    )
}