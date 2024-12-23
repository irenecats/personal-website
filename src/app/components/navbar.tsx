import Link from "next/link";

export default function NavBar() {
  /* TODO
   * Try several separator options
   * Extract link elements and span element to separate components, add them as child so the layout has more context of the structurre
   */

  return (
    <header>
      <nav
        className="
          flex justify-end gap-10 
          m-0 mt-2 px-5  absolute right-0 left-0 z-10
          font-semibold text-[#dadfe2]
        "
      >
        <Link className="navLink mr-auto " href="/">
          Home
        </Link>

        <Link className="navLink" href="/about">
          About
        </Link>

        <span className="font-black cursor-default">•</span>
        <Link className="navLink" href="/projects">
          Projects
        </Link>
        <span className="font-black cursor-default">•</span>
        <Link className="navLink" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
