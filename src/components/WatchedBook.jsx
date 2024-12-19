function WatchedBook({ book, onDeletWatched }) {
  return (
    <div>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.authors?.join(", ")}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => onDeletWatched(book.id)}>X</button>
    </div>
  );
}

export default WatchedBook;
