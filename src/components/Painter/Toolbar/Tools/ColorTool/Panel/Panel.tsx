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
    function handleColorCellClick(color: string) {
      despatch(painterActions.setToolColor(color));
      hidePanel();
    }

    const brushColors: string[] = painterConstants.TOOL_COLORS;

    return brushColors.map(
      (color): JSX.Element => {
        const style = {
          backgroundColor: color,
        };
        return (
          <button
            className={styles.panelBtn}
            onClick={() => handleColorCellClick(color)}
            type="button"
            key={color}
          >
            <div style={style} />
          </button>
        );
      }
    );
  }, [despatch, hidePanel]);

  return <PanelWrapper elements={cratePanel()} hidePanel={hidePanel} />;
}
