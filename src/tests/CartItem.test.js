import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem";

test("cart item renders", () => {
  const { container } = render(<CartItem />);
  expect(container).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("cart-item-div");
});

test("diplays correct quantity value", () => {
  const { container } = render(<CartItem price={1} quantity={2} />);
  const input = container.querySelector("input");
  expect(Number(input.value)).toBe(2);
});
