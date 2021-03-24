import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommonState } from "@store";
import { painterActions } from "@store/painter";
import { painterConstants } from "@constants";
import styles from "./_styles.module.scss";

export default function LineTool(): JSX.Element {
  const dispatch = useDispatch();
  const toolType: string = useSelector(
    (state: CommonState) => state.painter.toolType
  );
  const isActive = toolType === painterConstants.LINE;

  function handleClick() {
    if (!isActive) {
      dispatch(painterActions.setToolType(painterConstants.LINE));
    }
  }

  return (
    <div className={`${styles.tool} ${isActive ? "active" : ""}`}>
      <button className={styles.toolBtn} type="button" onClick={handleClick}>
        <div />
      </button>
    </div>
  );
}
