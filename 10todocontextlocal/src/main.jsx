import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // Please don't enable StrictMode as it conflicts and reset localStorage values to empty []
  <StrictMode>
  <App />
  </StrictMode>,
);
