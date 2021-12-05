import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

test("navbar renders", () => {
  const { container } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("navbar");
});

test("navlink renders", () => {
  const { container, getByText } = render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
  const navlinks = container.querySelector(".nav-links");
  const home = getByText("Home");
  const shop = getByText("Shop");

  expect(navlinks).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(shop).toBeInTheDocument();
});
