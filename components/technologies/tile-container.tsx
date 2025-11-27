'use client';

import React from "react";

export default function TileContainer({ children, handleMouseLeaveAction }: { children: React.ReactNode, handleMouseLeaveAction: () => void }) {
    return (
        <div
            onMouseLeave={handleMouseLeaveAction}
            className="w-full grid grid-cols-2 justify-items-center items-center sm:grid-cols-4 gap-[1px] bg-zinc-300 border border-slate-50 rounded-lg overflow-hidden"
        >
            {children}
        </div>
    )
}