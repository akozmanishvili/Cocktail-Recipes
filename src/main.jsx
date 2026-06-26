import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Cocktails from "./pages/Cocktails.jsx";
import SingleCocktail from "./pages/SingleCocktail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        path: "cocktails",
        element: <Cocktails></Cocktails>,
        path: "cocktails/:id",
        element: <SingleCocktail></SingleCocktail>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProviderouter router={router} />
  </StrictMode>,
);
