import AnimatedGrid from "@/components/technologies/animated-grid";
import { techIconData as iconData } from "@/lib/data"

export default function TechStack() {
    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Technologies</h1>
            <AnimatedGrid iconData={iconData} />
        </section>
    )
}