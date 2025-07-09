import cremeHidratante from "../../assets/creme-hidratante.png";
import cremeEspinhas from "../../assets/creme-espinhas.png";
import locao from "../../assets/locao-corporal.png";

function Sobre() {
  return (
    <div>
      <h2>Sobre a AL SKIN</h2>
      <div>
        <h3>QUEM SOMOS</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <h3>POR QUE EXISTIMOS?</h3>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <h3>O QUE A GENTE FAZ?</h3>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <img src={cremeHidratante} alt="Creme Hidratante" />
      <img src={cremeEspinhas} alt="Creme Espinhas" />
      <img src={locao} alt="Loção Corporal" />
    </div>
  );
}

export default Sobre;
