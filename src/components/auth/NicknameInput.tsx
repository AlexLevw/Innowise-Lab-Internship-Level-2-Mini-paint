import React from "react";

interface NicknameInputProps {
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

export default function NicknameInput({
  setNickname,
}: NicknameInputProps): JSX.Element {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNickname(e.target.value);
  }

  return (
    <input
      className="auth_t-input"
      onChange={handleChange}
      type="text"
      placeholder="nickname"
    />
  );
}
