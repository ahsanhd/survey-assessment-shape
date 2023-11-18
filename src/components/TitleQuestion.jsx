// components/TitleQuestion.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TitleQuestion.css";

import {
  Title_Prefix,
  Title_Heading,
  Drop_Down_Content,
} from "../data/surveyDataReady";

const TitleQuestion = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const handleInputChange = (sectionId, value) => {
    setFormData({
      ...formData,
      [sectionId]: value,
    });
    navigate("question/date-of-birth");
  };
  return (
    <div className="form-group">
      <label className="title-label">
        {" "}
        <span className="prefix-two">{Title_Prefix}</span> {Title_Heading}
      </label>
      <select
        className="select-input"
        onChange={(e) => handleInputChange("1", e.target.value)}
      >
        <option value="">Select</option>
        {Drop_Down_Content.map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TitleQuestion;
