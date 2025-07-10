import ProductCard from "../ProductCard";
import { produtos } from "../../data/produtos";
import styled from "styled-components";

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

function ProductShowcase() {
  return (
    <ShowcaseContainer>
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          srcImg={produto.srcImg}
          alt={produto.alt}
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
          tags={produto.tags}
        />
      ))}
    </ShowcaseContainer>
  );
}

export default ProductShowcase;
