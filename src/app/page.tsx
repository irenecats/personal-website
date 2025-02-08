"use client";
import RocketGraphic from "./components/rocket-graphic";
import PageSection from "./components/page-section";

export default function Home() {
  return (
    <>
      <PageSection idElement="hero">
        <h1>Irene Clemente Aracil</h1>
        <h2>Multimedia Engineer</h2>
        {/*<DecorativeBackground />*/}
      </PageSection>
      <PageSection idElement="about">
        <div>
          <h1>About</h1>
          <div className="aboutText marginContent">
            <p>
              Hi! I am Irene, a Spanish multimedia engineering graduate with
              more than 3 years of work experience as a Software Engineer.
              Recently moved to Shinjuku, I’m looking for new opportunitiesin
              Tokyo!
            </p>
            <p>
              My passion lies in the impact of digital media on our daily lives
              and the diverse creative ways in which people can interact with
              them.
            </p>
            <p>
              Aside from programming, in my free time I enjoy playing video
              games curled up with my cat, fiber arts and learning about fashion
              history.
            </p>
            <p>
              I have mainly worked with Java and Angular using Typescript,
              building the UX of aeronautical applications. However, I am always
              looking forward to acquiring new skills, currently looking forward
              to expand my Frontend tech stack.
            </p>
            <a
              href="IreneClemente-CV.pdf"
              className="flex flex-row items-center w-fit bg-[#dadfe2] mt-10 rounded-xl text-[#071a45] font-extrabold cursor-pointer"
            >
              Download CV <ArrowDown className="size-10 fill-[#071a45]" />
            </a>
          </div>
        </div>
        <RocketGraphic />
      </PageSection>
      <div className="bg-[#dadfe2] h-4"></div>
    </>
  );
}
