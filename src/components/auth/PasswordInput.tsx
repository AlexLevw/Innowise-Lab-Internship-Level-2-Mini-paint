import React, { useState } from "react";
import validator from "validator";

interface PasswordInputProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  validate?: boolean;
}

const defaultProps = {
  validate: false,
};

export default function PasswordInput({
  setPassword,
  validate,
}: PasswordInputProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    if (validate && validator.isStrongPassword(value)) {
      setHasError(false);
      setPassword(value);
    } else if (value) {
      setHasError(false);
      setPassword(value);
    } else {
      setHasError(true);
      setPassword("");
    }
  }

  return (
    <input
      className={`auth_t-input ${hasError ? "wrong" : ""}`}
      onChange={handleChange}
      type="password"
      placeholder="password"
    />
  );
}

PasswordInput.defaultProps = defaultProps;
