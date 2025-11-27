'use client';

import { motion } from "motion/react";
import React from "react";

export default function Tile({children, index, hoveredLinkIndex, handleMouseEnterAction}: {children: React.ReactNode, index: number, hoveredLinkIndex: number | null, handleMouseEnterAction: (index: number) => void}) {
    const isHovered = index === hoveredLinkIndex;

    return (
        <motion.div
            onMouseEnter={() => handleMouseEnterAction(index)}
            className={`relative w-full h-full flex justify-center items-center py-12 bg-slate-50 ${isHovered ? 'text-white' : 'text-zinc-800'} transition-colors ease-in-out duration-400`}
        >
            {children}
        </motion.div>
    )
}