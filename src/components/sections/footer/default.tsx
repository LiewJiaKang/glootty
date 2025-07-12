import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Glootty from "../../logos/glootty";
import {
    Footer,
    FooterBottom,
    FooterColumn,
    FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    logo?: ReactNode;
    name?: string;
    columns?: FooterColumnProps[];
    copyright?: string;
    policies?: FooterLink[];
    showModeToggle?: boolean;
    className?: string;
}

export default function FooterSection({
    logo = <Glootty />,
    name = "Glootty",
    columns = [
        {
            title: "Product",
            links: [
                { text: "Pricing", href: "./pricing" },
                { text: "Documentation", href: "./docs" },
            ],
        },
        {
            title: "Company",
            links: [
                { text: "About", href: "./about" },
                { text: "Blog", href: "./blog" },
            ],
        },
        {
            title: "Contact",
            links: [
                { text: "Telegram", href: "https://t.me/FedoraBear" },
                { text: "Github", href: "https://www.github.com/LiewJiaKang" },
            ],
        },
    ],
    copyright = "© 2025 Liew Jia Kang. All rights reserved",
    policies = [
        { text: "Privacy Policy", href: "./privacy" },
        { text: "Terms of Service", href: "./terms" },
    ],
    showModeToggle = true,
    className,
}: FooterProps) {
    return (
        <footer className={cn("bg-background w-full px-4", className)}>
            <div className="max-w-container mx-auto">
                <Footer>
                    <FooterContent>
                        <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
                            <div className="flex items-center gap-2">
                                {logo}
                                <h3 className="text-xl font-bold">{name}</h3>
                            </div>
                        </FooterColumn>
                        {columns.map((column, index) => (
                            <FooterColumn key={index}>
                                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                                {column.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.href}
                                        className="text-muted-foreground text-sm"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </FooterColumn>
                        ))}
                    </FooterContent>
                    <FooterBottom>
                        <div>{copyright}</div>
                        <div className="flex items-center gap-4">
                            {policies.map((policy, index) => (
                                <a key={index} href={policy.href}>
                                    {policy.text}
                                </a>
                            ))}
                            {showModeToggle && <ModeToggle />}
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
