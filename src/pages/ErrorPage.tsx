import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const [errorMessages, setErrorMessages] =
    useState<string>("Loading error...");
  const error = useRouteError() as AxiosError;
  const status = error.status || 500;

  useEffect(() => {
    if (status === 404) {
      setErrorMessages("Page not found");
    } else if (status === 401) {
      setErrorMessages("Unauthorized");
    } else if (status === 500) {
      setErrorMessages("Internal server error");
    } else {
      setErrorMessages("An error occurred");
    }
  }, [status]); // Dependency array with 'status' to run effect only when 'status' changes

  return <h1>Error: {errorMessages}</h1>;
};

export default ErrorPage;
