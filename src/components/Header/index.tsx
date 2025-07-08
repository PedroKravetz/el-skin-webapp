import BannerPromocional from "../BannerPromocional";
import BarraPesquisa from "../BarraPesquisa";
import MenuNavegacao from "../MenuNavegacao";

function Header() {
  return (
    <div>
      <h1>AL SKIN</h1> <BarraPesquisa /> <MenuNavegacao /> <BannerPromocional />
    </div>
  );
}

export default Header;
