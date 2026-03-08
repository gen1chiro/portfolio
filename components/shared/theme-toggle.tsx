'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const handleToggle = () => {
        setTheme((prevState) => prevState === "light" ? "dark" : "light")
    }

    return (
        <p className='text-sm shrink-0 flex items-center justify-center gap-1'>
            Theme:
            <button onClick={handleToggle} className='cursor-pointer underline text-sm decoration-dotted'>
                {
                theme === "light"
                    ? "Light"
                    : "Dark"
            }
            </button>
        </p>

    )
}

export default ThemeToggle