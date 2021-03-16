import React from "react";

interface Props {
  massage: string;
}

export default function ErrorMessage({ massage }: Props): JSX.Element {
  return (
    <div className="error_container">
      <div>{massage}</div>
    </div>
  );
}
