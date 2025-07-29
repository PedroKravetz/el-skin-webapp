import { render, screen } from "@testing-library/react";
import { CartProvider } from "../../context/CartContext"; // 1. Importe o Provider
import ProductShowcase from "./";
import axios from "axios";
import "@testing-library/jest-dom";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockProdutos = [
  // ... (seus dados mockados continuam iguais)
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

    // 2. Envolva o componente com o Provider na hora de renderizar
    render(
      <CartProvider>
        <ProductShowcase />
      </CartProvider>
    );

    const primeiroProduto = await screen.findByText("Sérum Hidratante Facial");

    expect(primeiroProduto).toBeInTheDocument();
    expect(screen.getByText("Protetor Solar FPS 50")).toBeInTheDocument();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:3001/products"
    );
  });
});
