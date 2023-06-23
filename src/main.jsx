import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GoogleContextProvider from "./contexts/GoogleContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleContextProvider>
      <App />
    </GoogleContextProvider>
  </React.StrictMode>
);
