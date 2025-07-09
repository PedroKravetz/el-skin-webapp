import ProductCard from "../ProductCard";
import { produtos } from "../../data/produtos";

function ProductShowcase() {
  return (
    <div>
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          srcImg={produto.srcImg}
          alt={produto.alt}
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      ))}
    </div>
  );
}

export default ProductShowcase;
