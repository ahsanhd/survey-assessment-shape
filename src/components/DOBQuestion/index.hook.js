import { useState } from "react";
import { useForward } from "../../hooks";
import { QUESTION_NUMBER } from "../../general/utils";

export const useDOBQuestion = (handleInputChange) => {
  const navigate = useForward();
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
      navigate("/question/rating");
      const dateString = `${formData.day}-${formData.month}-${formData.year}`;
      handleInputChange(QUESTION_NUMBER.SECOND, dateString);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOKButtonClick();
    }
  };

  return {
    handleEnterKeyPress,
    handleDateChange,
    errorMessages,
    formData,
    handleOKButtonClick,
  };
};
