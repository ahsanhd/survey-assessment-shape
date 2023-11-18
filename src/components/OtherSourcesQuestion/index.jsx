import "./index.styles.css";
import {
  Other_Sources_Title,
  Other_Sources_Prefix,
  Other_Sources_Suffix,
  Other_Sources_CharLimit,
} from "../../general/utils";
import { useOtherSourcesQuestion } from "./index.hook";
import { memo } from "react";

const OtherSourcesQuestion = memo(({ handleInputChange }) => {
  const {
    errorMessage,
    handleSkipButtonClick,
    handleEnterKeyPress,
    handleInputChangeInternal,
    inputValue,
    handleOKButtonClick,
  } = useOtherSourcesQuestion(handleInputChange);

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
});

export default OtherSourcesQuestion;
