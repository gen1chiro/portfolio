import {
    SiBlender,
    SiFigma,
    SiGithub,
    SiWebstorm
} from "react-icons/si";
import AnimatedGrid from "@/components/technologies/animated-grid";

const iconData = {
    name: 'tool-stack',
    icons: [
        { name: 'WebStorm', icon: <SiWebstorm className="icon" /> },
        { name: 'GitHub', icon: <SiGithub className="icon" /> },
        { name: 'Figma', icon: <SiFigma className="icon" /> },
        { name: 'Blender', icon: <SiBlender className="icon" /> }
    ]
};


export default function ToolStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Tools</h1>
            <AnimatedGrid iconData={iconData} />
        </section>
    )
}