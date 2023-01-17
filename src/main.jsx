import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./Context";
import { BrowserRouter } from "react-router-dom";
import "./sass/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
