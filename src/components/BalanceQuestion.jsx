import React from "react";
import "./BalanceQuestion.css";
import { useNavigate } from "react-router-dom";
import {
  Balance_Title,
  Balance_Prefix,
  Balance_Options,
} from "../data/surveyDataReady";

const BalanceQuestion = ({
  handleInputChange,
  saveToLocalStorage,
  saveToFile,
}) => {
  const navigate = useNavigate();

  const handleClick = (option) => {
    handleInputChange("5", option);
    // saveToLocalStorage();
    // saveToFile();
    navigate("/thank-you");
  };

  return (
    <div className="form-group">
      <label className="title-label">
        <span className="prefix-two">{Balance_Prefix}</span> {Balance_Title}
      </label>
      <ul className="options-list">
        {Balance_Options.map((option) => (
          <li key={option.option} className="options-list-item">
            <span
              className="clickable-option"
              onClick={() => handleClick(option.option)}
            >
              {`${option.option} `}
            </span>
            <span
              className="option-text"
              onClick={() => handleClick(option.text)}
            >
              {option.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceQuestion;
