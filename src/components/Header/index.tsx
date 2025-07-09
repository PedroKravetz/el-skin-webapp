import BannerPromocional from "../BannerPromocional";
import BarraPesquisa from "../BarraPesquisa";
import MenuNavegacao from "../MenuNavegacao";
import sacolaCompras from "../../assets/sacola-de-compras.png";
import Logo from "../Logo";

function Header() {
  return (
    <div>
      <Logo /> <BarraPesquisa />
      <img src={sacolaCompras} alt="sacola de compras" /> <MenuNavegacao />
      <BannerPromocional />
    </div>
  );
}

export default Header;
