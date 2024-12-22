import Link from "next/link";

export default function NavBar() {
  /* TODO
   * Hover animations
   * Rout links
   * Try several separator options
   */

  return (
    <nav
      className="
          flex justify-end gap-10 
          m-0 mt-2 px-5
          absolute right-0 left-0 z-10
          font-semibold text-[#dadfe2]
        "
    >
      <Link className="mr-auto uppercase tracking-wider" href="/">
        Home
      </Link>
      <Link className="uppercase tracking-wider" href="/about">
        About
      </Link>
      <span className="font-black">•</span>
      <Link className="uppercase tracking-wider" href="/projects">
        Projects
      </Link>
      <span className="font-black">•</span>
      <Link className="uppercase tracking-wider" href="/contact">
        Contact
      </Link>
    </nav>
  );
}
