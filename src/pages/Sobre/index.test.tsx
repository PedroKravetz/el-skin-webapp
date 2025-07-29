import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sobre from "../../pages/Sobre";

test("tela deve ser renderizada", () => {
  render(<Sobre />);
  expect(screen.getByText("Sobre a AL SKIN")).toBeInTheDocument();
});
