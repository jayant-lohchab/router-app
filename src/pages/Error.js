import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Something went wrong and  we dont know status";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find the page";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
