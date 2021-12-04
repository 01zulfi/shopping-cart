import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<div>Shop</div>} />
          <Route path="shop/cart" element={"Cart"} />
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
