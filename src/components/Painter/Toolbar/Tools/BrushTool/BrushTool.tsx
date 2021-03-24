import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommonState } from "@store";
import { painterActions } from "@store/painter";
import { painterConstants } from "@constants";
import { brushIcon } from "@assets/icons";
import styles from "./_styles.module.scss";

export default function BrushTool(): ReactElement {
  const dispatch = useDispatch();
  const toolType: string = useSelector(
    (state: CommonState) => state.painter.toolType
  );
  const isActive = toolType === painterConstants.BRUSH;

  function handleClick() {
    if (!isActive) {
      dispatch(painterActions.setToolType(painterConstants.BRUSH));
    }
  }

  return (
    <div className={`${styles.tool} ${isActive ? "active" : ""}`}>
      <button className={styles.toolBtn} type="button" onClick={handleClick}>
        <img className={styles.icon} src={brushIcon} alt="brush" />
      </button>
    </div>
  );
}
