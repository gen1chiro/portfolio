'use client';

import TileContainer from "@/components/technologies/tile-container";
import Tile from "@/components/technologies/tile";
import { useState } from "react";
import { motion } from 'motion/react';
import type { AnimatedGridProps } from "@/types";

export default function AnimatedGrid({ iconData }: AnimatedGridProps) {
    const [hoveredLinkIndex, setHoveredLinkIndex] = useState(0);

    const handleMouseEnter = (index: number) => {
        setHoveredLinkIndex(index);
    }

    return (
        <TileContainer>
            {iconData.icons.map(({name, icon}, index) => (
                <Tile
                    key={name}
                    index={index}
                    hoveredLinkIndex={hoveredLinkIndex}
                    handleMouseEnterAction={handleMouseEnter}
                >
                    {icon}
                    {hoveredLinkIndex === index && (
                        <motion.div
                            layoutId={iconData.name}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 40,
                            }}
                            className='absolute inset-0 bg-zinc-800 rounded-none transition-opacity duration-200 z-10 shadow-lg'
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='w-full text-white absolute bottom-1 text-center text-sm'>
                                {name}
                            </motion.p>
                        </motion.div>
                    )}
                </Tile>
            ))}
        </TileContainer>
    )
}