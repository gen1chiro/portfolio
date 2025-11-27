'use client';

import type { TileContainerProps} from "@/types";

export default function TileContainer({ children }: TileContainerProps) {
    return (
        <div
            className="w-full grid grid-cols-2 justify-items-center items-center sm:grid-cols-4 gap-[1px] rounded-lg overflow-hidden"
        >
            {children}
        </div>
    )
}