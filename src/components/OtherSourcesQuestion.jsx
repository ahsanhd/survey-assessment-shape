import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtherSourcesQuestion.css";
import {
  Other_Sources_Title,
  Other_Sources_Prefix,
  Other_Sources_Suffix,
  Other_Sources_CharLimit,
} from "../data/surveyDataReady";

const CharLimit = 250;

const OtherSourcesQuestion = ({ handleInputChange }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(""); // State to track the input value
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleSkipButtonClick = () => {
    navigate("/question/balance");
  };

  const handleOKButtonClick = () => {
    if (validateCharacterLimit()) {
      // Character limit is not exceeded, navigate to the next question
      navigate("/question/balance");
      handleInputChange("4", inputValue);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOKButtonClick();
    }
  };

  const handleInputChangeInternal = (value) => {
    setInputValue(value);

    // Clear the error message when the user starts typing
    setErrorMessage("");
  };

  const validateCharacterLimit = () => {
    if (inputValue.length > CharLimit) {
      setErrorMessage("Character limit exceeded");
      return false;
    }
    return true;
  };

  return (
    <div className="form-group">
      <label className="title-label">
        {" "}
        <span className="prefix-two">{Other_Sources_Prefix}</span>
        {Other_Sources_Title}
        <span className="extra-info" title={Other_Sources_Suffix}>
          i
        </span>
      </label>
      <div className="text-box-container">
        <span className="char-limit">{Other_Sources_CharLimit}</span>
        <textarea
          className="textarea-input"
          value={inputValue}
          onChange={(e) => handleInputChangeInternal(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="button-container">
          <span className="skip-button" onClick={handleSkipButtonClick}>
            Skip
          </span>
          <button className="ok-button" onClick={handleOKButtonClick}>
            OK
          </button>
          <span className="or-press-enter">or press Enter</span>
        </div>
      </div>
    </div>
  );
};

export default OtherSourcesQuestion;
