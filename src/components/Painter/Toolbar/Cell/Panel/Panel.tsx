import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { painterConstants } from "@constants";
import { painterActions } from "@store/painter";
import styles from "./_styles.module.scss";

interface PanelProps {
  type: string;
  isActive: boolean;
}

export default function Panel({ type, isActive }: PanelProps): JSX.Element {
  const despatch = useDispatch();

  const cratePanel = useCallback((): JSX.Element[] => {
    function handleColorCellClick(
      e: React.MouseEvent<HTMLButtonElement>,
      color: string
    ) {
      e.stopPropagation();
      despatch(painterActions.setBrushColor(color));
    }

    function handleSizeCellClick(
      e: React.MouseEvent<HTMLButtonElement>,
      size: number
    ) {
      e.stopPropagation();
      despatch(painterActions.setBrushSize(size));
    }

    function createColorPanel(): JSX.Element[] {
      const brushColors: string[] = painterConstants.BRUSH_COLORS;
      return brushColors.map(
        (color): JSX.Element => {
          return (
            <button
              className={styles.colorPanelCell}
              onClick={(e) => handleColorCellClick(e, color)}
              type="button"
              key={color}
            >
              <div className={color}> </div>
            </button>
          );
        }
      );
    }

    function createSizePanel(): JSX.Element[] {
      const brushSizes: number[] = painterConstants.BRUSH_SIZES;
      return brushSizes.map(
        (size): JSX.Element => {
          return (
            <button
              className={styles.sizePanelCell}
              onClick={(e) => handleSizeCellClick(e, size)}
              type="button"
              key={size}
            >
              <div>{size}</div>
            </button>
          );
        }
      );
    }

    const cellTypes = painterConstants.toolbarCellTypes;

    switch (type) {
      case cellTypes.COLOR:
        return createColorPanel();
      default:
        return createSizePanel();
    }
  }, [despatch, type]);

  return (
    <div className={styles.panel + (isActive ? " active" : "")}>
      {cratePanel()}
    </div>
  );
}
