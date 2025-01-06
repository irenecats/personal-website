import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
import NavBar from "./components/navbar";
import NavLink from "./components/nav-link";
import FooterMinimal from "./components/footer-minimal";
import Background from "./components/background";
import { Roboto } from "next/font/google";
import "./ui/global.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} font-mono`}>
      <body className={`antialiased bg-[#071a45] `}>
        <Background />
        <NavBar>
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="/about" />
          <NavLink title="Projects" href="/projects" />
          <NavLink title="Contact" href="/contact" />
        </NavBar>
        <main className={` h-screen p-4 pt-8 `}>{children}</main>
        <FooterMinimal />
      </body>
    </html>
  );
}
