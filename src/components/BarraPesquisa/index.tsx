import styled from "styled-components";
import { useSearch } from "../../hooks/useSearchHook";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.75rem 2.5rem 0.75rem 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  width: 400px;
  font-size: 1rem;
  background-color: #f5f5f5;
  outline: none;

  &:focus {
    border-color: #8a2be2;
    background-color: #fff;
  }
`;

// Alterado de img para button
const SearchButton = styled.button`
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

function BarraPesquisa() {
  const { term, setTerm } = useSearch();

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="O que você está procurando?"
        value={term}
        onChange={(event) => {
          event.stopPropagation();
          setTerm(event.target.value);
        }}
      />
      <SearchButton>
        <SearchIcon src="/assets/lupa.png" alt="lupa de pesquisa" />
      </SearchButton>
    </SearchContainer>
  );
}

export default BarraPesquisa;
