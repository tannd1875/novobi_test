import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from "./pages/AddPatient";
import SearchPatient from "./pages/SearchPatient";
import DeactivatePatient from "./pages/DeactivatePatient";
import "./styles/animation.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/add-patient" element={<AddPatient />}></Route>
        <Route path="/search-patient" element={<SearchPatient />}></Route>
        <Route
          path="/deactivate-patient"
          element={<DeactivatePatient />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
