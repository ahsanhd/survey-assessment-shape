import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DateOfBirthQuestion.css";
import { DOB_Title, DOB_Prefix, DOB_Suffix } from "../data/surveyDataReady";

const DateOfBirthQuestion = ({ handleInputChange }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    days: "",
    months: "",
    years: "",
  });

  const validateDate = () => {
    const { day, month, year } = formData;
    let errors = {
      days: "",
      months: "",
      years: "",
    };

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
      errors.days = "Number of days is incorrect";
    }

    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      errors.months = "Number of months is incorrect";
    }

    if (isNaN(yearNumber) || yearNumber < 1920 || yearNumber > 2006) {
      errors.years = "Number of years is incorrect";
    }

    setErrorMessages(errors);

    return !errors.days && !errors.months && !errors.years;
  };

  const handleDateChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleOKButtonClick = () => {
    if (validateDate()) {
      // Date is valid, navigate to the next question
      navigate("/question/rating");
      const dateString = `${formData.day}-${formData.month}-${formData.year}`;
      handleInputChange("2", dateString);
    }
  };

  const handleEnterKeyPress = (e) => {
    // Check if the Enter key is pressed
    if (e.key === "Enter") {
      // Perform the same action as the OK button
      handleOKButtonClick();
      // handleInputChange();
    }
  };

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
};

export default DateOfBirthQuestion;
