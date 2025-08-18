import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./";
import "@testing-library/jest-dom";
import { useCartHook } from "../../hooks/useCartHook";

jest.mock("../../hooks/useCartHook");
const mockedUseCartHook = useCartHook as jest.Mock;

jest.mock("../../hooks/useSearchHook", () => ({
  useSearch: () => ({
    term: "",
    setTerm: jest.fn(),
    clearSearch: jest.fn(),
  }),
}));

describe("Header", () => {
  test("deve renderizar todos os componentes filhos e a quantidade do carrinho", () => {
    mockedUseCartHook.mockReturnValue({
      getTotalItems: jest.fn().mockReturnValue(5),
    });

    render(<Header />);

    expect(screen.getByText("AL SKIN")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("O que você está procurando?")
    ).toBeInTheDocument();
    expect(screen.getByText("Categorias")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("deve abrir o modal do carrinho ao clicar na sacola e fechá-lo em seguida", () => {
    mockedUseCartHook.mockReturnValue({
      getTotalItems: jest.fn().mockReturnValue(0),
      items: [],
    });
    render(<Header />);

    const sacolaButton = screen.getByAltText("sacola de compras");
    fireEvent.click(sacolaButton);
    expect(screen.getByText("Seu carrinho está vazio")).toBeInTheDocument();

    const closeModalButton = screen.getByRole("button", {
      name: /X/i,
    });
    fireEvent.click(closeModalButton);
    expect(
      screen.queryByText("Seu carrinho está vazio")
    ).not.toBeInTheDocument();
  });
});
