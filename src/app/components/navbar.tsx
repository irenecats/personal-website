import { Children, ReactNode } from "react";
import Separator, { SeparatorTypeEnum } from "./nav-separator";
import styles from "./navbar.module.css";

interface NavBarProps {
  children?: ReactNode | ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  const length = Children.count(children);
  return (
    <div className={styles.navwrap}>
      <nav className={`${styles.navbar} highlight`}>
        {Children.map(children, (child: ReactNode, index: number) => {
          const useSeparator = index < length - 1;
          return (
            <>
              <div className={styles.navLink}>{child}</div>
              {useSeparator && (
                <Separator
                  classStyle={styles.separator}
                  separatorType={SeparatorTypeEnum.SparkleCustom}
                />
              )}
            </>
          );
        })}
      </nav>
    </div>
  );
}
