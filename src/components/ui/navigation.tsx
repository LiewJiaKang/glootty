"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Glootty from "../logos/glootty";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./navigation-menu";

interface InfoItem {
    title: string;
    href: string;
    description: string;
}

interface MenuItem {
    title: string;
    href?: string;
    isLink?: boolean;
    content?: ReactNode;
}

interface NavigationProps {
    menuItems?: MenuItem[];
    info?: InfoItem[];
    logo?: ReactNode;
    logoTitle?: string;
    logoDescription?: string;
    logoHref?: string;
    introItems?: {
        title: string;
        href: string;
        description: string;
    }[];
}

export default function Navigation({
    menuItems = [
        {
            title: "Getting Started",
            content: "default",
        },
        {
            title: "Info",
            content: "info",
        },
        {
            title: "Documentation",
            isLink: true,
            href: "./docs",
        },
    ],

    info = [
        {
            title: "About",
            href: "./about",
            description: "Learn more about the vision and background of Glootty.",
        },
        {
            title: "Source Code",
            href: "https://www.github.com/LiewJiaKang/glootty",
            description: "Explore the open-source repository on GitHub.",
        },
        {
            title: "Telegram",
            href: "https://t.me/FedoraBear",
            description: "Contact the creator directly via Telegram.",
        },
    ],

    logo = <Glootty />,

    logoTitle = "Glootty",

    logoDescription = "An integrated platform built on the GLOOTT framework — combining curated content, structured reflection, and practical application for deeper learning.",

    logoHref = "https://www.launchuicomponents.com/",

    introItems = [
        {
            title: "Introduction to GLOOTT",
            href: "./introduction",
            description: "Discover the educational framework that powers Glootty.",
        },
        {
            title: "Blog",
            href: "./blog",
            description: "Read updates, development notes, and educational insights.",
        },
        {
            title: "Pricing",
            href: "./pricing",
            description: "See available plans and features for advanced usage.",
        },
    ],
}: NavigationProps) {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        {item.isLink ? (
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href={item.href || ""}>
                                    {item.title}
                                </Link>
                            </NavigationMenuLink>
                        ) : (
                            <>
                                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {item.content === "default" ? (
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                        href={logoHref}
                                                    >
                                                        {logo}
                                                        <div className="mt-4 mb-2 text-lg font-medium">
                                                            {logoTitle}
                                                        </div>
                                                        <p className="text-muted-foreground text-sm leading-tight">
                                                            {logoDescription}
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            {introItems.map((intro, i) => (
                                                <ListItem key={i} href={intro.href} title={intro.title}>
                                                    {intro.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    ) : item.content === "info" ? (
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {info.map((information) => (
                                                <ListItem
                                                    key={information.title}
                                                    title={information.title}
                                                    href={information.href}
                                                >
                                                    {information.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    ) : (
                                        item.content
                                    )}
                                </NavigationMenuContent>
                            </>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    className,
    title,
    children,
    ...props
}: React.ComponentProps<"a"> & { title: string }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    data-slot="list-item"
                    className={cn(
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
