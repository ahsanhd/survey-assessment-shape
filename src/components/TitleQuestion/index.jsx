// components/TitleQuestion.js
import React, { memo } from "react";
import "./index.styles.css";

import {
  Title_Prefix,
  Title_Heading,
  Drop_Down_Content,
} from "../../general/utils";
import { useTitleQuestion } from "./index.hook";

const TitleQuestion = memo(({ formData, setFormData }) => {
  const { handleInputChange } = useTitleQuestion(formData, setFormData);
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
});

export default TitleQuestion;
