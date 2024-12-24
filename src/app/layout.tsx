import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NavLink from "./components/nav-link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  
        font-[family-name:var(--font-geist-sans)]`}
      >
        <div
          className="bg-[url('/hero-template.jpg')] bg-fixed  
        absolute top-0 bottom-0 left-0 right-0 -z-10"
        />
        <NavBar>
          <NavLink className="mr-auto " title="Home" href="/" />
          <NavLink title="About" href="/about" />
          <NavLink title="Projects" href="/projects" />
          <NavLink title="Contact" href="/contact" />
        </NavBar>
        <main className="h-screen p-4 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
