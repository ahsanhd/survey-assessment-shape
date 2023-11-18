// SubmissionMessage.js
import React from "react";
import { Link } from "react-router-dom";

const SubmissionMessage = () => (
  <div className="submission-message">
    <h1>Thank You</h1>
    <p>Your answers have been recorded. Thanks for your time!</p>
    <Link to="/thank-you">To Download </Link>
  </div>
);

export default SubmissionMessage;
