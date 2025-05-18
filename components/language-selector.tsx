"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { localeNames, supportedLocales } from "@/middleware";

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string>("en");
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Extract current locale from pathname
    const pathLocale = pathname.split("/")[1];
    if (supportedLocales.includes(pathLocale)) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="opacity-0">
        <Globe className="h-5 w-5" />
      </Button>
    );
  }

  const handleLanguageChange = (locale: string) => {
    if (locale === currentLocale) return;

    // Get the path after the locale segment
    const pathSegments = pathname.split("/");
    const newPathname =
      pathSegments.length > 2
        ? `/${locale}/${pathSegments.slice(2).join("/")}`
        : `/${locale}`;

    router.push(newPathname);
    setCurrentLocale(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Select language"
          title="Select language"
        >
          <Globe className="h-5 w-5" />
          <span className="absolute -bottom-1 -right-1 text-xs font-bold bg-blue-600 text-white rounded-full w-fit px-1 h-4 flex items-center justify-center">
            {currentLocale.substring(0, 2)}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLocales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className={`cursor-pointer ${locale === currentLocale ? "font-bold bg-muted" : ""}`}
            onClick={() => handleLanguageChange(locale)}
          >
            {localeNames[locale as keyof typeof localeNames]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
