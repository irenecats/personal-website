"use client";
import Image from "next/image";
import { Project, projectList } from "./static-info/projectList";
import { createRef, useEffect, useState } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";
import style from "./project-gallery.module.css";

export default function ProjectGallery() {
  const [selectedItem, setSelected] = useState(0);
  const [parentToTop, setParentToTop] = useState(0);
  const [height, setHeight] = useState(0);
  const parentRef = createRef<HTMLDivElement>();

  //Gets parent height in pixels - should change one time
  useEffect(() => {
    const height = parentRef.current?.clientHeight || window.innerHeight;
    setHeight(height);
  }, [parentRef]);

  //Gets parent Y position in relation to the window - should change on scroll change
  useEffect(() => {
    const handleScroll = () => {
      const parentYPos = parentRef.current?.getBoundingClientRect().top || 1;
      setParentToTop(parentYPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [parentRef]);

  //Detects wich project element needs to be selected - should change on scroll change
  useEffect(() => {
    if (parentRef.current != null) {
      let selectedProyect;

      if (parentToTop > 0) {
        selectedProyect = 0;
      } else if (parentToTop <= -height) {
        selectedProyect = projectList.length - 1;
      } else {
        const sections = height / (projectList.length + 1);
        selectedProyect = Math.floor(Math.abs(parentToTop / sections));
        selectedProyect = Math.min(selectedProyect, projectList.length - 1);
      }
      setSelected(selectedProyect);
    }
  }, [parentToTop, parentRef, height]);

  function handleClick(event: React.MouseEvent, index: number) {
    if (parentRef.current) {
      window.scrollTo({
        left: 0,
        top:
          (height / (projectList.length + 1)) * index +
          parentRef.current?.offsetTop +
          1,
        behavior: "instant",
      });
    }
  }

  return (
    <div ref={parentRef} className="min-h-[inherit] h-[400vh]">
      <div className="sticky top-0 pt-10">
        <h1 className="text-6xl font-semibold">Projects</h1>
        <div className=" flex justify-between mt-16">
          <div className="w-[40%]">
            <ul>
              {projectList.map((elem: Project, index: number) => {
                return (
                  <li
                    key={index}
                    className={
                      index == selectedItem
                        ? `${style.titleRow} ${style.selected}`
                        : style.titleRow
                    }
                    onClick={(e) => {
                      handleClick(e, index);
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
          </div>
          <div className="w-[50%] relative">
            {projectList.map((elem: Project, index: number) => {
              return (
                <Image
                  key={index}
                  src={elem.imageRef}
                  className={
                    index == selectedItem
                      ? `${style.project} ${style.selectedProject}`
                      : `${style.project}`
                  }
                  style={{
                    zIndex: 10 - index,
                  }}
                  width="1280"
                  height="1280"
                  alt="test img"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
