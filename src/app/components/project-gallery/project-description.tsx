import { useTranslations } from "next-intl";
import { Project } from "../../static-info/projectList";
import style from "./project-gallery.module.css";

interface Props {
  project: Project | undefined;
  isHidden?: boolean;
}

export default function ProjectDescription({
  project,
  isHidden = false,
}: Props) {
  const hiddenClass = isHidden ? "initHidden" : "";
  const projectInfo = useTranslations("Projects");
  const projectDescription = "p" + project?.id + "_description";
  return (
    <>
      <div className="flex flex-col my-auto pointer-events-none font-semibold justify-center">
        {projectInfo(projectDescription)
          .split("\n\n")
          .map((paragraph, index) => {
            return (
              <p
                key={index}
                className={`${style.paragraph} ${hiddenClass}`}
                style={{
                  animationDelay: 150 + 150 * index + "ms",
                }}
              >
                {paragraph}
              </p>
            );
          })}
      </div>
      <footer className={style.tagFooter}>
        {project?.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className={`${style.tag} ${hiddenClass}`}
              style={{
                animationDelay: 150 + 150 * index + "ms",
              }}
            >
              {tag}
            </span>
          );
        })}
      </footer>
    </>
  );
}
