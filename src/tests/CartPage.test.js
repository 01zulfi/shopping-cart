import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartPage from "../components/CartPage";

test("cart renders", () => {
  const { container } = render(<Cart />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("cart");
});
