import BarraPesquisa from "../BarraPesquisa";
import MenuNavegacao from "../MenuNavegacao";
import sacolaCompras from "../../assets/sacola-de-compras.png";
import Logo from "../Logo";
import styled from "styled-components";

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
  return (
    <HeaderContainer>
      <TopBar>
        <Logo /> <BarraPesquisa />
        <SacolaDeCompras src={sacolaCompras} alt="sacola de compras" />{" "}
      </TopBar>
      <MenuNavegacao />
      
    </HeaderContainer>
  );
}

export default Header;
