// components/RatingQuestion.js
import React from "react";
import "./RatingQuestion.css"; // Import your stylesheet for RatingQuestion
import { useNavigate } from "react-router-dom";
import {
  Rating_Top_Title,
  Rating_Top_Prefix,
  Rating_Second_Title,
  Rating_Second_Prefix,
  Rating_Numbers,
} from "../data/surveyDataReady";
const RatingQuestion = ({ handleInputChange }) => {
  const navigate = useNavigate();

  const handleRatingChange = (rating) => {
    // Call the handleInputChange function with the selected rating
    handleInputChange("3", rating.toString());
    navigate("/question/other-sources");
  };

  return (
    <div className="form-group rating-container">
      <p className="title-label">
        <span className="prefix-two">{Rating_Top_Prefix}</span>{" "}
        {Rating_Top_Title}
      </p>
      <label className="title-label">
        <span className="suffix">{Rating_Second_Prefix}</span>
        {Rating_Second_Title}
      </label>
      <div className="radio-group">
        {Rating_Numbers.map((rating) => (
          <div key={rating} className="radio-label">
            <input
              type="radio"
              name="rating"
              value={rating}
              className="radio-input"
              id={`rating-${rating}`}
              onChange={() => handleRatingChange(rating)}
            />
            <label
              htmlFor={`rating-${rating}`}
              className="radio-button-container"
            >
              {rating}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingQuestion;
