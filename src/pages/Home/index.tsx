import styled from "styled-components";
import ProductShowcase from "../../components/ProductShowCase";
import Carrossel from "../../components/Carrossel";

const HomeContainer = styled.main`
  width: 100%;
`;

const ShowcaseTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto; // Centraliza este container
`;

function Home() {
  return (
    <HomeContainer>
      <Carrossel />
      <CenteredContent>
        <ShowcaseTitle>nossos queridinhos estão aqui</ShowcaseTitle>
        <ProductShowcase />
      </CenteredContent>
    </HomeContainer>
  );
}

export default Home;
