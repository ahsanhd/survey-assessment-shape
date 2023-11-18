import { useEffect } from "react";

export const useThankYouScreen = (saveToLocalStorage, saveToFile) => {
  useEffect(() => {
    saveToLocalStorage();
    saveToFile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
