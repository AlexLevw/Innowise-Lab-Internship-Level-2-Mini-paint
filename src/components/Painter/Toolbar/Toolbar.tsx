import React from "react";
import { painterConstants } from "@constants";
import Cell from "./Cell/Cell";
import styles from "./_styles.module.scss";

export default function Toolbar(): JSX.Element {
  return (
    <div className={styles.toolbar}>
      <Cell type={painterConstants.toolbarCellTypes.COLOR} />
      <Cell type={painterConstants.toolbarCellTypes.SIZE} />
    </div>
  );
}
