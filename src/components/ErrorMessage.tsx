import React from "react";

interface IErrorMessageProps {
  massage: string;
}

export default function ErrorMessage({
  massage,
}: IErrorMessageProps): JSX.Element {
  return (
    <div className="error_container">
      <div>{massage}</div>
    </div>
  );
}
