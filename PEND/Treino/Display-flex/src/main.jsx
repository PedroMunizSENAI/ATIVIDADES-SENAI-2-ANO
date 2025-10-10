import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
