import { useEffect, useState } from "react";
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";
import WatchedBooksList from "./components/WatchedBooksList";
import Box from "./components/Box";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Main from "./components/Main";

function App() {
  const [query, setQuery] = useState("React");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [watchedBooks, setWatchedBooks] = useState(() => {
    const storedBooks = localStorage.getItem("watchedBooks");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const [rating, setRating] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("watchedBooks", JSON.stringify(watchedBooks));
  }, [watchedBooks]);

  const handleSelectedBook = (id) => {
    const book = books.find((book) => book.id === id);
    setSelectedBook((selectbook) =>
      selectbook === book ? null : book || null
    );
  };

  const handleAddBook = (book) => {
    setWatchedBooks((books) => [...books, book]);
    setRating(0);
    setSelectedBook(null);
  };

  const handleDeleteWatchedBook = (id) =>
    setWatchedBooks((books) => books.filter((book) => book.id !== id));

  const handleCloseBook = () => setSelectedBook(null);

  const apiKey = "AIzaSyBpgpiMzJEcw2N_9YpY4H86fVUrsgybPAE";
  useEffect(() => {
    const controller = new AbortController();
    const fetchBooks = async () => {
      try {
        setIsLoaded(true);
        setError("");
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        if (!data.items) throw new Error("Book not found");

        setBooks(data.items || []);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoaded(false);
      }
    };
    fetchBooks();
    handleCloseBook();

    return () => controller.abort();
  }, [query]);

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        numberBooks={books.length}
        handleCloseBook={handleCloseBook}
      />
      <Main>
        <Box>
          {isLoaded && <Loading />}
          {!isLoaded && !error && (
            <BooksList books={books} handleSelectedBook={handleSelectedBook} />
          )}
          {error && <Error message={error} />}
        </Box>
        {selectedBook ? (
          <Box>
            <BookDetail
              selectedBook={selectedBook}
              handleAddBook={handleAddBook}
              handleCloseBook={handleCloseBook}
              watchedBooks={watchedBooks}
              rating={rating}
              setRating={setRating}
            />
          </Box>
        ) : (
          <Box>
            <WatchedBooksList
              watchedBooks={watchedBooks}
              onDeletWatched={handleDeleteWatchedBook}
            />
          </Box>
        )}
      </Main>
    </>
  );
}

export default App;
