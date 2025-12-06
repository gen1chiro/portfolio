'use client';

import { motion } from 'motion/react';
import Carousel from "@/components/projects/carousel";
import type { ProjectTileProps } from "@/types";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectTile({project}: ProjectTileProps) {
    const { title, description, images, role, liveLink, repoLink, tags } = project;

    return (
        <motion.div
            key='project-tile'
            initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.1}}
            viewport={{amount: 0.2}}
            className="w-full flex flex-col gap-4 text-sm sm:text-base"
        >
            <Carousel items={images}/>
            <h1 className='font-medium'>{title}</h1>
            <p>{description}</p>
            <div className='flex justify-between items-start my-2'>
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
                    <h1 className={`text-xs ${liveLink ? 'text-zinc-600' : 'line-through text-zinc-500'}`}>Live</h1>
                    {
                        liveLink && (
                            <a href={liveLink} target='_blank' className='project-link flex items-center'>
                                <p>{title}</p>
                                <GoArrowUpRight className="text-sm font-light text-zinc-900 mt-1"/>
                            </a>
                        )
                    }
                </div>
            </div>
            <div className="flex justify-start items-center gap-6">
                {
                    tags.map((tag, index) => (
                        <p key={index} className='text-zinc-600'>{tag}</p>
                    ))
                }
            </div>
        </motion.div>
    )
}