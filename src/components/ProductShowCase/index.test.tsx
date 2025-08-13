import { render, screen } from "@testing-library/react";
import { store } from "../../store";
import ProductShowcase from "./";
import axios from "axios";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { useSearch } from "../../hooks/useSearchHook"; // Import the hook itself

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("../../hooks/useSearchHook", () => ({
  useSearch: jest.fn(),
}));
const mockedUseSearch = useSearch as jest.Mock;

const mockProdutos = [
  {
    id: 1,
    name: "Sérum Hidratante Facial",
    description: "Um sérum leve que hidrata profundamente a pele.",
    price: 89.9,
    image: "serum.jpg",
    tags: ["hidratação", "vegano"],
  },
  {
    id: 2,
    name: "Protetor Solar FPS 50",
    description: "Proteção solar de amplo espectro com toque seco.",
    price: 75.5,
    image: "protetor.jpg",
    tags: ["proteção solar", "pele oleosa"],
  },
];

describe("ProductShowcase", () => {
  test("deve renderizar os cards de produtos após a chamada da API", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockProdutos });
    mockedUseSearch.mockReturnValue({ term: "" });

    render(
      <Provider store={store}>
        <ProductShowcase />
      </Provider>
    );

    expect(
      await screen.findByText("Sérum Hidratante Facial")
    ).toBeInTheDocument();
    expect(screen.getByText("Protetor Solar FPS 50")).toBeInTheDocument();
  });

  test("deve filtrar e exibir apenas os produtos correspondentes ao termo de busca", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockProdutos });

    mockedUseSearch.mockReturnValue({ term: "Protetor" });

    render(
      <Provider store={store}>
        <ProductShowcase />
      </Provider>
    );

    const produtoVisivel = await screen.findByText("Protetor Solar FPS 50");
    expect(produtoVisivel).toBeInTheDocument();

    const produtoOculto = screen.queryByText("Sérum Hidratante Facial");
    expect(produtoOculto).not.toBeInTheDocument();
  });
});
