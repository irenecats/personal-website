export default function About() {
  return (
    <div className="pointer-events-none relative h-full flex flex-col justify-center content-around flex-wrap text-[#dadfe2] text-center gap-8 ">
      <h1 className="pageTitle uppercase under text-[4.5rem] leading-[7rem] mb-10 ml-4 mt-4">
        About
      </h1>
      <div className="flex row justify-between">
        <div className="pl-8 w-[80em] ml-5 text-justify text-4xl w-9/12">
          <p>
            Hi! I am Irene Clemente, a Spanish multimedia engineering graduate
            with more than 3 years of work experience as a Software Engineer.
            Recently moved to Shinjuku, I&apos;m looking for new opportunities
            in Tokyo!
          </p>
          <p className="mt-4">
            My passion lies in the impact of digital media on our daily lives
            and the diverse creative ways in which people can interact with
            them.
          </p>
          <p className="mt-4">
            I have mainly worked with Java and Angular using Typescript,
            building the UX of aeronautical applications. However, I am always
            looking forward to acquiring new skills, currently looking forward
            to expanding my Front End tech stack.
          </p>
          <p className="mt-4">
            Aaaaaaaaaaside from programming, in my free time I enjoy playing
            video games curled up with my cat, fiber arts and learning about
            fashion history.
          </p>
          <button>Dowload CV</button>
        </div>
      </div>
    </div>
  );
}
