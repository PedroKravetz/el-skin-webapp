import ProductCard from "../ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

interface Produto {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

function ProductShowcase() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios.get<Produto[]>("http://localhost:3001/products").then((resposta) => {
      setProdutos(resposta.data);
    });
  }, []);

  return (
    <ShowcaseContainer>
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          srcImg={produto.image}
          alt={produto.description}
          nome={produto.name}
          descricao={produto.description}
          preco={produto.price}
          tags={produto.tags}
        />
      ))}
    </ShowcaseContainer>
  );
}

export default ProductShowcase;
