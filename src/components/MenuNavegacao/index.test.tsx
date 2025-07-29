import { render, screen } from "@testing-library/react";
import MenuNavegacao from "./";
import "@testing-library/jest-dom";

// 1. Simula o módulo de dados 'menusNavegacao'
jest.mock("./menusNavegacao", () => ({
  menusNavegacao: [
    { id: 1, nome: "Início" },
    { id: 2, nome: "Categorias" },
    { id: 3, nome: "Sobre Nós" },
  ],
}));

// 2. Simula o componente filho 'BannerPromocional'
jest.mock("../BannerPromocional", () => {
  return function DummyBannerPromocional() {
    return <div>Banner Promocional Mock</div>;
  };
});

describe("MenuNavegacao", () => {
  test("deve renderizar os links de navegação e o banner promocional", () => {
    // 3. Renderiza o componente
    render(<MenuNavegacao />);

    // 4. Verifica se os itens do menu mockado estão na tela
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Categorias")).toBeInTheDocument();
    expect(screen.getByText("Sobre Nós")).toBeInTheDocument();

    // 5. Verifica se o componente BannerPromocional mockado está na tela
    expect(screen.getByText("Banner Promocional Mock")).toBeInTheDocument();
  });
});