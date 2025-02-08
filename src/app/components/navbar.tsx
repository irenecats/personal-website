import { Children, ReactNode } from "react";
import styles from "./navbar.module.css";

interface NavBarProps {
  children?: ReactNode | ReactNode[];
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className={styles.navwrap}>
      <nav className={styles.navbar}>
        {Children.map(children, (child: ReactNode) => {
          return (
            <>
              <div className={styles.navLink}>{child}</div>
            </>
          );
        })}
      </nav>
    </div>
  );
}
