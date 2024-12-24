import { BookCard } from "../styles/Book.styled";

function Book({ book, handleSelectedBook }) {
  const { volumeInfo } = book;
  const { title, imageLinks, authors } = volumeInfo;
  return (
    <BookCard onClick={() => handleSelectedBook(book.id)}>
      {imageLinks?.smallThumbnail ? (
        <img src={imageLinks.smallThumbnail} alt={title} />
      ) : (
        <img
          src="https://fakeimg.pl/130x200?text=Image+not+available"
          alt="Image note available"
        />
      )}
      <div>
        <h2>{title}</h2>
        <p>{authors?.join(", ") || "Unknown Authors"}</p>
      </div>
    </BookCard>
  );
}

export default Book;
