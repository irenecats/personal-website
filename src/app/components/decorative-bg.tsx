"use client";
import { createRef, useEffect } from "react";

export default function DecorativeBackground() {
  const svgRef = createRef<SVGSVGElement>();
  const bottomThick = createRef<SVGGeometryElement>();
  const bottomThin = createRef<SVGGeometryElement>();
  const topThick = createRef<SVGGeometryElement>();
  const topThin = createRef<SVGGeometryElement>();

  useEffect(() => {
    //const pathLength = bottomThick.current?.getTotalLength();
    //console.log(pathLength);
    if (topThick.current) {
      console.log(topThick.current?.getTotalLength());
      console.log(topThin.current?.getTotalLength());
    }
  }, [topThick, topThin]);

  return (
    <>
      <div className="absolute top-0 w-[15%] m-[-4em]">
        <svg
          className="pointer-events-none"
          viewBox="0 0 361 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Thick-vector-top"
            ref={topThick}
            d="M8 314.5C39.5 236.5 95.1438 194.985 196.5 163C318.5 124.5 365 76 350 8"
            stroke="#E9ECFF"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            id="Thin-vector-top"
            ref={topThin}
            d="M11 258.5C50.5 186 92.5 169 178.065 138C309.159 90.5041 333 59 324 6.5"
            stroke="#E9ECFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute m-[-1rem]">
        <svg
          viewBox="20 0 2550 890"
          id="HeroSvg"
          ref={svgRef}
          className="pointer-events-none absolute w-screen"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Hero-Thin"
            d="M6.5 530C178.5 530 261.5 557.5 347.564 604.007C561.919 719.837 560.298 861.562 905 807.5C1293 746.647 1538.61 985.186 1733 822C1842 730.5 1822.5 618.319 1994.52 571.151C2230.15 506.543 2225.5 408.5 2299.52 226C2356.51 85.5 2473 76.2922 2581.02 40.9999"
            stroke="#E9ECFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="Hero-Thick"
            d="M8 489.5C160.5 489.5 245.5 509 354 562C570.534 667.772 563.307 814.258 909.008 767.001C1315.01 711.501 1543.51 936.001 1708.01 791.501C1824.74 688.969 1797.54 590.812 1969.53 543.652C2205.16 479.045 2198.53 374.561 2269.53 199.501C2333.01 43.0012 2532.5 20.8667 2577 8"
            stroke="#E9ECFF"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
