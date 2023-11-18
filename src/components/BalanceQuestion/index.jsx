import React, { memo } from "react";
import "./index.styles.css";

import {
  Balance_Title,
  Balance_Prefix,
  Balance_Options,
} from "../../general/utils";
import { useBalanceQuestion } from "./index.hook";

const BalanceQuestion = memo(({ handleInputChange }) => {
  const handleClick = useBalanceQuestion(handleInputChange);

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
});

export default BalanceQuestion;
