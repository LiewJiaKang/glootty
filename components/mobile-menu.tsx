"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MobileMenuProps {
  navigation: {
    features: string;
    howItWorks: string;
    pricing: string;
    aboutUs: string;
  };
  auth: {
    login: string;
    signup: string;
  };
}

export function MobileMenu({ navigation, auth }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';

  // Close menu when pathname changes (navigation occurs)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 w-full max-w-xs h-full bg-background border-l border-border shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg font-medium">
            <Link
              href={`/${lang}#features`}
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {navigation.features}
            </Link>
            <Link
              href={`/${lang}#how-it-works`}
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {navigation.howItWorks}
            </Link>
            <Link
              href={`/${lang}/pricing`}
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {navigation.pricing}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {navigation.aboutUs}
            </Link>
          </nav>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
              <ThemeToggle />
              <LanguageSelector />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link href={`/${lang}/login`}>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {auth.login}
                </Button>
              </Link>
              <Link href={`/${lang}/signup`}>
                <Button
                  className="w-full dark:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {auth.signup}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
