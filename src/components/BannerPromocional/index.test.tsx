import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BannerPromocional from ".";

test("tela deve ser renderizada", () => {
  render(<BannerPromocional />);
  expect(screen.getByText("Kits até 50% OFF")).toBeInTheDocument();
});
