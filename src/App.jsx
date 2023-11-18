import { Fragment, lazy } from "react";

import { SuspenseWrapper } from "./layout/SuspenseWrapper";

const SurveyForm = lazy(() => import("./pages/SurveyForm/index"));

const App = () => {
  return (
    <Fragment>
      <SuspenseWrapper>
        <SurveyForm />
      </SuspenseWrapper>
    </Fragment>
  );
};

export default App;
