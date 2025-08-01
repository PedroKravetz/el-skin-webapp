import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./";
import "@testing-library/jest-dom";

// Mock do hook (está correto)
jest.mock("../../hooks/useCartHook", () => ({
  useCartHook: () => ({
    quantidade: 5,
    items: [],
  }),
}));

// O resto do seu arquivo de teste permanece exatamente o mesmo...

describe("Header", () => {
  test("deve renderizar todos os componentes filhos e a quantidade do carrinho", () => {
    render(<Header />);

    expect(screen.getByText("AL SKIN")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("O que você está procurando?")
    ).toBeInTheDocument();
    expect(screen.getByText("Categorias")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("deve abrir o modal do carrinho ao clicar na sacola e fechá-lo em seguida", () => {
    render(<Header />);

    const sacolaButton = screen.getByAltText("sacola de compras");
    fireEvent.click(sacolaButton);
    expect(screen.getByText("Seu carrinho está vazio")).toBeInTheDocument();

    const closeModalButton = screen.getByRole("button", {
      name: /X/i,
    });
    fireEvent.click(closeModalButton);
    expect(screen.queryByText("Seu carrinho está vazio")).not.toBeInTheDocument();
  });
});
