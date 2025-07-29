import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "./";

test("tela deve ser renderizada", () => {
  render(<NotFound />);
  expect(screen.getByText("Página não encontrada")).toBeInTheDocument();
});
