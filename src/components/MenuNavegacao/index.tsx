import { menusNavegacao } from "./menusNavegacao";

function MenuNavegacao() {
  return (
    <div>
      {menusNavegacao.map((menu) => (
        <h2 key={menu.id}>{menu.nome}</h2>
      ))}
    </div>
  );
}

export default MenuNavegacao;
