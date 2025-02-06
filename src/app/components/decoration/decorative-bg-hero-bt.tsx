"use client";
import { useRef, useEffect } from "react";
import style from "./decorative-bg.module.css";

export default function DecorativeBgHeroBt() {
  const svgRef = useRef<SVGSVGElement>(null);
  const bottomThick = useRef<SVGGeometryElement>(null);
  const bottomThin = useRef<SVGGeometryElement>(null);
  const topThick = useRef<SVGGeometryElement>(null);
  const topThin = useRef<SVGGeometryElement>(null);

  useEffect(() => {
    //const pathLength = bottomThick.current?.getTotalLength();
    //console.log(pathLength);
    if (topThick.current) {
      //console.log(topThick.current?.getTotalLength());
      //console.log(topThin.current?.getTotalLength());
    }
  }, [topThick, topThin]);

  return (
    <>
      <svg
        width="3423"
        height="1173"
        viewBox="0 0 3423 1173"
        id={style.HeroSvgBt}
        ref={svgRef}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id={style.HeroThinBt}
          d="M9.99989 698.587C237.55 698.587 347.356 734.969 461.216 796.495C744.799 949.735 742.655 1137.23 1198.68 1065.71C1711.99 985.203 2036.93 1300.78 2294.1 1084.89C2438.3 963.841 2412.5 815.43 2640.08 753.028C2951.81 667.555 2945.66 537.847 3043.59 296.406C3118.98 110.53 3273.09 98.3481 3416 51.6577"
          stroke-width="5"
          stroke="#E9ECFF"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          id={style.HeroThickBt}
          d="M11.9844 645.007C213.736 645.007 326.188 670.805 469.73 740.922C756.197 880.855 746.635 1074.65 1203.99 1012.13C1741.11 938.707 2043.41 1235.71 2261.04 1044.54C2415.46 908.897 2379.48 779.04 2607.02 716.649C2918.75 631.175 2909.97 492.947 3003.91 261.349C3087.89 54.3053 3351.81 25.0222 3410.68 8.00001"
          stroke-width="15"
          stroke-linecap="round"
          stroke="#E9ECFF"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
