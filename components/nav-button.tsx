import { motion } from 'motion/react';
import { NavButtonProps } from "@/types";

export default function NavButton({label}: NavButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className='bg-glass-white rounded-full px-4 py-1 text-gray-200 shadow-lg shadow-black/30'>
            {label}
        </motion.button>
    )
}