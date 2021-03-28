import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DrawingData } from "@services";
import { routeConstants } from "@constants";
import styles from "./_styles.module.scss";

interface DrawingProps {
  src: string;
  username: string;
}

interface DrawingsViewProps {
  drawings: DrawingData[];
}

function Drawing({ src, username }: DrawingProps): JSX.Element {
  const history = useHistory();

  function handleClick(): void {
    history.push(`${routeConstants.DRAWING_ROUTE}#${src}`);
  }

  return (
    <button className={styles.picture} onClick={handleClick} type="button">
      <div className={styles.pictureImgWrapper}>
        <img src={src} alt="img" />
      </div>
      <p className={styles.pictureUsername}>{username}</p>
    </button>
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
        <Drawing
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
