import { Dispatch, SetStateAction } from "react";

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