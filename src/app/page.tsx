"use client";
import ArrowDown from "../../public/icons/arrow-down.svg";
import DecorativeBackground from "./components/decorative-bg";

export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center content-around flex-wrap text-[#dadfe2] text-center gap-8">
        <h1
          className=""
          style={{
            fontSize: "clamp(2.5rem , calc(2.5vw + 1rem), 10rem)",
          }}
        >
          Irene Clemente Aracil
        </h1>
        <h2
          style={{
            fontSize: "clamp(1.5rem , calc(1vw + 1rem), 5rem)",
          }}
        >
          Multimedia Engineer
        </h2>
        <DecorativeBackground />
      </section>
      <section className="min-h-screen flex flex-row justify-stretch text-[#dadfe2] px-64 pt-52">
        <div className="w-7/12">
          <h1 className="text-6xl font-bold">About</h1>
          <div className="text-2xl leading-[185%] text-justify pl-24 ">
            <p className="mt-20">
              Hi! I am Irene, a Spanish multimedia engineering graduate with
              more than 3 years of work experience as a Software Engineer.
              Recently moved to Shinjuku, I’m looking for new opportunitiesin
              Tokyo!
            </p>
            <p className="mt-10">
              My passion lies in the impact of digital media on our daily lives
              and the diverse creative ways in which people can interact with
              them.
            </p>
            <p className="mt-10">
              Aside from programming, in my free time I enjoy playing video
              games curled up with my cat, fiber arts and learning about fashion
              history.
            </p>
            <p className="mt-10">
              I have mainly worked with Java and Angular using Typescript,
              building the UX of aeronautical applications. However, I am always
              looking forward to acquiring new skills, currently looking forward
              to expand my Frontend tech stack.
            </p>
            <a
              href="IreneClemente-CV.pdf"
              className="pointer-events-auto flex flex-row items-center w-fit bg-[#dadfe2] py-1 pl-3 mt-10 rounded-xl text-[#071a45] font-bold cursor-pointer"
            >
              Download CV <ArrowDown className="size-10 " />
            </a>
          </div>
        </div>
        <div>Lo del cohete</div>
      </section>
    </>
  );
}
