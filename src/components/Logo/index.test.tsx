import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./";

test("tela deve ser renderizada", () => {
  render(<Logo />);
  expect(screen.getByText("AL SKIN")).toBeInTheDocument();
});
