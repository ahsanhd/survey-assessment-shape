import { QUESTION_NUMBER } from "../../general/utils";
import { useForward } from "../../hooks";

export const useBalanceQuestion = (handleInputChange) => {
  const navigate = useForward();

  const handleClick = (option) => {
    handleInputChange(QUESTION_NUMBER.FIFTH, option);
    navigate("/thank-you");
  };

  return handleClick;
};
