import Image from "next/image";

export default function Footer() {
  /* TODO:
   * Hover animations
   * Minimal nav bar (?)
   */

  return (
    <footer className="bg-[#243c71] text-[#dadfe2] py-5 bottom-0 text-center">
      <div className="flex flex-row space-x-5 pb-2 content-center justify-center">
        <a
          href="https://www.linkedin.com/in/irene-clemente-aracil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            height={32}
            width={32}
          />
        </a>
        <a
          href="https://github.com/irenecats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="linkedin logo" height={32} width={32} />
        </a>
      </div>
      <small>
        &#9400; Copyright 2018, Irene Clemente Aracil. All rights reserved
      </small>
    </footer>
  );
}
