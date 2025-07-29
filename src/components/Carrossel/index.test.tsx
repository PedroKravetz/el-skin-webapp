import { render, screen } from "@testing-library/react";
import axios from "axios";
import Carrossel from "./";

// 1. Mock do Axios para controlar a resposta da API
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// 2. Mock dos componentes da biblioteca Swiper
//    Substituímos o Swiper e o SwiperSlide por divs simples que apenas renderizam seus filhos.
//    Isso remove toda a complexidade do carrossel e nos permite ver o conteúdo.
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-mock">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide-mock">{children}</div>
  ),
}));

// Dados que simulam a resposta da API
const mockCarrosselData = [
  {
    id: 1,
    subtitle: "Promoção de Verão",
    title: "ATÉ 50% OFF",
    description: "Os melhores produtos para cuidar da sua pele no calor.",
    backgroundImage: "verao.jpg",
  },
  {
    id: 2,
    subtitle: "Lançamento",
    title: "NOVO SÉRUM",
    description: "Tecnologia inovadora para uma pele radiante.",
    backgroundImage: "serum.jpg",
  },
];

describe("Carrossel", () => {
  test("deve buscar dados e renderizar os slides corretamente", async () => {
    // Configura o axios para retornar nossos dados mockados
    mockedAxios.get.mockResolvedValueOnce({ data: mockCarrosselData });

    render(<Carrossel />);

    // 3. Aguarda que o título do primeiro slide apareça na tela
    //    Isso garante que a chamada da API foi concluída e o componente renderizou os dados.
    const firstTitle = await screen.findByText("ATÉ 50% OFF");
    expect(firstTitle).toBeInTheDocument();

    // 4. Verifica se a API foi chamada corretamente
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:3001/carousel"
    );

    // 5. Verifica se o conteúdo de ambos os slides mockados está na tela
    expect(screen.getByText("Promoção de Verão")).toBeInTheDocument();
    expect(
      screen.getByText("Os melhores produtos para cuidar da sua pele no calor.")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Os melhores produtos para cuidar da sua pele no calor."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Lançamento")).toBeInTheDocument();
    expect(screen.getByText("NOVO SÉRUM")).toBeInTheDocument();
    expect(
      screen.getByText("Tecnologia inovadora para uma pele radiante.")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Tecnologia inovadora para uma pele radiante.")
    ).toBeInTheDocument();

    // Verifica se os botões "Comprar Agora" foram renderizados para cada slide
    const actionButtons = screen.getAllByRole("link", {
      name: /comprar agora/i,
    });
    expect(actionButtons).toHaveLength(mockCarrosselData.length);
  });
});
