import styled from "styled-components";
import sacola from "../../assets/sacola-de-compras.png";

interface PropsProductCard {
  srcImg: string;
  alt: string;
  nome: string;
  preco: number;
  descricao: string;
  tags: string[];
}

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  display: flex; /* Adicionado para controle de layout */
  flex-direction: column; /* Organiza os itens em coluna */
  text-align: left; /* Alinha todo o texto à esquerda */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; /* Aumenta a altura da imagem */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.25rem; /* Um pouco maior */
  color: #333;
  font-weight: 700; /* Mais forte */
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #757575; /* Cinza mais claro */
  margin-bottom: 1rem;
  flex-grow: 1; /* Faz a descrição ocupar o espaço disponível, alinhando o botão no final */
`;

// Novo container para alinhar preço e botão
const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* Empurra para o final do card */
`;

const ProductPrice = styled.p`
  font-size: 1.5rem; /* Maior e mais destacado */
  font-weight: bold;
  color: #333; /* Cor preta como na referência */
`;

const BuyButton = styled.button`
  background-color: #8a2be2;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px; /* Bordas menos arredondadas */
  font-size: 1rem;
  font-weight: bold;
  text-transform: lowercase; /* Texto em minúsculas como na referência */
  display: flex;
  align-items: center;
  gap: 8px; /* Espaço entre o texto e o ícone */
`;

const CartIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.25rem; /* Mais espaço antes do preço/botão */
`;

const Tag = styled.span`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0.25rem 0.85rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: lowercase;
`;

const getTagColor = (tag: number) => {
  switch (tag) {
    case 0:
      return "#50E3C2"; // Azul-piscina
    case 1:
      return "#D965B0"; // Rosa
    case 2:
      return "#F5A623"; // Laranja para variedade
    default:
      return "#ccc";
  }
};

function ProductCard(props: Readonly<PropsProductCard>) {
  return (
    <CardContainer>
      <ProductImage
        src={props.srcImg || "https://via.placeholder.com/250"}
        alt={props.alt}
      />
      <ProductName>{props.nome}</ProductName>
      <ProductDescription>{props.descricao}</ProductDescription>

      <TagsContainer>
        {props.tags?.map((tag, index) => (
          <Tag key={tag} color={getTagColor(index)}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>

      {/* Container para agrupar preço e botão */}
      <ActionContainer>
        <ProductPrice>{"R$ " + props.preco.toFixed(2)}</ProductPrice>
        <BuyButton>
          comprar
          <CartIcon src={sacola} alt="Ícone de sacola de compras" />
        </BuyButton>
      </ActionContainer>
    </CardContainer>
  );
}

export default ProductCard;
