import { Children, ReactNode } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";

interface NavBarProps {
  children?: ReactNode | ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  const length = Children.count(children);
  return (
    <div className="absolute w-full flex justify-center">
      <nav className="flex justify-end gap-10 m-0 mt-6 px-5 font-semibold text-[#dadfe2] w-full max-w-[200rem]  ">
        {Children.map(children, (child: ReactNode, index: number) => {
          const useSeparator = index < length - 1;
          return (
            <>
              <div className="navLink">{child}</div>
              {useSeparator && (
                <Separator separatorType={SeparatorTypeEnum.SparkleCustom} />
              )}
            </>
          );
        })}
      </nav>
    </div>
  );
}
