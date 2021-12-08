import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ItemPage from "./components/ItemPage";
import CartPage from "./components/CartPage";
import "./styles/App.css";

function App() {
  const [cartLength, setCartLength] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navbar cartLength={cartLength} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="shop/asteroid/:name"
            element={<ItemPage setCartLength={setCartLength} />}
          />
          <Route
            path="shop/cart"
            element={<CartPage setCartLength={setCartLength} />}
          />
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
