import Link from "next/link";
import { NavLinkProps } from "@/types";

export default function NavLink({href, label}: NavLinkProps) {
    return (
        <Link href={href}>
            {label}
        </Link>
    )
}