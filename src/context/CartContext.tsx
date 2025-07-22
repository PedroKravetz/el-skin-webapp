import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartContextType {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  valor: number;
  quantidade: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return items.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantity,
        totalTemp: acumulador.totalTemp + produto.price * produto.quantity,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
  }, [items]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValor(totalTemp);
  });

  const contextValue = useMemo(() => {
    return {
      items,
      setItems,
      valor,
      quantidade,
    };
  }, [items, valor, quantidade]);

  return <CartContext value={contextValue}>{children}</CartContext>;
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
