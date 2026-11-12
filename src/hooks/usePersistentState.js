import { useEffect, useState } from "react";
// Storage can be blocked or contain stale data. The site still works in memory.
export function usePersistentState(key, fallback, validate) {
  const [state, setState] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return validate(value) ? value : fallback;
    } catch {
      return fallback;
    }
  });
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [key, state]);
  return [state, setState, storageError];
}
