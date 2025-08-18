import { render, screen } from "@testing-library/react";
import Footer from "./";
import "@testing-library/jest-dom";

// 1. Simula o componente filho 'FooterLinks' para isolar o teste
jest.mock("../FooterLinks", () => {
  return function DummyFooterLinks() {
    return <div>Footer Links Mock</div>;
  };
});

// 2. Simula o módulo de dados 'links'.
//    Não precisamos de dados reais aqui, pois o componente que os usa está mockado.
jest.mock("../../data/links", () => ({
  links: [],
}));

describe("Footer", () => {
  test("deve renderizar os ícones de redes sociais e o componente de links", () => {
    render(<Footer />);

    // 3. Verifica se todos os ícones de redes sociais estão na tela
    //    A melhor forma de encontrá-los é pelo 'alt text' da imagem.
    expect(screen.getByAltText("facebook logo")).toBeInTheDocument();
    expect(screen.getByAltText("github logo")).toBeInTheDocument();
    expect(screen.getByAltText("instagram logo")).toBeInTheDocument();
    expect(screen.getByAltText("linkedin logo")).toBeInTheDocument();
    expect(screen.getByAltText("tiktok logo")).toBeInTheDocument();
    expect(screen.getByAltText("twitter logo")).toBeInTheDocument();
    expect(screen.getByAltText("whatsapp logo")).toBeInTheDocument();

    // 4. Verifica se o componente mockado 'FooterLinks' foi renderizado
    expect(screen.getByText("Footer Links Mock")).toBeInTheDocument();
  });
});
