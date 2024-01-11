import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.js";
import ErrorPage from "./routes/ErrorPage/errorPage";
import DiabetesProjectPage from "./routes/DiabetesProjectPage.js";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/diabetesProject",
    element: <DiabetesProjectPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
