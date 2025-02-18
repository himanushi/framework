import { type ReactNode, useEffect } from "react";
import styles from "./SafeArea.module.scss";

type SafeAreaProps = {
  children?: ReactNode;
};

export const SafeArea = ({ children }: SafeAreaProps) => {
  useEffect(() => {
    const setViewportProperty = () => {
      // iOS Safari のレスポンシブ対応
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("load", setViewportProperty);
    window.addEventListener("resize", setViewportProperty);

    setViewportProperty();

    return () => {
      window.removeEventListener("load", setViewportProperty);
      window.removeEventListener("resize", setViewportProperty);
    };
  }, []);

  return <div className={styles.safe}>{children}</div>;
};
