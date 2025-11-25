import React from "react";

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

export type ExperienceAccordionItem = {
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
    item: ExperienceAccordionItem;
    handleToggle: (id: number) => void;
    isLastItem: boolean;
}