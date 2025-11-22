import Link from 'next/link'
import NavLink from '@/components/nav-link'
import NavButton from '@/components/nav-button'

export default function Nav() {
    return (
        <nav className='bg-glass-dark fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full z-50 text-gray-300 text-sm px-6 py-4 shadow-inner shadow-white/50'>
            <ul className='w-full flex justify-between items-center gap-6'>
                <li>
                    <NavLink href='/' label='Home' />
                </li>
                <li>
                    <div className='w-[2px] h-[2px] bg-zinc-500'></div>
                </li>
                <li>
                    <NavLink href='/' label='About' />
                </li>
                <li>
                    <div className='w-[2px] h-[2px] bg-zinc-500'></div>
                </li>
                <li>
                    <NavLink href='/' label='Projects' />
                </li>
                <li>
                    <div className='w-[1px] h-4 bg-zinc-500'></div>
                </li>
                <li>
                    <NavButton label='Contact' />
                </li>
            </ul>
        </nav>
    )
}