"use client";
import ArrowDown from "../../public/icons/arrow-down.svg";
import RocketGraphic from "./components/rocket-graphic";
import DecorativeBackground from "./components/decorative-bg";
import ProjectGallery from "./components/project-gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <section className="section relative flex flex-col justify-center text-center gap-8">
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
      <section className="section px-52 pt-[15%] flex flex-row justify-between">
        <div className="w-[60%]">
          <h1 className="text-6xl font-semibold">About</h1>
          <div className="text-[1.40rem] leading-[160%] text-justify pl-14">
            <p className="mt-16">
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
              className="pointer-events-auto flex flex-row items-center w-fit bg-[#dadfe2] py-0 pl-3  mt-10 rounded-xl text-[#071a45] font-extrabold cursor-pointer"
            >
              Download CV <ArrowDown className="size-10 fill-[#071a45]" />
            </a>
          </div>
        </div>
        <div className="w-[35%]">
          <RocketGraphic />
        </div>
      </section>
      <div className="bg-[#dadfe2] h-4"></div>
      <section className="section px-52">
        <ProjectGallery />
      </section>
      <div className="h-4"></div>
      <Footer />
    </>
  );
}
