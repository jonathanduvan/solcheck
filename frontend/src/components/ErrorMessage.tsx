// src/components/ErrorMessage.tsx

import styles from "./ErrorMessage.module.css";

export function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;

  return <div className={styles.error}>{message}</div>;
}
