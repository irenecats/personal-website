"use client";
import Image from "next/image";
import { Project, projectList } from "./static-info/projectList";
import { useRef, useEffect, memo } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";
import style from "./project-gallery.module.css";

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
                    index == selectedItem
                      ? `${style.selected} ${style.title}  highlight`
                      : style.title
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
          <section className={style.imgContainer}>
            {projectList.map((elem: Project, index: number) => {
              return (
                <a
                  href="#about"
                  key={index}
                  style={{
                    zIndex: projectList.length - index,
                  }}
                  className={
                    index == selectedItem
                      ? `${style.projectCard} ${style.selectedProject}`
                      : `${style.projectCard}`
                  }
                >
                  <div className={`${style.descriptionPc} rounded initHidden`}>
                    <div className="scrollable flex flex-col my-auto">
                      {elem.description.map((desc, index) => {
                        return (
                          <p
                            key={index}
                            className={`${style.paragraf} initHidden`}
                            style={{
                              animationDelay: 150 + 150 * index + "ms",
                            }}
                          >
                            {desc}
                          </p>
                        );
                      })}
                    </div>
                    <footer className="flex mt-auto pt-4 gap-6">
                      {elem.tags.map((tag, index) => {
                        return (
                          <span
                            key={index}
                            className={`${style.tag} initHidden`}
                            style={{
                              animationDelay: 150 + 150 * index + "ms",
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </footer>
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
        {projectList.at(selectedItem)?.description.map((desc, index) => {
          return (
            <p key={index} className={style.paragraf}>
              {desc}
            </p>
          );
        })}
      </section>
    </div>
  );
}
