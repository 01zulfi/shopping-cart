import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemPage from "../components/ItemPage";

test("item page renders", () => {
  const { container } = render(<ItemPage />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("item-page-section");
});

test("h1 renders", () => {
  const { container } = render(<ItemPage name="one" />);
  const name = container.querySelector("h1");
  expect(name).toHaveTextContent("one");
});
