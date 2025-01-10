import { Children, ReactNode } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";

interface NavBarProps {
  children: ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <header>
      <nav className="flex justify-end gap-10 m-0 mt-6 px-5 absolute right-0 left-0 z-10 font-semibold text-[#dadfe2]">
        {Children.map(children, (child: ReactNode, index: number) => {
          const useSeparator = index > 1;
          const elemStyle = index == 0 ? "mr-auto" : "";
          return useSeparator ? (
            <>
              <Separator separatorType={SeparatorTypeEnum.SparkleCustom} />
              <div className="navLink">{child}</div>
            </>
          ) : (
            <div className={`${elemStyle} navLink`}>{child}</div>
          );
        })}
      </nav>
    </header>
  );
}
