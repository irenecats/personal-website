import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
import NavBar from "./components/navbar";
import NavLink from "./components/nav-link";
import "./ui/global.css";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-mono`}>
      <body
        className={`antialiased bg-[#071a45] text-[#dadfe2] overflow-x-hidden`}
      >
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
