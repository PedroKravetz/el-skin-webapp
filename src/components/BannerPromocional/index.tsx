import styled from "styled-components";

const BannerText = styled.h3`
  color: #c70039; /* Cor vermelha, como no design */
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  white-space: nowrap; /* Evita que o texto quebre a linha */
`;

function BannerPromocional() {
  return <BannerText>Kits até 50% OFF</BannerText>;
}

export default BannerPromocional;
