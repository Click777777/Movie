import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import PaginationContext from "./Context/PaginationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PaginationContext>
        <App />
      </PaginationContext>
    </BrowserRouter>
  </React.StrictMode>
);
