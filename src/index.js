import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import GenreFilterContext from "./Context/GenreFilterContext";
import SearchContext from "./Context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContext>
        <GenreFilterContext>
          <App />
        </GenreFilterContext>
      </SearchContext>
    </BrowserRouter>
  </React.StrictMode>
);
