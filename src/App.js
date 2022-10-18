import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import PgFOF from "./Components/PgFOF";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
