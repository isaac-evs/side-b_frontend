import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// This is the crucial line that loads our compiled Tailwind styles
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
