import React from "react";

interface SubmitBtnProps {
  text: string;
  disabled: boolean;
}

export default function SubmitBtn({
  text,
  disabled,
}: SubmitBtnProps): JSX.Element {
  return (
    <button className="auth_submit-btn" type="submit" disabled={disabled}>
      {text}
    </button>
  );
}
