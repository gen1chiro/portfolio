'use client';

import { MdContentCopy } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
    const year = new Date().getFullYear();

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText('juljavellana1218@gmail.com');
    }

    return (
        <footer className='w-responsive min-h-screen flex flex-col justify-center gap-20'>
            <div className='w-full flex flex-col sm:flex-row sm:gap-0 gap-10'>
                <h1 className='w-1/5'>Contact</h1>
                <div className='w-full sm:w-4/5 flex flex-col justify-center items-center gap-2 text-sm sm:text-base'>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <h1>Email</h1>
                        <div className='grow border-b border-black/30'></div>
                        <div className='flex justify-center items-center gap-2'>
                            <p>juljavellana1218@gmail.com</p>
                            <MdContentCopy
                                onClick={handleCopyEmail}
                                className='text-sm font-light text-zinc-900 cursor-pointer'
                            />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <a
                            href='https://www.linkedin.com/in/jul-leo-javellana-b03832344/'
                            target='_blank'
                            className='flex justify-center items-center gap-1 hover:underline'
                        >
                            <h1>LinkedIn</h1>
                            <GoArrowUpRight className='text-sm font-light text-zinc-900'/>
                        </a>
                        <div className='grow border-b border-black/30'></div>
                    </div>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <a
                            href='https://github.com/gen1chiro'
                            target='_blank'
                            className='flex justify-center items-center gap-1 hover:underline'
                        >
                            <h1>Github</h1>
                            <GoArrowUpRight className='text-sm font-light text-zinc-900'/>
                        </a>
                        <div className='grow border-b border-black/30'></div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-10 flex flex-col gap-6'>
                <p className='w-1/2 '>A <span className='italic font-medium'>river</span> cuts through rock, not because of its <span className='italic font-medium'>power</span>, but because of its <span className='italic font-medium'>persistence</span>.</p>
                <div className='grow border-b border-black/30'></div>
                <p className='w-full text-right text-sm'>© {year} Made by Jul. All Rights Reserved.</p>
            </div>
        </footer>
    )
}