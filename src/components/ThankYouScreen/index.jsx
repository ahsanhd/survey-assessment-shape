import { memo } from "react";
import { useThankYouScreen } from "./index.hook";

const ThankYou = memo(({ saveToLocalStorage, saveToFile }) => {
  useThankYouScreen(saveToLocalStorage, saveToFile);
  return (
    <div className="thank-you">
      <h1 className="thank-title">Thank You</h1>
      <p className="thank-text">
        Your answers have been recorded in local storage. Thanks for your time!
      </p>
    </div>
  );
});

export default ThankYou;
