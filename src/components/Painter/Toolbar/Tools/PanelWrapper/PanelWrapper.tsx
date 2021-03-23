import React, { useRef, useEffect } from "react";
import styles from "./_styles.module.scss";

interface Props {
  elements: JSX.Element[];
  hidePanel: () => void;
}

export default function PanelWrapper({
  elements,
  hidePanel,
}: Props): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const tryHidePanel = (e: MouseEvent): void => {
      if (e.target && !wrapperRef.current.contains(e.target as Element)) {
        hidePanel();
      }
    };
    document.addEventListener("mousedown", tryHidePanel);
    return () => document.removeEventListener("mousedown", tryHidePanel);
  }, [hidePanel]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {elements}
    </div>
  );
}
