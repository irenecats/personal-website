"use client";
import Image from "next/image";
import { Project, projectList } from "./project-Item";
import { createRef, useEffect, useState } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";
import style from "./project-gallery.module.css";
import { Stick } from "next/font/google";
import React, { UIEvent } from "react";

export default function ProjectGallery() {
  const [selectedItem, setSelected] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [scrollingPanel, setScrollPanel] = useState(false);

  const parentRef = createRef<HTMLDivElement>();
  const stickyRef = createRef<HTMLDivElement>();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const parentYPos = parentRef.current?.getBoundingClientRect().top || 1;
    const parentHeight = parentRef.current?.clientHeight || window.innerHeight;
    let selectedProyect;
    if (parentYPos > 0) {
      selectedProyect = 0;
    } else if (parentYPos <= -parentHeight) {
      selectedProyect = projectList.length - 1;
    } else {
      const sections = parentHeight / (projectList.length + 1);
      selectedProyect = Math.floor(Math.abs(parentYPos / sections));
      selectedProyect = Math.min(selectedProyect, projectList.length - 1);
    }
    setSelected(selectedProyect);
  }, [parentRef]);

  return (
    <div ref={parentRef} className="min-h-[inherit] h-[400vh]">
      <div ref={stickyRef} className="sticky top-0 pt-10">
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
