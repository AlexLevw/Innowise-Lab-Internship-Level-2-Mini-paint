import React from "react";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { dbServices } from "@services";
import { CommonState } from "@store";
import styles from "./_styles.module.scss";

export default function PainterTop(): JSX.Element {
  const userId: string | undefined = useSelector(
    (state: CommonState) => state.auth.user?.fbUser.uid
  );
  const username: string | undefined = useSelector(
    (state: CommonState) => state.auth.user?.username
  );

  function handleDownloadBtnClick() {
    if (window.drawing) {
      const drawingURL = window.drawing.getDrawingURL();
      saveAs(drawingURL, "image");
    }
  }

  function handleSaveBtnClick(): void {
    if (window.drawing && userId && username) {
      const drawingURL = window.drawing.getDrawingURL();
      dbServices.saveImageData(userId, username, drawingURL);
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={handleDownloadBtnClick}
        type="button"
      >
        Download
      </button>
      <button className={styles.btn} onClick={handleSaveBtnClick} type="button">
        Save
      </button>
    </div>
  );
}
