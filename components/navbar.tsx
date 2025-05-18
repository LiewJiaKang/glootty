"use client";

import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { MobileMenu } from "@/components/mobile-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
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

export function Navbar({ navigation, auth }: NavbarProps) {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';

  return (
    <header className="border-b sticky top-0 bg-background z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <div className="bg-blue-500 text-white p-1 rounded-md">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Glootty</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href={`/${lang}#features`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {navigation.features}
          </Link>
          <Link
            href={`/${lang}#how-it-works`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {navigation.howItWorks}
          </Link>
          <Link
            href={`/${lang}/pricing`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {navigation.pricing}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {navigation.aboutUs}
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <ThemeToggle />
          <Link href={`/${lang}/login`}>
            <Button variant="outline">{auth.login}</Button>
          </Link>
          <Link href={`/${lang}/signup`}>
            <Button className="dark:text-foreground">{auth.signup}</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <MobileMenu navigation={navigation} auth={auth} />
        </div>
      </div>
    </header>
  );
} 