import { useState } from "react";

export const useSurveyForm = () => {
  const [formData, setFormData] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const handleInputChange = (sectionId, value) => {
    setFormData({
      ...formData,
      [sectionId]: value,
    });
  };

  const saveToLocalStorage = () => {
    if (Object.values(formData).every((value) => value !== "")) {
      const formDataJSON = JSON.stringify(formData);

      localStorage.setItem("surveyFormData", formDataJSON);
      console.info(
        "After saving to local storage:",
        localStorage.getItem("surveyFormData")
      );
    }
  };

  const saveToFile = () => {
    if (Object.values(formData).every((value) => value !== "")) {
      const formDataJSON = JSON.stringify(formData, null, 2);
      const blob = new Blob([formDataJSON], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "survey_answers.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return {
    handleInputChange,
    formData,
    setFormData,
    saveToFile,
    saveToLocalStorage,
  };
};
