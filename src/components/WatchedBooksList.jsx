import WatchedBook from "./watchedBook";

function WatchedBooksList({ watchedBooks, onDeletWatched }) {
  return (
    <ul>
      {watchedBooks.map((book) => (
        <WatchedBook
          key={book.title}
          book={book}
          onDeletWatched={onDeletWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedBooksList;
