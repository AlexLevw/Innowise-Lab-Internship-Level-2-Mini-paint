import React, { useRef } from "react";
import styles from "./_styles.module.scss";

interface SearchInputProps {
  filter: (word: string) => void;
}

export default function SearchInput({ filter }: SearchInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  function handleInputChange(): void {
    if (inputRef.current) {
      filter(inputRef.current.value);
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        onChange={handleInputChange}
        ref={inputRef}
        type="text"
        placeholder="username"
      />
    </div>
  );
}
