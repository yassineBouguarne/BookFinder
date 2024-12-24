import { BookList } from "../styles/BookList.styles";
import Book from "./Book";

function BooksList({ books, handleSelectedBook }) {
  return (
    <BookList>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          handleSelectedBook={handleSelectedBook}
        />
      ))}
    </BookList>
  );
}

export default BooksList;
