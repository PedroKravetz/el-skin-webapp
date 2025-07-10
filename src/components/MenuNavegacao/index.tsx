import styled from "styled-components";
import { menusNavegacao } from "./menusNavegacao";
import BannerPromocional from "../BannerPromocional";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 3rem; /* Aumenta o espaço entre os itens do menu */
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1.5rem; /* Adiciona espaço antes do banner */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem; /* Espaço entre os links do menu */
`;

const NavMenu = styled.h2`
  font-size: 1rem;
  font-weight: 500; /* Um pouco mais de peso na fonte */
  color: #4f4f4f;
  cursor: pointer;
  padding-bottom: 5px;

  &:hover {
    color: #000;
    border-bottom: 2px solid #8a2be2;
  }
`;

function MenuNavegacao() {
  return (
    <NavContainer>
      <NavLinks>
        {menusNavegacao.map((menu) => (
          <NavMenu key={menu.id}>{menu.nome}</NavMenu>
        ))}
      </NavLinks>
      <BannerPromocional />
    </NavContainer>
  );
}

export default MenuNavegacao;
