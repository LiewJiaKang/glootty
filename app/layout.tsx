import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { supportedLocales, defaultLocale } from "@/middleware";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Glootty - Educational Platform for Students and Teachers",
  description:
    "An interactive educational platform for students aged 8-17 and their teachers",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;
  // Validate that the lang parameter is supported
  const validLang = supportedLocales.includes(lang) ? lang : defaultLocale;

  return (
    <html lang={validLang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
