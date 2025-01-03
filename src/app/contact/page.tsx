import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin.svg";
import Email from "../../../public/email.svg";

//TODO: change icons to maintain graphic coherence.
export default function Contact() {
  return (
    <div className="bg-blur contact-card m-8 p-[2.5rem]">
      <h1 className="pageTitle uppercase under text-[4.5rem] leading-[7rem] mb-10 ml-4 mt-4">
        Contact
      </h1>
      <p className="text-4xl ml-4">
        Want to know more?
        <br />
        Contact me on any of my socials accounts:{" "}
      </p>
      <div
        className="flex row justify-center gap-10 mt-10
        absolute top-0 bottom-0 left-0 right-0 self-center"
      >
        <a
          href="https://www.linkedin.com/in/irene-clemente-aracil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="icon-socials size-32"
            alt="LinkedIn icon that redirects to my personal page"
          />
        </a>
        <a
          href="https://github.com/irenecats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            className="icon-socials size-32"
            alt="Github icon that redirects to my personal profile"
          />
        </a>
        <a
          href="mailto:ireneclemt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email
            className="icon-socials size-32"
            alt="Folder icon that opens tue user's email program"
          />
        </a>
      </div>
    </div>
  );
}
