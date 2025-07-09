interface PropsProductCard {
  srcImg: string;
  alt: string;
  nome: string;
  preco: string;
  descricao: string;
}

function ProductCard(props: Readonly<PropsProductCard>) {
  return (
    <div>
      <img src={props.srcImg} alt={props.alt} />
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
      <p>{props.preco}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
