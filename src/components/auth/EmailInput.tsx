import React, { useState } from "react";
import validator from "validator";

interface EmailInputProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function EmailInput({ setEmail }: EmailInputProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    if (!validator.isEmail(value)) {
      setHasError(true);
      setEmail("");
      return;
    }
    setHasError(false);
    setEmail(value);
  }

  return (
    <input
      className={`auth_t-input ${hasError ? "wrong" : ""}`}
      onChange={handleChange}
      type="email"
      placeholder="e-mail"
    />
  );
}
