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
    function handlePanelBtnClick(shape: string) {
      despatch(painterActions.setToolType(shape));
      hidePanel();
    }

    const { SHAPES } = painterConstants;

    return Object.keys(SHAPES).map(
      (key): JSX.Element => {
        return (
          <button
            className={styles.panelBtn}
            onClick={() => handlePanelBtnClick(key)}
            type="button"
            key={key}
          >
            <div className={styles[key]} />
          </button>
        );
      }
    );
  }, [despatch, hidePanel]);

  return <PanelWrapper elements={cratePanel()} hidePanel={hidePanel} />;
}
