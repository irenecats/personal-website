import Link from "next/link";
import Sparkle from "../../../public/round-four-star-fill.svg";
//import Sparkle from "../../../public/point-four-star-fill.svg";

export default function NavBar() {
  /* TODO
   * Try several separator options
   * Extract link elements and span element to separate components, add them as child so the layout has more context of the structurre
   */
  const socialStyles = "text-1xl text-[#dadfe2]] mt-0.5";
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
        <Sparkle
          className={socialStyles}
          alt="LinkedIn icon that redirects to my personal page"
        />
        <Link className="navLink" href="/projects">
          Projects
        </Link>
        <Sparkle
          className={socialStyles}
          alt="LinkedIn icon that redirects to my personal page"
        />
        <Link className="navLink" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
