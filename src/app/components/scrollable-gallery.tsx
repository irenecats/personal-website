import { useState, useEffect, useRef, useCallback } from "react";
import { projectList } from "./static-info/projectList";
import ProjectGallery from "./project-gallery";

export default function ScrollableGallery() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelected] = useState(0);
  const [parentToTop, setParentToTop] = useState(0);
  const parentHeight = useRef(0);
  const sectionHeight = useRef(0);

  const handleClick = useCallback(
    (index: number) => {
      if (parentRef.current) {
        window.scrollTo({
          left: 0,
          top:
            sectionHeight.current * index + parentRef.current?.offsetTop + 17,
          behavior: "instant",
        });
      }
    },
    [parentRef]
  );

  //Gets parent height in pixels - should change one time
  useEffect(() => {
    const clientH = parentRef.current?.clientHeight || window.innerHeight;
    parentHeight.current = clientH;
    sectionHeight.current = parentHeight.current / (projectList.length + 1);
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
      } else if (parentToTop <= -parentHeight) {
        selectedProyect = projectList.length - 1;
      } else {
        selectedProyect = Math.floor(
          Math.abs(parentToTop / sectionHeight.current)
        );
        selectedProyect = Math.min(selectedProyect, projectList.length - 1);
      }
      setSelected(selectedProyect);
    }
  }, [parentToTop, parentRef, parentHeight]);

  return (
    <div ref={parentRef} className="h-[calc(100vh*4)]">
      <ProjectGallery selectedItem={selectedItem} handleClick={handleClick} />
    </div>
  );
}
