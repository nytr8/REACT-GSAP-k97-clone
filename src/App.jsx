import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projets";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <div className="text-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
