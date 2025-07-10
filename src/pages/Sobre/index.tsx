import cremeHidratante from "../../assets/creme-hidratante.png";
import cremeEspinhas from "../../assets/creme-espinhas.png";
import locao from "../../assets/locao-corporal.png";
import styled from "styled-components";

const SobreContainer = styled.main`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #4f4f4f;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: flex-start; /* Alinha os itens no topo de cada coluna */
  margin-bottom: 4rem;
`;

// Coluna da Esquerda
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Coluna da Direita
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextContent = styled.div`
  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Estilos para o novo card "DARUMA COMPANY"
const DarumaContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const DarumaButton = styled.button`
  background-color: #8a2be2;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 2rem;
`;

//<img src={chatIcon} alt="Ícone de chat" />

function Sobre() {
  return (
    <SobreContainer>
      <MainContent>
        <LeftColumn>
          <TextContent>
            <h2>Sobre a AL SKIN</h2>
            <div>
              <h3>QUEM SOMOS</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <h3>POR QUE EXISTIMOS?</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <h3>O QUE A GENTE FAZ?</h3>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </TextContent>
          <StyledImage src={cremeEspinhas} alt="Produto em close" />
        </LeftColumn>

        <RightColumn>
          <StyledImage src={locao} alt="Mão segurando produto" />
          <DarumaContainer>
            <h3>DARUMA COMPANY</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <DarumaButton>Fale conosco</DarumaButton>
          </DarumaContainer>
        </RightColumn>
      </MainContent>

      <FullWidthImage src={cremeHidratante} alt="Pessoa cuidando da pele" />
    </SobreContainer>
  );
}

export default Sobre;
