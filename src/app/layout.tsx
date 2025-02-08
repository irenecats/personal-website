import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
import NavLink from "./components/nav-link";
import "./ui/global.css";
import InteractiveBackground from "./components/interactive-bg";
import Footer from "./components/footer";
const roboto = Inter({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} font-mono`}>
      <body
        className={`antialiased bg-[#071a45] text-[#dadfe2] overflow-x-hidden`}
      >
        <InteractiveBackground />
        <NavBar>
          <NavLink title="about" href="#about" />
          <NavLink title="projects" href="#projects" />
          <NavLink title="contact" href="#contact" />
        </NavBar>
        <main className={`px-4 relative pointer-events-none`}>{children}</main>
        <Footer idElement="contact" />
      </body>
    </html>
  );
}
