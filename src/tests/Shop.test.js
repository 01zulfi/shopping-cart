import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop";

test("shop renders", () => {
  const { container } = render(<Shop />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("shop");
});

test("at least one item renders", () => {
  const { container } = render(<Shop />);
  const item = container.querySelector(".item-div");
  expect(item).toBeInTheDocument();
});
