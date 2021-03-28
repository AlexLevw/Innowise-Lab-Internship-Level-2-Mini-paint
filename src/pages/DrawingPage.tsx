import React from "react";
import { useHistory } from "react-router-dom";

export default function DrawingPage(): JSX.Element {
  const history = useHistory();
  const drawingSrc = history.location.hash.substr(1);

  return (
    <div className="page_wrapper">
      <img src={drawingSrc} alt="drawing" />
    </div>
  );
}
