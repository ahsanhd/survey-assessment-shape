import { Suspense } from "react";
import { Loader } from "../../components/Loader";

export const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
