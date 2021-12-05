import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemPage from "../components/ItemPage";

test("does not render for undefined route name", () => {
  const { container } = render(<ItemPage />);
  expect(container.firstChild).toBeNull();
});
