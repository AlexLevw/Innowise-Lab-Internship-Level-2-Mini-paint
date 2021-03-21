import React, { useState, useEffect } from "react";
import { SearchInput, DrawingsView } from "@components";
import { dbServices, DrawingData } from "@services";
import styles from "./_styles.module.scss";

export default function HomePage(): JSX.Element {
  const [drawings, setDrawings] = useState<DrawingData[]>([]);
  const [filteredDrawings, setFilteredDrawings] = useState<DrawingData[]>([]);

  function filterDrawingsByUser(username: string) {
    const filtered: DrawingData[] = drawings.filter((item): boolean =>
      item.username.includes(username)
    );
    setFilteredDrawings(filtered);
  }

  useEffect(() => {
    dbServices.getImages().then((items: DrawingData[]): void => {
      setDrawings(items);
      setFilteredDrawings(items);
    });
  }, []);

  return (
    <div className={styles.container}>
      <SearchInput filter={filterDrawingsByUser} />
      <DrawingsView drawings={filteredDrawings} />
    </div>
  );
}
