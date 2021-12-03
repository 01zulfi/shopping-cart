import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
