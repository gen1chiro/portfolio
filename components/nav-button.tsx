import { NavButtonProps } from "@/types";

export default function NavButton({label}: NavButtonProps) {
    return (
        <button className='bg-glass-white rounded-full px-4 py-1 text-gray-200 border-none'>
            {label}
        </button>
    )
}