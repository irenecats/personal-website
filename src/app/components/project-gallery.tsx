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
      <h1>Projects</h1>
      <div className={style.sectionBody}>
        <ul>
          {projectList.map((elem: Project, index: number) => {
            return (
              <li
                key={index}
                className={
                  index == selectedItem ? `${style.selected} highlight` : ""
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
        <div className="relative">
          {projectList.map((elem: Project, index: number) => {
            return (
              <div
                key={index}
                className={
                  index == selectedItem
                    ? `${style.project} ${style.selectedProject}`
                    : `${style.project}`
                }
                style={{
                  zIndex: 10 - index,
                }}
              >
                <Image
                  src={elem.imageRef}
                  width="800"
                  height="450"
                  alt="test img"
                />
                <div />
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.description} ref={descriptionRef}>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Felis luctus
          suscipit litora tempus justo neque. Tincidunt rhoncus pellentesque
          condimentum fames turpis suscipit.
        </p>
        <p>
          Quisque vel ipsum primis habitant convallis velit netus fames. Porta
          mus cras platea morbi orci viverra vestibulum. Habitant maecenas ut
          mollis varius convallis.
        </p>
        <p>
          Quisque vel ipsum primis habitant convallis velit netus fames. Porta
          mus cras platea morbi orci viverra vestibulum. Habitant maecenas ut
          mollis varius convallis.
        </p>
        <p>
          Quisque vel ipsum primis habitant convallis velit netus fames. Porta
          mus cras platea morbi orci viverra vestibulum. Habitant maecenas ut
          mollis varius convallis.
        </p>
      </div>
    </div>
  );
}
