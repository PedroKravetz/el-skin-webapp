import BarraPesquisa from "../BarraPesquisa";
import MenuNavegacao from "../MenuNavegacao";
import sacolaCompras from "../../assets/sacola-de-compras.png";
import Logo from "../Logo";
import styled from "styled-components";
import CartModal from "../CartModal";
import { useState } from "react";
import { useCartHook } from "../../hooks/useCartHook";

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1.5rem 5rem; /* Aumentamos o padding para dar mais respiro */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza tudo no container */
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Garante que o conteúdo não se estique demais em telas grandes */
  margin-bottom: 2rem; /* Aumenta o espaço antes do menu */
`;

const SacolaDeCompras = styled.img`
  width: 24px;
  height: 24px;
`;

function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function handleOnClick() {
    setIsCartModalOpen(true);
  }

  function handleCloseCart() {
    setIsCartModalOpen(false);
  }

  const { quantidade } = useCartHook();

  return (
    <HeaderContainer>
      <TopBar>
        <Logo /> <BarraPesquisa />
        <div>
          <SacolaDeCompras
            src={sacolaCompras}
            alt="sacola de compras"
            onClick={handleOnClick}
          />
          {quantidade}
        </div>
      </TopBar>
      <MenuNavegacao />
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseCart} />
    </HeaderContainer>
  );
}

export default Header;
