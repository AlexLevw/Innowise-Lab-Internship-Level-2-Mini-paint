import React, { ReactElement, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CommonState } from "@store";
import Panel from "./Panel/Panel";
import styles from "./_styles.module.scss";

export default function ColorTool(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(false);

  const colorState: string = useSelector(
    (state: CommonState) => state.painter.toolColor
  );

  const selectedColorStyle = {
    background: colorState,
  };

  const handleToolBtnClick = useCallback((): void => {
    setIsActive(!isActive);
  }, [isActive]);

  const hidePanel = (): void => {
    setIsActive(false);
  };

  return (
    <div className={styles.tool}>
      {isActive && <Panel hidePanel={hidePanel} />}
      <button
        className={styles.toolBtn}
        type="button"
        onClick={handleToolBtnClick}
      >
        <div className={styles.selectedColor} style={selectedColorStyle} />
      </button>
    </div>
  );
}
