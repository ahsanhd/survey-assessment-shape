// ThankYou.js
import React, { useEffect } from "react";

const ThankYou = ({ saveToLocalStorage, saveToFile }) => {
  useEffect(() => {
    saveToLocalStorage();
    saveToFile();
  });
  return (
    <div className="thank-you">
      <h1 className="thank-title">Thank You</h1>
      <p className="thank-text">
        Your answers have been recorded in local storage. Thanks for your time!
      </p>
    </div>
  );
};

export default ThankYou;
