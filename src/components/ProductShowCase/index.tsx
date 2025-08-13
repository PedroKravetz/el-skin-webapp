import ProductCard from "../ProductCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearchHook";
import { useGetProductsQuery } from "../../store/apiSlice/apiSlice";
import { Produto } from "../../types/types";

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

function ProductShowcase() {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  const { term } = useSearch();

  useEffect(() => {
    if (term.trim().length == 0) {
      setProdutosFiltrados(products);
    } else {
      setProdutosFiltrados(
        products.filter((produto) =>
          produto.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    }
  }, [products, term]);

  return (
    <ShowcaseContainer>
      {isLoading && <h1>Carregando...</h1>}
      {error && <h1>Erro ao carregar produtos</h1>}
      {produtosFiltrados.map((produto) => (
        <ProductCard
          key={produto.id}
          id={produto.id}
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
