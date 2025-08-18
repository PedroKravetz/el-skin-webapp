import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarraPesquisa from ".";
import { useSearch } from "../../hooks/useSearchHook";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/useSearchHook");
const mockedUseSearchHook = useSearch as jest.Mock;

test("tela deve ser renderizada", () => {
  const mockSetTerm = jest.fn();
  mockedUseSearchHook.mockReturnValue({
    term: "", // Valor inicial
    setTerm: mockSetTerm,
  });
  render(<BarraPesquisa />);
  expect(
    screen.getByPlaceholderText("O que você está procurando?")
  ).toBeInTheDocument();
});

test("deve chamar a função setTerm ao digitar no input", async () => {
  const mockSetTerm = jest.fn();

  // Configura o retorno do hook para usar nossa função mock
  mockedUseSearchHook.mockReturnValue({
    term: "", // Valor inicial
    setTerm: mockSetTerm,
  });

  render(<BarraPesquisa />);

  // Encontra o input
  const input = screen.getByPlaceholderText("O que você está procurando?");

  // Simula o usuário digitando a palavra "hidratante"
  userEvent.click(input);
  userEvent.type(input, "hidratante");

  // 3. Asserções
  // Verifica se a função mock foi chamada 10 vezes (uma para cada letra)
  expect(mockSetTerm).toHaveBeenCalledTimes(10);
  // Verifica se a última chamada foi feita com o texto completo
  expect(mockSetTerm).toHaveBeenLastCalledWith("e");
});
