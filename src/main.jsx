import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locales/en/global.json";
import global_it from "./locales/it/global.json";
import App from "./App.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/curriculum",
    element: <Curriculum />,
  },
];

const router = createBrowserRouter(routerConfig);

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    it: {
      global: global_it,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
