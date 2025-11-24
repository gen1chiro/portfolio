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

export type AnimatedIconProps = {
    icon: React.ComponentType;
}