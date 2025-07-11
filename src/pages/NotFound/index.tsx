import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 60vh; /* Garante que ocupe uma boa parte da tela */
  padding: 2rem;
  color: #333;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: #8a2be2; /* Roxo da marca */
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: #555;
`;

const HomeButton = styled.a`
  background-color: #8a2be2;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7a1fb8;
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Página não encontrada</ErrorMessage>
      <p style={{ marginBottom: "2rem", color: "#777" }}>
        Parece que o link que você seguiu está quebrado ou a página foi removida.
      </p>
      <HomeButton href="/">Voltar para a Home</HomeButton>
    </NotFoundContainer>
  );
}

export default NotFound;
