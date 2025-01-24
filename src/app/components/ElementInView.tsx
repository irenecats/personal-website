import { createRef, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  animateClass: string;
}

export default function ElementInView({ children, animateClass }: Props) {
  const wrapperRef = createRef<HTMLDivElement>();
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

  return <div ref={wrapperRef}>{children}</div>;
}
