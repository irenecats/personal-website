import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import NavBar from "./components/navbar";
import NavLink from "./components/nav-link";
import FooterMinimal from "./components/footer-minimal";
import Background from "./components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#071a45]`}
      >
        <Background />
        <NavBar>
          <NavLink className="mr-auto " title="Home" href="/" />
          <NavLink title="About" href="/about" />
          <NavLink title="Projects" href="/projects" />
          <NavLink title="Contact" href="/contact" />
        </NavBar>
        <main className="h-screen p-4 pt-8">{children}</main>
        <FooterMinimal />
      </body>
    </html>
  );
}
