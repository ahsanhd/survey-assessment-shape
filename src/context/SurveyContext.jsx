import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  formData: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  },
};

const ACTIONS = {
  SET_FORM_DATA: "SET_FORM_DATA",
};

const surveyFormReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const SurveyFormContext = createContext();

export const SurveyFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(surveyFormReducer, initialState);

  const setFormData = (formData) => {
    dispatch({ type: ACTIONS.SET_FORM_DATA, payload: formData });
  };

  return (
    <SurveyFormContext.Provider value={{ state, setFormData }}>
      {children}
    </SurveyFormContext.Provider>
  );
};

export const useSurveyForm = () => {
  const context = useContext(SurveyFormContext);
  if (!context) {
    throw new Error("useSurveyForm must be used within a SurveyFormProvider");
  }
  return context;
};
