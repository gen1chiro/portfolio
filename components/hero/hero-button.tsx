import { motion } from 'motion/react';
import { GoArrowUpRight } from "react-icons/go";

export default function HeroButton() {
    return (
        <motion.a
            href='/resume.pdf'
            target='_blank'
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className='flex items-center justify-center bg-glass-dark rounded-full ps-5 pe-4 py-2 text-gray-200 shadow-inner shadow-white'
        >
            Resume
            <GoArrowUpRight className='mt-1'/>
        </motion.a>
    )
}