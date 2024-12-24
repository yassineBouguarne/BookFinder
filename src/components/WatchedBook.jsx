import { WatchedBookCard } from "../styles/WatchedBook.styled";

function WatchedBook({ book, onDeletWatched }) {
  return (
    <WatchedBookCard>
      <img src={book.image} alt={book.title} />
      <div className="content">
        <h2>{book.title}</h2>
        <p>{book.authors?.join(", ") || "Unknown Authors"}</p>
        <p className="rating">
          Rating: {book.rating ? `${book.rating} 🌟` : "N/A"}
        </p>
      </div>
      <button onClick={() => onDeletWatched(book.id)}>X</button>
    </WatchedBookCard>
  );
}

export default WatchedBook;
