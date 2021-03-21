import React, { useState, useEffect } from "react";
import { DrawingData } from "@services";
import styles from "./_styles.module.scss";

interface PictureBlockProps {
  src: string;
  username: string;
}

interface DrawingsViewProps {
  drawings: DrawingData[];
}

function DrawingBlock({ src, username }: PictureBlockProps): JSX.Element {
  return (
    <div className={styles.picture}>
      <div className={styles.pictureImgWrapper}>
        <img src={src} alt="img" />
      </div>
      <p className={styles.pictureUsername}>{username}</p>
    </div>
  );
}

export default function DrawingsView({
  drawings,
}: DrawingsViewProps): JSX.Element {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const images: JSX.Element[] = [];
    drawings.forEach((item): void => {
      images.push(
        <DrawingBlock
          src={item.drawingUrl}
          username={item.username}
          key={item.drawingId}
        />
      );
    });
    setElements(images);
  }, [drawings, setElements]);

  return <div className={styles.container}>{elements}</div>;
}
