import { useForward } from "../../hooks";

export const useTitleQuestion = (formData, setFormData) => {
  const navigate = useForward();
  const handleInputChange = (sectionId, value) => {
    setFormData({
      ...formData,
      [sectionId]: value,
    });
    navigate("question/date-of-birth");
  };

  return {
    handleInputChange,
  };
};
