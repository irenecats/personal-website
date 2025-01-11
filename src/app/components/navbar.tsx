import { Children, ReactNode } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";

interface NavBarProps {
  children: ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <header className="relative w-full flex justify-center">
      <nav className="flex justify-end gap-10 m-0 mt-6 px-5 font-semibold text-[#dadfe2] w-full max-w-[200rem]  ">
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
