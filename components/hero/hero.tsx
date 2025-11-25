'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import profilePicture from '@/public/images/profile.jpg';
import HeroButton from '@/components/hero/hero-button';
import HeroIcons from '@/components/hero/hero-icons';

export default function Hero() {
    return (
        <section className='w-full mt-10 flex flex-col justify-center items-start gap-8'>
            <div className='w-11/12 sm:w-3/4 flex flex-col justify-center items-start gap-2'>
                <p className='sub-text'>Kamusta, I'm</p>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='main-text'>Jul Leo</h1>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className='w-[50px] h-[50px]'>
                        <Image
                            src={profilePicture}
                            alt='profile picture'
                            className='rounded-sm grayscale hover:grayscale-50'
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
                <h1 className='main-text'>Javellana</h1>
                <p className='sub-text'>I'm a 3rd year Computer Science student and aspiring full-stack developer that likes to create beautiful and functional interfaces for the web.</p>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <HeroButton />
                <HeroIcons />
            </div>
        </section>
    )
}