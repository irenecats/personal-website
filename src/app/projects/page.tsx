import ProjectElem from "../components/project-elem";
import Styles from "./project.module.css";

const length = 10;
const mockArray = Array.from({ length }).map((elem, index) => index);

export default function Projects() {
  return (
    <div className="bg-blur contact-card m-8 p-[2.5rem]">
      <div>
        <h1 className="pageTitle uppercase under text-[4.5rem] leading-[7rem] mb-10 ml-4 mt-4">
          Projects
        </h1>
      </div>
      <div className="flex flex-row justify-around flex-wrap gap-y-16">
        {mockArray.map((elem, index) => (
          <ProjectElem
            key={index}
            className={Styles.project}
            delay={index * 150 + 150}
          />
        ))}
      </div>
    </div>
  );
}
