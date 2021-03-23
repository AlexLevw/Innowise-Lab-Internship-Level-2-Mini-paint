import React, { ReactElement, useRef, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CommonState } from "@store";
import Panel from "./Panel/Panel";
import styles from "./_styles.module.scss";

export default function SizeTool(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(false);
  const cellRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const brushSizeState: number = useSelector(
    (state: CommonState) => state.painter.brushSize
  );

  const handleCellClick = useCallback((): void => {
    setIsActive(!isActive);
  }, [isActive]);

  const hidePanel = (): void => {
    setIsActive(false);
  };

  return (
    <div className={styles.tool} ref={cellRef}>
      {isActive && <Panel hidePanel={hidePanel} />}
      <button
        className={styles.toolBtn}
        type="button"
        onClick={handleCellClick}
      >
        <div>{brushSizeState}px</div>
      </button>
    </div>
  );
}
