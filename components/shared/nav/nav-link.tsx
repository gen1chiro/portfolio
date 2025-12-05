import Link from "next/link";
import { NavLinkProps } from "@/types";

export default function NavLink({href, label, isActive}: NavLinkProps) {
    return (
        <Link href={href} className='z-20 relative px-2 py-1 sm:py-2 sm:px-4'>
            {label}
            {isActive && (
                <div className='absolute left-1/2 -bottom-1 w-[2px] h-[2px] bg-gray-200 rounded-full'/>
            )}
        </Link>
    )
}