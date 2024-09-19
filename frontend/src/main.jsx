import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { GlobalProvider } from "./context/GlobalProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GlobalProvider>
  </React.StrictMode>
);
