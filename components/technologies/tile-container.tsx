'use client';

import { motion } from 'motion/react';
import type { TileContainerProps} from "@/types";

export default function TileContainer({ children }: TileContainerProps) {
    return (
        <motion.div
            key='tile-container'
            initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="w-full grid grid-cols-2 justify-items-center items-center sm:grid-cols-4 gap-[2px] rounded-lg overflow-hidden"
        >
            {children}
        </motion.div>
    )
}