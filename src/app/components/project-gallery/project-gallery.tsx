"use client";
import Image from "next/image";
import { Project, projectList } from "../static-info/projectList";
import { useRef, useEffect, memo } from "react";
import Separator, { SeparatorTypeEnum } from "../navbar/nav-separator";
import style from "./project-gallery.module.css";
import ProjectDescription from "./project-description";

export default memo(ProjectGallery);

interface Props {
  selectedItem: number;
  handleClick: (index: number) => void;
}

function ProjectGallery({ selectedItem, handleClick }: Props) {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollTop = 0;
    }
  });

  const project = projectList.at(selectedItem);

  return (
    <div className={style.stickyContainer}>
      <div>
        <h1>Projects</h1>
        <section className={`${style.sectionBody} marginContent`}>
          <ul>
            {projectList.map((elem: Project, index: number) => {
              return (
                <li
                  key={index}
                  className={
                    `${style.title} ` +
                    (index == selectedItem && `${style.selected}`)
                  }
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <Separator
                    separatorType={SeparatorTypeEnum.SparkleCustom}
                    classStyle={style.svgWrapper}
                  />
                  <h3>{elem.title}</h3>
                </li>
              );
            })}
          </ul>
          <section className={`${style.imgContainer} relative`}>
            {projectList.map((elem: Project, index: number) => {
              return (
                <a
                  href="#about"
                  key={index}
                  style={{
                    zIndex: projectList.length - index,
                  }}
                  className={
                    `${style.projectCard} ` +
                    (index == selectedItem && `${style.selectedProject}`)
                  }
                >
                  <div className={`${style.descriptionPc} rounded initHidden`}>
                    <ProjectDescription project={elem} isHidden={true} />
                  </div>
                  <Image
                    src={elem.imageRef}
                    className={`${style.image} w-full rounded`}
                    width="800"
                    height="450"
                    alt="test img"
                  />
                </a>
              );
            })}
          </section>
        </section>
      </div>
      <section
        className={`${style.descriptionMov} scrollable`}
        ref={descriptionRef}
      >
        <ProjectDescription project={project} />
      </section>
    </div>
  );
}
