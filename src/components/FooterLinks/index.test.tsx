import { render, screen } from "@testing-library/react";
import FooterLinks from "./";
import { Links } from "../../types/types";
import "@testing-library/jest-dom";

// 1. Dados mockados que cobrem as duas condições do componente
const mockLinks: Links[] = [
  {
    id: 1,
    principal: "Sobre a AL SKIN",
    subs: ["quem somos", "carreiras"],
  },
  {
    id: 2,
    principal: "Atendimento",
    subs: ["al@alskin.com.br", "ajuda"],
  },
];

describe("FooterLinks", () => {
  test("deve renderizar os links e validar a tag <a> para a seção 'Sobre'", () => {
    render(<FooterLinks link={mockLinks} />);

    // --- VERIFICA A SEÇÃO 'SOBRE' ---

    // 2. Procura pelo link com o nome específico e verifica se existe
    const sobreLink = screen.getByRole("link", { name: /sobre a al skin/i });
    expect(sobreLink).toBeInTheDocument();

    // 3. Verifica se o link tem o atributo href correto
    expect(sobreLink).toHaveAttribute("href", "/sobre");

    // --- VERIFICA A SEÇÃO 'ATENDIMENTO' ---

    // 4. Verifica se o título 'Atendimento' existe, mas NÃO é um link
    const atendimentoTitle = screen.getByText("Atendimento");
    expect(atendimentoTitle).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /atendimento/i })
    ).not.toBeInTheDocument();

    // --- VERIFICA OS SUB-LINKS ---

    // 5. Verifica se todos os sub-links de ambas as seções estão na tela
    expect(screen.getByText("- quem somos")).toBeInTheDocument();
    expect(screen.getByText("- carreiras")).toBeInTheDocument();
    expect(screen.getByText("- al@alskin.com.br")).toBeInTheDocument();
    expect(screen.getByText("- ajuda")).toBeInTheDocument();
  });
});
