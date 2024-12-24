import { useEffect, useRef } from "react";
import { HeaderContainer, Input, Logo } from "../styles/Header.styles";

function Header({ query, setQuery, numberBooks, handleCloseBook }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <HeaderContainer>
      <Logo onClick={handleCloseBook}>BookFinder</Logo>
      <div>
        <Input
          ref={inputRef}
          type="text"
          className="search"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="length-results">
        <p className="num-results">Found {numberBooks} results</p>
      </div>
    </HeaderContainer>
  );
}

export default Header;
