import Carousel from "@/components/projects/carousel";
import type { ProjectTileProps } from "@/types";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectTile({project}: ProjectTileProps) {
    const { title, description, role, liveLink, repoLink, tags } = project;

    return (
        <div className="w-full flex flex-col gap-4 text-sm sm:text-base">
            <Carousel />
            <h1 className='font-medium'>{title}</h1>
            <p>{description}</p>
            <div className='flex justify-between items-center my-2'>
                <div>
                    <h1 className='text-xs text-zinc-600'>Role</h1>
                    <p>{role}</p>
                </div>
                <div>
                    <h1 className='text-xs text-zinc-600'>Code</h1>
                    <a href={repoLink} target='_blank' className='project-link flex items-center'>
                        <p>Github</p>
                        <GoArrowUpRight className="text-sm font-light text-zinc-900 mt-1"/>
                    </a>
                </div>
                <div>
                    <h1 className='text-xs text-zinc-600'>Live</h1>
                    <a href={liveLink} target='_blank' className='project-link flex items-center'>
                        <p>{title}</p>
                        <GoArrowUpRight className="text-sm font-light text-zinc-900 mt-1"/>
                    </a>
                </div>
            </div>
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