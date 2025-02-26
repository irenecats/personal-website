import { RefObject, useEffect } from "react";
import { randomInteger } from "../../static-info/math-utils";

export default function useRandomDelayAnimation(
  reference: RefObject<SVGElement | null>,
  minDelay: number,
  maxDelay: number,
  animationClass: string
) {
  useEffect(() => {
    if (reference.current) {
      for (const child of reference.current?.childNodes) {
        const elem = child as HTMLElement;
        elem.style.animationDelay = randomInteger(minDelay, maxDelay) + "ms";
        elem.classList.add(animationClass);
      }
    }
  }, [animationClass, maxDelay, minDelay, reference]);
}
