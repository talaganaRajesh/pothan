import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Perumal Pothan | Game & AR/VR Developer",
  description: "Portfolio of Perumal Pothan, a Game Developer & AR/VR Specialist crafting immersive digital worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}>
        {children}
      </body>
    </html>
  );
}
