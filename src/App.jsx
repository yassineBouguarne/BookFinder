import { useEffect, useState } from "react";
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectedBook = (id) => {
    const book = books.find((book) => book.id === id);
    setSelectedBook(book || []);
  };

  console.log(selectedBook);

  const apiKey = "AIzaSyBpgpiMzJEcw2N_9YpY4H86fVUrsgybPAE";
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}:apiKeyes&apiKey=${apiKey}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Book not found");
        }
        setBooks(data.items || []);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchBooks();
  }, [query]);

  return (
    <>
      <Header query={query} setQuery={setQuery} numberBooks={books.length} />
      <BooksList books={books} handleSelectedBook={handleSelectedBook} />
      <hr /> <hr />
      <BookDetail selectedBook={selectedBook} />
    </>
  );
}

export default App;
