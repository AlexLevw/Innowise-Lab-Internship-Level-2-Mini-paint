import React, { useState } from "react";

interface PasswordInputProps {
  password: string;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

export default function PasswordConfirmInput({
  password,
  setPasswordConfirm,
}: PasswordInputProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    if (value === password) {
      setHasError(false);
      setPasswordConfirm(value);
    } else {
      setHasError(true);
      setPasswordConfirm("");
    }
  }

  return (
    <input
      className={`auth_t-input ${hasError ? "wrong" : ""}`}
      onChange={handleChange}
      type="password"
      placeholder="password confirm"
    />
  );
}
