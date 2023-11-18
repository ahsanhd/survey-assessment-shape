// SurveyFormContent.js
import React from "react";
import { Link } from "react-router-dom";

const SurveyFormContent = ({ handleSubmit }) => (
  <>
    <div>Survey Form</div>

    {/* Route to each question */}
    <Link to="/">Title</Link>
    <Link to="/question/date-of-birth">Date of Birth</Link>
    <Link to="/question/rating">Rating</Link>
    <Link to="/question/other-sources">Other Sources</Link>
    <Link to="/question/balance">Balance</Link>

    <button className="submit-button" onClick={handleSubmit}>
      Submit
    </button>
  </>
);

export default SurveyFormContent;
