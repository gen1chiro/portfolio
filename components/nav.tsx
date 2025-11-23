'use client';

import { useState } from 'react';
import { usePathname } from "next/navigation";
import { motion } from 'motion/react';
import NavLink from '@/components/nav-link';
import NavButton from '@/components/nav-button';
import { navContent } from "@/lib/data";

export default function Nav() {
    const pathname = usePathname();
    const currentIndex = navContent.findIndex(item => item.href === pathname);
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
        setIsExiting(false);
        setHoveredLinkIndex(index);
    }

    return (
        <nav className='bg-glass-dark fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 sm:gap-6 rounded-full z-50 text-gray-300 text-xs sm:text-sm px-3 py-2 sm:px-6 sm:py-4 shadow-inner shadow-white/50'>
            <ul
                onMouseLeave={handleMouseLeave}
                className='w-full flex justify-between items-center gap-4 sm:gap-6'
            >
                {
                    navContent.map((item, index) => (
                        <motion.li
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className={`relative flex justify-center items-center gap-4 sm:gap-6 px-2 py-1 sm:py-2 sm:px-4 ${currentIndex === index ? 'text-white' : ''}`}>

                            {hoveredLinkIndex === index && (
                                <motion.div
                                    className='absolute inset-0 bg-glass-white rounded-full shadow-lg shadow-black/30 transition-opacity duration-200'
                                    style={{ opacity: isExiting ? 0 : 1 }}
                                    layoutId='hover-pill'
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                />
                            )}
                            <NavLink href={item.href} label={item.label}/>
                        </motion.li>
                    ))
                }
            </ul>
            <div className='w-[1px] h-4 bg-zinc-500'></div>
            <NavButton label='Contact'/>
        </nav>
    )
}