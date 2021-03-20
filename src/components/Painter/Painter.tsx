import React, { useRef, useEffect } from "react";
import Drawing from "./Drawing";
import PainterTop from "./PainterTop/PainterTop";
import Toolbar from "./Toolbar/Toolbar";
import styles from "./_styles.module.scss";

declare global {
  interface Window {
    drawing: Drawing | null;
  }
}

export default function Painter(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  useEffect(() => {
    window.drawing = new Drawing(canvasRef.current);
    return () => {
      window.drawing = null;
    };
  }, [canvasRef]);

  return (
    <div className={styles.container}>
      <PainterTop />
      <div className={styles.canvasWrapper}>
        <canvas ref={canvasRef} />
      </div>
      <Toolbar />
    </div>
  );
}
