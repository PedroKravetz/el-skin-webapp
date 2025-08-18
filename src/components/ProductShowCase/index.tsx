import ProductCard from "../ProductCard";
import styled from "styled-components";
import { useMemo } from "react";
import { useSearch } from "../../hooks/useSearchHook";
import { useGetProductsQuery } from "../../store/apiSlice/apiSlice";

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

function ProductShowcase() {
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  const { term } = useSearch();

  const produtosFiltrados = useMemo(() => {
    const searchTerm = term.trim().toLocaleLowerCase();
    if (searchTerm.length === 0) {
      return products; // Retorna todos os produtos se a busca estiver vazia
    }
    return products.filter((produto) =>
      produto.name.toLocaleLowerCase().includes(searchTerm)
    );
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
