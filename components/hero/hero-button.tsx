import { motion } from 'motion/react';

export default function HeroButton() {
    return (
        <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className='bg-glass-dark rounded-full px-6 py-3 text-gray-200 shadow-inner shadow-white'
        >
            Resume
        </motion.button>
    )
}