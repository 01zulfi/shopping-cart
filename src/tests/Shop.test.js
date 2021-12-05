import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop";

test("shop renders", () => {
  const { container } = render(<Shop />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("shop");
});

test("items render", () => {
  const { container } = render(<Shop />);
  const item = container.querySelectorAll(".item-div");
  expect(item).toHaveLength(7);
});

test("first asteroid renders correct info", () => {
  const { container } = render(<Shop />);
  const firstName = container.querySelector(".asteroid-name");
  const firstPrice = container.querySelector(".asteroid-price");

  expect(firstName).toHaveTextContent("1 Ceres");
  expect(firstPrice).toHaveTextContent("253");
});
