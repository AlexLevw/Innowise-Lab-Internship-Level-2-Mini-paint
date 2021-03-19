import React, { useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { initPainterStor } from "@store";
import Drawing from "./Drawing";
import Toolbar from "./Toolbar/Toolbar";
import styles from "./_styles.module.scss";

declare global {
  interface Window {
    drawing: Drawing | null;
  }
}

const painterStor: Store = initPainterStor();

export default function Painter(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  useEffect(() => {
    window.drawing = new Drawing(canvasRef.current);
    return () => {
      window.drawing = null;
    };
  }, [canvasRef]);

  return (
    <Provider store={painterStor}>
      <div className={styles.container}>
        <div className={styles.canvasWrapper}>
          <canvas ref={canvasRef} />
        </div>
        <Toolbar />
      </div>
    </Provider>
  );
}
