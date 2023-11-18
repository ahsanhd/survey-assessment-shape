import "./index.styles.css";
import { DOB_Title, DOB_Prefix, DOB_Suffix } from "../../general/utils";
import { useDOBQuestion } from "./index.hook";
import { memo } from "react";

const DateOfBirthQuestion = memo(({ handleInputChange }) => {
  const {
    errorMessages,
    handleEnterKeyPress,
    handleDateChange,
    formData,
    handleOKButtonClick,
  } = useDOBQuestion(handleInputChange);

  return (
    <div
      className={`form-group ${
        errorMessages.days || errorMessages.months || errorMessages.years
          ? "incorrect-date"
          : ""
      }`}
    >
      <label className="title-label">
        <span className="prefix-two">{DOB_Prefix}</span> {DOB_Title}
        <span className="extra-info" title={DOB_Suffix}>
          i
        </span>
      </label>
      <div className="date-input-group">
        <div>
          <label>Day</label>
          <input
            type="number"
            className={`date-input ${errorMessages.days ? "incorrect" : ""}`}
            value={formData.day}
            placeholder="DD"
            onChange={(e) => handleDateChange("day", e.target.value)}
            onKeyDown={handleEnterKeyPress}
          />
          {errorMessages.days && (
            <div className="error-message">{errorMessages.days}</div>
          )}
        </div>

        <div>
          <label>Month</label>
          <input
            type="number"
            className={`date-input ${errorMessages.months ? "incorrect" : ""}`}
            value={formData.month}
            placeholder="MM"
            onChange={(e) => handleDateChange("month", e.target.value)}
            onKeyDown={handleEnterKeyPress}
          />
          {errorMessages.months && (
            <div className="error-message">{errorMessages.months}</div>
          )}
        </div>

        <div>
          <label>Year</label>
          <input
            type="number"
            className={`date-input ${errorMessages.years ? "incorrect" : ""}`}
            value={formData.year}
            placeholder="YYYY"
            onChange={(e) => handleDateChange("year", e.target.value)}
            onKeyDown={handleEnterKeyPress}
          />
          {errorMessages.years && (
            <div className="error-message">{errorMessages.years}</div>
          )}
        </div>
      </div>
      <div className="button-area">
        <button className="ok-button" onClick={handleOKButtonClick}>
          OK
        </button>
        <span className="or-press-enter">or press Enter</span>
      </div>
    </div>
  );
});

export default DateOfBirthQuestion;
