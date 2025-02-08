import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irene Clemente's portfolio",
  description: "Generated with Next js",
};
import "./global.css";

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
        <main className={`px-4 relative pointer-events-none`}>{children}</main>
      </body>
    </html>
  );
}
