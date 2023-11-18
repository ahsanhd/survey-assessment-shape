import { QUESTION_NUMBER } from "../../general/utils";
import { useForward } from "../../hooks";

export const useRatingQuestion = (handleInputChange) => {
  const navigate = useForward();

  const handleRatingChange = (rating) => {
    handleInputChange(QUESTION_NUMBER.THIRD, rating.toString());
    navigate("/question/other-sources");
  };

  return handleRatingChange;
};
