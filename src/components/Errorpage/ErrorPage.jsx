import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-100">
  <h1 className="text-4xl text-gray-800 mb-4">Oops!</h1>
  <p className="text-lg text-gray-700 mb-2">Sorry, The page you are looking</p>
  <p className="text-lg text-gray-700 mb-2">
    <i>{error.statusText || error.message}</i>
  </p>
</div>

  );
}