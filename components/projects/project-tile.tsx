import Carousel from "@/components/projects/carousel";
import type { ProjectTileProps } from "@/types";

export default function ProjectTile({project}: ProjectTileProps) {
    const { title, description, liveLink, repoLink, tags } = project;

    return (
        <div className="w-full flex flex-col gap-4 text-sm sm:text-base">
            <Carousel />
            <h1 className='font-medium'>{title}</h1>
            <p>{description}</p>
            <div className="flex justify-start items-center gap-6">
                {
                    tags.map((tag, index) => (
                        <p key={index} className='text-zinc-600'>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}