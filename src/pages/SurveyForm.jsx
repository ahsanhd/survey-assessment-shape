// SurveyForm.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleQuestion from "../components/TitleQuestion";
import DateOfBirthQuestion from "../components/DateOfBirthQuestion";
import RatingQuestion from "../components/RatingQuestion";
import OtherSourcesQuestion from "../components/OtherSourcesQuestion";
import BalanceQuestion from "../components/BalanceQuestion";
import ThankYou from "../components/ThankYou";
import "./SurveyForm.css";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  console.log(formData);

  const handleInputChange = (sectionId, value) => {
    setFormData({
      ...formData,
      [sectionId]: value,
    });
  };

  const saveToLocalStorage = () => {
    console.log("Saving to local storage");
    // Check if all values in formData are filled
    if (Object.values(formData).every((value) => value !== "")) {
      // Convert formData to JSON format
      const formDataJSON = JSON.stringify(formData);
      console.log(formDataJSON);
      // Store the JSON data in local storage
      localStorage.setItem("surveyFormData", formDataJSON);
      console.log(
        "After saving to local storage:",
        localStorage.getItem("surveyFormData")
      );
    }
  };

  const saveToFile = () => {
    // Check if all values in formData are filled
    if (Object.values(formData).every((value) => value !== "")) {
      // Convert formData to JSON format
      const formDataJSON = JSON.stringify(formData, null, 2); // Beautify the JSON with indentation

      // Create a Blob with the JSON data
      const blob = new Blob([formDataJSON], { type: "application/json" });

      // Create a download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "survey_answers.json";

      document.body.appendChild(link);

      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
    }
  };

  return (
    <BrowserRouter>
      <div className="survey-form-container">
        <Routes>
          <Route
            path="/"
            element={
              <TitleQuestion setFormData={setFormData} formData={formData} />
            }
          />
          <Route
            path="/question/date-of-birth"
            element={
              <DateOfBirthQuestion handleInputChange={handleInputChange} />
            }
          />
          <Route
            path="/question/rating"
            element={<RatingQuestion handleInputChange={handleInputChange} />}
          />
          <Route
            path="/question/other-sources"
            element={
              <OtherSourcesQuestion handleInputChange={handleInputChange} />
            }
          />
          <Route
            path="/question/balance"
            element={<BalanceQuestion handleInputChange={handleInputChange} />}
          />
          <Route
            path="/thank-you"
            element={
              <ThankYou
                saveToLocalStorage={saveToLocalStorage}
                saveToFile={saveToFile}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default SurveyForm;
