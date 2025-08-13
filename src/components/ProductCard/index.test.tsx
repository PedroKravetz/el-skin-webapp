import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from ".";
import "@testing-library/jest-dom";

const mockAdicionarProduto = jest.fn();

jest.mock("../../hooks/useCartHook", () => ({
  useCartHook: () => ({
    addItem: mockAdicionarProduto,
  }),
}));

jest.mock("../../assets/sacola-de-compras.png", () => "sacola-mock.png");

describe("ProductCard", () => {
  const mockProps = {
    id: 1,
    nome: "Café Especial",
    descricao: "Um café de sabor único e aroma marcante.",
    preco: 25.5,
    srcImg: "cafe.jpg",
    alt: "Xícara de café especial",
    tags: ["especial", "arábica"],
  };

  beforeEach(() => {
    mockAdicionarProduto.mockClear();
  });

  test("deve renderizar corretamente com as props fornecidas", () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText("Café Especial")).toBeInTheDocument();
    expect(
      screen.getByText("Um café de sabor único e aroma marcante.")
    ).toBeInTheDocument();
    expect(screen.getByText("R$ 25.50")).toBeInTheDocument();

    const image = screen.getByRole("img", { name: /xícara de café especial/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "cafe.jpg");

    // Verifica se as tags são renderizadas
    expect(screen.getByText("especial")).toBeInTheDocument();
    expect(screen.getByText("arábica")).toBeInTheDocument();
  });

  // 4. Teste de Interação
  test("deve chamar adicionarProduto com os dados corretos ao clicar em 'comprar'", async () => {
    const user = userEvent;
    render(<ProductCard {...mockProps} />);

    // Encontra o botão de compra
    const buyButton = screen.getByRole("button", { name: /comprar/i });

    // Simula o clique do usuário
    user.click(buyButton);

    // Verifica se a função mock foi chamada
    expect(mockAdicionarProduto).toHaveBeenCalledTimes(1);

    // Verifica se a função foi chamada com o payload correto
    expect(mockAdicionarProduto).toHaveBeenCalledWith({
      id: String(mockProps.id),
      name: mockProps.nome,
      price: mockProps.preco,
      image: mockProps.srcImg,
    });
  });

  test("deve usar uma imagem placeholder se srcImg não for fornecido", () => {
    render(<ProductCard {...mockProps} srcImg="" />); // Passando srcImg vazia

    const image = screen.getByRole("img", { name: mockProps.alt });
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/250");
  });
});
