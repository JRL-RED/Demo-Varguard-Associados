import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "400", // Using 400 as closest standard weight, or we can try to force it if needed, but next/font is safer
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "VANGUARD & ASSOCIADOS | Advocacia com Garra e Tecnologia",
  description: "Sua aliada jurídica para o progresso. Advocacia moderna, transparente e ágil.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
