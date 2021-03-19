import React from "react";
import { Painter } from "@components";
import styles from "./_styles.module.scss";

export default function PainterPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Painter />
    </div>
  );
}
