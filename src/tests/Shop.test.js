import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Shop from "../components/Shop";

let container = {};

const Test = () => {
  let params = useParams();
  return <h1>{params.name}</h1>;
};

beforeEach(() => {
  ({ container } = render(
    <BrowserRouter>
      <Routes>
        <Route index element={<Shop />} />
        <Route path="shop/asteroid/:name" element={<Test />} />
      </Routes>
    </BrowserRouter>
  ));
});

test("shop renders", () => {
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveClass("shop");
});

test("items render", () => {
  const items = container.querySelectorAll(".item-div");
  expect(items).toHaveLength(7);
});

test("first asteroid renders correct info", () => {
  const firstName = container.querySelector(".asteroid-name");
  const firstPrice = container.querySelector(".asteroid-price");

  expect(firstName).toHaveTextContent("1 Ceres");
  expect(firstPrice).toHaveTextContent("253");
});

test("clicking navigates to correct page", () => {
  const item = container.querySelector(".item-div");

  userEvent.click(item);

  const name = document.querySelector("h1");
  expect(name).toHaveTextContent("1-ceres");

  const shop = document.querySelector(".shop");
  expect(shop).toBeNull();
});
