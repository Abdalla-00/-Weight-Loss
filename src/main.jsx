import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeightLoss from "./Pages/WeightLoss.jsx";
import Nutrition from "./Pages/Nutrition.jsx";
import Recipes from "./Pages/Recipes.jsx";
import Lifestyle from "./Pages/Lifestyle.jsx";
import SignIn from "./Pages/SignIn.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/register.jsx";

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "WeightLoss",
        element: <WeightLoss />,
      },
      {
        path: "Nutrition",
        element: <Nutrition />,
      },
      {
        path: "Recipes",
        element: <Recipes />,
      },
      {
        path: "Lifestyle",
        element: <Lifestyle />,
      },
      {
        path: "SignIn",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
);
