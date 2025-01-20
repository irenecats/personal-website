"use client";
import Image from "next/image";
import Styles from "./project-elem.module.css";
import { useState } from "react";

interface ProjectProps {
  className?: string;
  delay: number;
}

export default function ProjectElem({ className, delay }: ProjectProps) {
  const [animationClass, setClass] = useState(false);
  const reverseAnimation = animationClass ? `${Styles["project-bg-rev"]}` : "";

  function removeHoverListener(e: React.MouseEvent): void {
    e.target.removeEventListener("mouseleave", () => {
      setClass(false);
    });
  }

  function addHoverListener(e: React.MouseEvent): void {
    e.target.addEventListener("mouseleave", () => {
      setClass(true);
    });
  }

  return (
    <div
      onMouseEnter={addHoverListener}
      onMouseLeave={removeHoverListener}
      className={`${className} ${Styles.wrapper} max-w-[18%] relative h-fit border-8 border-[#243c71] rounded`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src="/blank-profile-picture.png"
        className="project-elem rounded"
        width="1280"
        height="1280"
        alt="test img"
      />
      <div
        className={`${Styles["project-bg"]} ${reverseAnimation} absolute top-8 left-0 w-3/4 py-1 px-4 bg-[#243c71] pl-5 rounded-r`}
      >
        <h1
          className={`${Styles["project-title"]} tracking-wider text-3xl text-[#8375d] whitespace-nowrap overflow-hidden font-semibold`}
        >
          Project title
        </h1>
      </div>
    </div>
  );
}
