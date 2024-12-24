import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin.svg";

export default function Footer() {
  /* TODO:
   * Minimal nav bar (?)
   * Create button icon element, use icons without borders and add style with css
   * Hover animations
   */

  const dateYear = new Date().getFullYear();

  return (
    <footer className="bg-[#b3c1ca] text-[8375d]  py-5 bottom-0 text-center">
      <div className="flex flex-row space-x-5 pb-2 content-center justify-center">
        <a
          href="https://www.linkedin.com/in/irene-clemente-aracil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="icon-socials"
            alt="LinkedIn icon that redirects to my personal page"
          />
        </a>
        <a
          href="https://github.com/irenecats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="icon-socials"
            alt="Github icon that redirects to my personal profile"
          />
        </a>
      </div>
      <small>
        &#9400; Copyright {dateYear}, Irene Clemente Aracil. All rights reserved
      </small>
    </footer>
  );
}
