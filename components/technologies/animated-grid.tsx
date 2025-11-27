'use client';

import TileContainer from "@/components/technologies/tile-container";
import Tile from "@/components/technologies/tile";
import React, { useState } from "react";
import { motion } from 'motion/react';

export default function AnimatedGrid({ icons }: { icons: React.ReactNode[] }) {
    const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null);
    const [isExiting, setIsExiting] = useState(false);

    const handleMouseLeave = () => {
        setIsExiting(true);
        setTimeout(() => {
            setHoveredLinkIndex(null);
            setIsExiting(false);
        }, 200);
    };

    const handleMouseEnter = (index: number) => {
        setHoveredLinkIndex(index);
    }

    return (
        <TileContainer handleMouseLeaveAction={handleMouseLeave}>
            {icons.map((icon, index) => (
                <Tile
                    key={index}
                    index={index}
                    hoveredLinkIndex={hoveredLinkIndex}
                    handleMouseEnterAction={handleMouseEnter}
                >
                    {icon}
                    {hoveredLinkIndex === index && (
                        <motion.div
                            layoutId='hover-square'
                            style={{ opacity: isExiting ? 0 : 1 }}
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