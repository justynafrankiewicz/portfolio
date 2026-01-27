import "./index.css";
import "./global.css";
import "./i18n";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { HomePage } from "./pages/HomePage/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <HomePage />
    </HashRouter>
  </StrictMode>
);
