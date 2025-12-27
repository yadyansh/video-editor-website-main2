import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cinematic Video Editor | DaVinci Resolve Specialist",
  description: "Professional video editing services specializing in cinematic storytelling, color grading, and motion graphics using DaVinci Resolve.",
  keywords: "video editing, davinci resolve, color grading, cinematic editing, motion graphics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
