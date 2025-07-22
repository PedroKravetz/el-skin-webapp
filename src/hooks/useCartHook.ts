import { CartItem, useCartContext } from "../context/CartContext";

export const useCartHook = () => {
  const { items, setItems, quantidade, valor } = useCartContext();

  function mudarQuantidade(id: number, quantidade: number) {
    return items.map((itemDoCarrinho) => {
      if (Number(itemDoCarrinho.id) === Number(id))
        itemDoCarrinho.quantity += quantidade;
      return itemDoCarrinho;
    });
  }

  function adicionarProduto(novoProduto: CartItem) {
    const temOProduto = items.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );

    if (!temOProduto) {
      novoProduto.quantity = 1;
      return setItems((carrinhoAnterior) => [...carrinhoAnterior, novoProduto]);
    }

    const carrinhoAtualizado = mudarQuantidade(Number(novoProduto.id), 1);
    setItems([...carrinhoAtualizado]);
  }

  function removerProduto(id: number) {
    const produto = items.find(
      (itemDoCarrinho) => Number(itemDoCarrinho.id) === Number(id)
    );
    const ehOUltimo = produto?.quantity === 1;
    if (ehOUltimo) {
      return setItems((carrinhoAnterior) =>
        carrinhoAnterior.filter(
          (itemDoCarrinho) => Number(itemDoCarrinho.id) !== Number(id)
        )
      );
    }

    const carrinhoAtualizado = mudarQuantidade(Number(id), -1);
    setItems([...carrinhoAtualizado]);
  }

  function removerProdutoCarrinho(id: number) {
    const produto = items.filter(
      (itemDoCarrinho) => Number(itemDoCarrinho.id) !== Number(id)
    );
    setItems(produto);
  }

  return {
    items,
    setItems,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valor,
    quantidade,
  };
};
