import { useState } from "react";
import { useForward } from "../../hooks";
import { ERROR_MESSAGES, QUESTION_NUMBER } from "../../general/utils";

const CHAR_LIMIT = 250;

export const useOtherSourcesQuestion = (handleInputChange) => {
  const navigate = useForward();
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSkipButtonClick = () => {
    navigate("/question/balance");
  };

  const handleOKButtonClick = () => {
    if (!validateCharacterLimit()) return;
    navigate("/question/balance");
    handleInputChange(QUESTION_NUMBER.FOURTH, inputValue);
  };

  const handleEnterKeyPress = (e) => {
    const enterIsPressed = e.key === "Enter";
    if (!enterIsPressed) return;
    handleOKButtonClick();
  };

  const handleInputChangeInternal = (value) => {
    setInputValue(value);
    setErrorMessage("");
  };

  const validateCharacterLimit = () => {
    if (inputValue.length > CHAR_LIMIT) {
      setErrorMessage(ERROR_MESSAGES.CHAR_LIMIT_REACH);
      return false;
    }
    return true;
  };

  return {
    errorMessage,
    handleSkipButtonClick,
    handleEnterKeyPress,
    handleInputChangeInternal,
    inputValue,
    handleOKButtonClick,
  };
};
