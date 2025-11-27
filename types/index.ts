import { Dispatch, SetStateAction, ReactNode } from "react";

export type NavLinkProps = {
    href: string;
    label: string;
    isActive: boolean;
};

export type NavButtonProps = {
    label: string;
}

export type NavContent = {
    href: string;
    label: string;
}

export type AccordionItem = {
    id: number;
    position: string;
    company: string;
    durationFull: string;
    durationShort: string;
    details: string[];
    tags: string[];
    isOpen: boolean;
}

export type AccordionItemProps = {
    item: AccordionItem;
    handleToggle: (id: number) => void;
    isLastItem: boolean;
}

export type AccordionProps = {
    data: AccordionItem[];
    setData: Dispatch<SetStateAction<AccordionItem[]>>;
}

export type AnimatedGridProps = {
    iconData: {
        name: string;
        icons: {
            name: string;
            icon: ReactNode;
        }[];
    };
}

export type TileContainerProps = {
    children: ReactNode;
}

export type TileProps = {
    children: ReactNode;
    index: number;
    hoveredLinkIndex: number | null;
    handleMouseEnterAction: (index: number) => void;
}