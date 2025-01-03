import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin.svg";
import Email from "../../../public/email.svg";

export default function FooterMinimal() {
  const dateYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between absolute bottom-3 left-3 right-3 text-white">
      <small className="self-end">
        &#9400; Copyright {dateYear}, Irene Clemente Aracil. All rights
        reserved.
      </small>
      <div className="flex gap-1">
        <a
          href="https://www.linkedin.com/in/irene-clemente-aracil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="icon-socials-small"
            alt="LinkedIn icon that redirects to my personal page"
          />
        </a>
        <a
          href="https://github.com/irenecats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="icon-socials-small"
            alt="Github icon that redirects to my personal profile"
          />
        </a>
        <a
          href="mailto:ireneclemt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email
            className="icon-socials-small"
            alt="Folder icon that opens tue user's email program"
          />
        </a>
      </div>
    </footer>
  );
}
