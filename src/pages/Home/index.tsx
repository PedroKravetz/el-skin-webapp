import styled from "styled-components";
import ProductShowcase from "../../components/ProductShowCase";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ShowcaseTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

function Home() {
  return (
    <HomeContainer>
      <ShowcaseTitle>nossos queridinhos estão aqui</ShowcaseTitle>
      <ProductShowcase />
    </HomeContainer>
  );
}

export default Home;
