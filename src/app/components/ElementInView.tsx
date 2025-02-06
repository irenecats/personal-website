import { useRef, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  animateClass: string;
  parentClass?: string;
}

export default function ElementInView({
  children,
  animateClass,
  parentClass,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    {
      const currentRef = wrapperRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio == 1) {
            entry.target.classList.add(animateClass);
          } else if (entry.intersectionRatio == 0) {
            entry.target.classList.remove(animateClass);
          }
        },
        {
          threshold: [0, 1],
        }
      );

      if (currentRef) observer.observe(currentRef);

      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }
  }, [wrapperRef, animateClass]);

  return (
    <div ref={wrapperRef} className={`w-fit h-fit ${parentClass}`}>
      {children}
    </div>
  );
}
