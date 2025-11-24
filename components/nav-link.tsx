import Link from "next/link";
import { NavLinkProps } from "@/types";

export default function NavLink({href, label, isActive}: NavLinkProps) {
    return (
        <Link href={href} className='z-20 relative'>
            {label}
            {isActive && (
                <div className='absolute left-1/2 -bottom-2 sm:-bottom-3 w-[2px] h-[2px] bg-gray-200'/>
            )}
        </Link>
    )
}