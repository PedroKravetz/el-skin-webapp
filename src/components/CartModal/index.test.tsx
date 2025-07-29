import { render, screen, fireEvent } from "@testing-library/react";
import CartModal from "./";
import "@testing-library/jest-dom";
import { useCartHook } from "../../hooks/useCartHook";

// Simula o hook para podermos controlar os dados que o componente recebe
jest.mock("../../hooks/useCartHook");
const mockedUseCartHook = useCartHook as jest.Mock;

describe("CartModal", () => {
  // Mock da função onClose que será passada como prop
  const onCloseMock = jest.fn();

  // Limpa os mocks após cada teste para garantir que um teste não interfira no outro
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Teste 1: Verifica se o modal não é renderizado quando `isOpen` é falso
  test("não deve renderizar quando a prop isOpen for falsa", () => {
    mockedUseCartHook.mockReturnValue({ items: [] });
    render(<CartModal isOpen={false} onClose={onCloseMock} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  // Teste 2: Cenário do carrinho vazio
  test("deve exibir a mensagem de carrinho vazio quando não houver itens", () => {
    mockedUseCartHook.mockReturnValue({
      items: [],
      valor: 0,
    });

    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    expect(screen.getByText("Seu carrinho está vazio")).toBeInTheDocument();
  });

  // Teste 3: Cenário com itens no carrinho
  test("deve exibir os itens e o valor total quando o carrinho tiver produtos", () => {
    const mockItems = [
      {
        id: "1",
        name: "Produto A",
        price: 50,
        quantity: 2,
        image: "img-a.png",
      },
      {
        id: "2",
        name: "Produto B",
        price: 30,
        quantity: 1,
        image: "img-b.png",
      },
    ];

    mockedUseCartHook.mockReturnValue({
      items: mockItems,
      valor: 130, // 50*2 + 30*1
    });

    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    // Verifica se os nomes dos produtos estão na tela
    expect(screen.getByText("Produto A")).toBeInTheDocument();
    expect(screen.getByText("Produto B")).toBeInTheDocument();

    // Verifica se o valor total é exibido corretamente
    expect(screen.getByText("130")).toBeInTheDocument();
  });

  // Teste 4: Testa a interatividade dos botões
  test("deve chamar as funções de manipulação ao clicar nos botões", () => {
    const mockItems = [
      {
        id: "1",
        name: "Produto A",
        price: 50,
        quantity: 1,
        image: "img-a.png",
      },
    ];
    // Mocks para as funções do hook
    const adicionarProdutoMock = jest.fn();
    const removerProdutoMock = jest.fn();
    const removerProdutoCarrinhoMock = jest.fn();

    mockedUseCartHook.mockReturnValue({
      items: mockItems,
      valor: 50,
      adicionarProduto: adicionarProdutoMock,
      removerProduto: removerProdutoMock,
      removerProdutoCarrinho: removerProdutoCarrinhoMock,
    });

    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    // Encontra todos os botões de controle dentro do item
    const botoesAdicionar = screen.getAllByText("+");
    const botoesRemover = screen.getAllByText("-");
    const botaoDeletar = screen.getByTitle("Remover item");

    // Simula cliques e verifica se as funções corretas foram chamadas
    fireEvent.click(botoesAdicionar[0]);
    expect(adicionarProdutoMock).toHaveBeenCalledWith(mockItems[0]);

    fireEvent.click(botoesRemover[0]);
    expect(removerProdutoMock).toHaveBeenCalledWith(1); // O ID é '1', convertido para Number

    fireEvent.click(botaoDeletar);
    expect(removerProdutoCarrinhoMock).toHaveBeenCalledWith(1);
  });

  // Teste 5: Testa o botão de fechar o modal
  test("deve chamar a função onClose ao clicar no botão de fechar", () => {
    mockedUseCartHook.mockReturnValue({ items: [] });
    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("deve chamar a função onClose ao clicar no overlay (backdrop)", () => {
    mockedUseCartHook.mockReturnValue({ items: [] });
    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    // O overlay é o elemento com o role 'dialog'
    const overlay = screen.getByRole("dialog");
    fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  // NOVO TESTE: Verifica o pressionamento da tecla Escape
  test("deve chamar a função onClose ao pressionar a tecla 'Escape'", () => {
    mockedUseCartHook.mockReturnValue({ items: [] });
    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    const overlay = screen.getByRole("dialog");
    // Simula o pressionamento da tecla 'Escape' no elemento
    fireEvent.keyDown(overlay, { key: "Escape", code: "Escape" });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
  test("deve chamar a função onClose ao pressionar a tecla 'P'", () => {
    mockedUseCartHook.mockReturnValue({ items: [] });
    render(<CartModal isOpen={true} onClose={onCloseMock} />);

    const overlay = screen.getByRole("dialog");

    fireEvent.keyDown(overlay, { key: "P", code: "P" });

    expect(onCloseMock).toHaveBeenCalledTimes(0);
  });
});
