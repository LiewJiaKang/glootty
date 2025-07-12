import {
    BlocksIcon,
    BrainCircuitIcon,
    EclipseIcon,
    LanguagesIcon,
    LineChartIcon,
    MonitorSmartphoneIcon,
    ScanFaceIcon,
    SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
    title: string;
    description: string;
    icon: ReactNode;
}

interface ItemsProps {
    title?: string;
    items?: ItemProps[] | false;
    className?: string;
}

export default function Items({
    title = "Intelligent tools for deep, structured learning",
    items = [
        {
            title: "Accessibility first",
            description: "Fully WCAG 2.0 compliant, made with best a11y practices",
            icon: <ScanFaceIcon className="size-5 stroke-1" />,
        },
        {
            title: "Smart content organization",
            description: "AI-assisted tagging and structuring for your Learning Object Repository",
            icon: <BlocksIcon className="size-5 stroke-1" />,
        },
        {
            title: "Guided reflection tools",
            description: "Integrated prompts help learners analyze, evaluate, and synthesize ideas",
            icon: <SquarePenIcon className="size-5 stroke-1" />,
        },
        {
            title: "Thinking task automation",
            description: "Auto-generated tasks based on Bloom’s taxonomy and learning outcomes",
            icon: <BrainCircuitIcon className="size-5 stroke-1" />,
        },
        {
            title: "Responsive design",
            description: "Flawless performance on all screen sizes and devices",
            icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
        },
        {
            title: "Light and dark themes",
            description: "Built-in themes support visual comfort and focus",
            icon: <EclipseIcon className="size-5 stroke-1" />,
        },
        {
            title: "AI-powered insights",
            description: "Track progress, generate summaries, and surface reflective patterns",
            icon: <LineChartIcon className="size-5 stroke-1" />,
        },
        {
            title: "Global-ready platform",
            description: "Multilingual support and localization tools built in",
            icon: <LanguagesIcon className="size-5 stroke-1" />,
        },
    ],
    className,
}: ItemsProps) {
    return (
        <Section className={className}>
            <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
                <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                    {title}
                </h2>
                {items !== false && items.length > 0 && (
                    <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                        {items.map((item, index) => (
                            <Item key={index}>
                                <ItemTitle className="flex items-center gap-2">
                                    <ItemIcon>{item.icon}</ItemIcon>
                                    {item.title}
                                </ItemTitle>
                                <ItemDescription>{item.description}</ItemDescription>
                            </Item>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}
