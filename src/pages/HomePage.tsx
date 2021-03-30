import React, { useState, useEffect } from "react";
import { SearchInput, DrawingsView } from "@components";
import { dbServices, DrawingData } from "@services";

export default function HomePage(): JSX.Element {
  const [drawings, setDrawings] = useState<DrawingData[]>([]);
  const [filteredDrawings, setFilteredDrawings] = useState<DrawingData[]>([]);

  function filterDrawingsByUser(username: string): void {
    const filtered: DrawingData[] = drawings.filter((item): boolean =>
      item.username.includes(username)
    );
    setFilteredDrawings(filtered);
  }

  useEffect(() => {
    let isMounted = true;
    const getImages: Promise<DrawingData[]> = dbServices.getImages();
    getImages.then((items: DrawingData[]): void => {
      if (!isMounted) return;
      setDrawings(items);
      setFilteredDrawings(items);
    });

    return (): void => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="page_wrapper">
      <SearchInput filter={filterDrawingsByUser} />
      <DrawingsView drawings={filteredDrawings} />
    </div>
  );
}
