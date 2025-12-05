import { motion } from 'motion/react';
import { NavButtonProps } from "@/types";

export default function NavButton({label}: NavButtonProps) {
    return (
        <motion.a
            href={'mailto:juljavellana1218@gmail.com?subject=Inquiry%20from%20Portfolio%20Website'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className='bg-glass-white rounded-full px-4 py-1 text-gray-200 shadow-lg shadow-black/30'>
            {label}
        </motion.a>
    )
}