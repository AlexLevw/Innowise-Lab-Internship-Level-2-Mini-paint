import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { painterConstants } from "@constants";
import { painterActions } from "@store/painter";
import PanelWrapper from "../../PanelWrapper/PanelWrapper";
import styles from "./_styles.module.scss";

interface PanelProps {
  hidePanel: () => void;
}

export default function Panel({ hidePanel }: PanelProps): JSX.Element {
  const despatch = useDispatch();

  const cratePanel = useCallback((): JSX.Element[] => {
    function handleSizeCellClick(size: number) {
      despatch(painterActions.setBrushSize(size));
      hidePanel();
    }

    const brushSizes: number[] = painterConstants.BRUSH_SIZES;
    return brushSizes.map(
      (size): JSX.Element => {
        return (
          <button
            className={styles.panelBtn}
            onClick={() => handleSizeCellClick(size)}
            type="button"
            key={size}
          >
            <div>{size}</div>
          </button>
        );
      }
    );
  }, [despatch, hidePanel]);

  return <PanelWrapper elements={cratePanel()} hidePanel={hidePanel} />;
}
