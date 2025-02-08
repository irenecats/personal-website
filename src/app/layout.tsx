import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
import NavLink from "./components/navbar/nav-link";
import "./global.css";
import InteractiveBackground from "./components/interactive-bg";
import Footer from "./components/footer";
import DecorativeBgHeroTp from "./components/decoration/decorative-bg-hero-tp";
import NavBar from "./components/navbar/navbar";
import { Inter, Diphylleia } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const diphylleia = Diphylleia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-diphylleia",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${diphylleia.variable}`}>
      <body
        className={`antialiased bg-[#071a45] text-[#dadfe2] overflow-x-clip`}
      >
        <InteractiveBackground />
        <DecorativeBgHeroTp />
        <NavBar>
          <NavLink title="about" href="#about" />
          <NavLink title="projects" href="#projects" />
          <NavLink title="contact" href="#contact" />
        </NavBar>
        <main className={`px-8 relative pointer-events-none overflow-x-clip`}>
          {children}
        </main>
        <Footer idElement="contact" />
      </body>
    </html>
  );
}
