import React, { useState, useCallback } from "react";
import { shapesIcon } from "@assets/icons";
import Panel from "./Panel/Panel";
import styles from "./_styles.module.scss";

export default function ShapesTool(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

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
        <img src={shapesIcon} alt="shapes" />
      </button>
    </div>
  );
}
