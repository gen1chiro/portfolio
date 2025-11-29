import AnimatedGrid from "@/components/technologies/animated-grid";
import { toolIconData as iconData } from "@/lib/data"

export default function ToolStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Tools</h1>
            <AnimatedGrid iconData={iconData} />
        </section>
    )
}