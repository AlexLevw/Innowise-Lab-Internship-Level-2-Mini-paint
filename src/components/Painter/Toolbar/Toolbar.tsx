import React, { ReactElement } from "react";
import { ColorTool, SizeTool, ShapesTool } from "./Tools";
import styles from "./_styles.module.scss";

export default function Toolbar(): ReactElement {
  return (
    <div className={styles.toolbar}>
      <ColorTool />
      <SizeTool />
      <ShapesTool />
    </div>
  );
}
