import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarraPesquisa from ".";

test("tela deve ser renderizada", () => {
  render(<BarraPesquisa />);
  expect(screen.getByPlaceholderText("O que você está procurando?")).toBeInTheDocument();
});
