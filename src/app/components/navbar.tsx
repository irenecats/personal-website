import { ReactNode } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";

interface NavBarProps {
  children: ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <header>
      <nav
        className="
          flex justify-end gap-10 
          m-0 mt-2 px-5  absolute right-0 left-0 z-10
          font-semibold text-[#dadfe2]
        "
      >
        {children.map((elem: ReactNode, index: number) => {
          const separator =
            index > 1 ? (
              <Separator
                key={index}
                separatorType={SeparatorTypeEnum.SparkleRound}
              />
            ) : (
              ""
            );
          return (
            <div key={index} className="contents">
              {separator}
              {elem}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
