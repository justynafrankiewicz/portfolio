import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./global.css";
import "./i18n";
import { HomePage } from "./pages/HomePage/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
