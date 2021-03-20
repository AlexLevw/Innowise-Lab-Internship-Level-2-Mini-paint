import React, { useRef, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { CommonState } from "@store";
import { painterConstants } from "@constants";
import Panel from "./Panel/Panel";
import styles from "./_styles.module.scss";

interface CellProps {
  type: string;
}

function ColorCellInner(): JSX.Element {
  const brushColorState: string = useSelector(
    (state: CommonState) => state.painter.brushColor
  );

  return <div className={`${styles.selectedColor} ${brushColorState}`}> </div>;
}

function SizeCellInner(): JSX.Element {
  const brushSizeState: number = useSelector(
    (state: CommonState) => state.painter.brushSize
  );
  return <div className={styles.selectedSize}>{brushSizeState}px</div>;
}

export default function Cell({ type }: CellProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  const cellRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleCellClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      setIsActive(!isActive);
    },
    [isActive]
  );

  const getInner = useCallback(() => {
    const cellTypes = painterConstants.toolbarCellTypes;
    switch (type) {
      case cellTypes.COLOR:
        return <ColorCellInner />;
      default:
        return <SizeCellInner />;
    }
  }, [type]);

  return (
    <div className={styles.cell} ref={cellRef}>
      <Panel type={type} isActive={isActive} />
      <button
        className={styles.cellBtn}
        type="button"
        onClick={handleCellClick}
      >
        {getInner()}
      </button>
    </div>
  );
}
