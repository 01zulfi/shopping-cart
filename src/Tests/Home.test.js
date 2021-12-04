import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";

let container = {};

beforeEach(() => {
  ({ container } = render(<Home />));
});

test("home renders", () => {
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("home");
});

test("front section renders", () => {
  const frontSection = container.querySelector(".front-section");
  expect(frontSection).toBeInTheDocument();
});

test("boxes section renders", () => {
  const boxesSection = container.querySelector(".boxes-section");
  expect(boxesSection).toBeInTheDocument();
});

test("customer section renders", () => {
  const customerSection = container.querySelector(".customer-section");
  expect(customerSection).toBeInTheDocument();
});

test("shop button div renders", () => {
  const shopButtonDiv = container.querySelector(".shop-button-div");
  expect(shopButtonDiv).toBeInTheDocument();
});
