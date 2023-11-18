// SurveyForm.js
import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleQuestion from "../../components/TitleQuestion";
import DateOfBirthQuestion from "../../components/DOBQuestion";
import RatingQuestion from "../../components/RatingQuestion";
import OtherSourcesQuestion from "../../components/OtherSourcesQuestion";
import BalanceQuestion from "../../components/BalanceQuestion";
import ThankYou from "../../components/ThankYouScreen";
import "./index.styles.css";
import { useSurveyForm } from "./index.hook";

const SurveyForm = memo(() => {
  const {
    handleInputChange,
    formData,
    setFormData,
    saveToFile,
    saveToLocalStorage,
  } = useSurveyForm();

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
});

export default SurveyForm;
