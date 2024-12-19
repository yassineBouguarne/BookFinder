function Header({ query, setQuery, numberBooks }) {
  return (
    <header>
      <div className="logo">
        <a href="/">useBook</a>
      </div>
      <div>
        <input
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
    </header>
  );
}

export default Header;
