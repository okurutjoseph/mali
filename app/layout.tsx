import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { Lato, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import LayoutWrapper from "../components/LayoutWrapper";

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Uganda - Mali Digital Agency",
  description: "We focus on Digital marketing, social media management, content production, media buying, website design and digital skills training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.variable} ${lato.variable} font-sans`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ConvexClientProvider>
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </ConvexClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
