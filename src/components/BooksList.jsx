import Book from "./Book";

function BooksList({ books, handleSelectedBook }) {
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          handleSelectedBook={handleSelectedBook}
        />
      ))}
    </ul>
  );
}

export default BooksList;
