import { Metadata } from "next";
import DecorativeBgHeroTp from "../components/decoration/decorative-bg-hero-tp";
import Footer from "../components/footer";
import InteractiveBackground from "../components/interactive-bg";
import NavLink from "../components/navbar/nav-link";
import NavBar from "../components/navbar/navbar";
import "./global.css";
import { Inter, Diphylleia } from "next/font/google";
import Providers from "./providers";
import { localeOptions } from "../static-info/localeOptions";
import LocaleSwitcher from "../components/locale-switcher";

// ---- METADATA
export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
// ---- FONTS
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

// ---- INTERNATIONALIZATION
export async function generateStaticParams() {
  return localeOptions.map((locale) => ({
    locale,
  }));
}
async function getMessages(locale: string) {
  const messageModule = await import(`../../../messages/${locale}.json`);

  return messageModule.default;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang="en" className={`${inter.variable} ${diphylleia.variable}`}>
      <body
        className={`antialiased bg-[#071a45] text-[#dadfe2] overflow-x-clip`}
      >
        <Providers messages={messages} locale={locale}>
          <InteractiveBackground />
          <DecorativeBgHeroTp />
          <NavBar>
            <NavLink title="about" href="#about" />
            <NavLink title="projects" href="#projects" />
            <NavLink title="contact" href="#contact" />
          </NavBar>
          <LocaleSwitcher />
          <main className={`px-8 relative pointer-events-none overflow-x-clip`}>
            {children}
          </main>
          <Footer idElement="contact" />
        </Providers>
      </body>
    </html>
  );
}
