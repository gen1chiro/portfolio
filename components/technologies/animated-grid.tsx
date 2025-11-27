'use client';

import TileContainer from "@/components/technologies/tile-container";
import Tile from "@/components/technologies/tile";
import { useState } from "react";
import { motion } from 'motion/react';
import type { AnimatedGridProps } from "@/types";

export default function AnimatedGrid({ iconData }: AnimatedGridProps) {
    const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(0);

    const handleMouseEnter = (index: number) => {
        setHoveredLinkIndex(index);
    }

    return (
        <TileContainer>
            {iconData.icons.map((icon, index) => (
                <Tile
                    key={index}
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
                        />
                    )}
                </Tile>
            ))}
        </TileContainer>
    )
}