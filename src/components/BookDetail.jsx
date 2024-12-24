import { BookDetailWrapper } from "../styles/BookDetail.styled";
import StarRating from "./StarRating";

function BookDetail({
  selectedBook,
  handleAddBook,
  handleCloseBook,
  watchedBooks,
  rating,
  setRating,
}) {
  const { volumeInfo } = selectedBook;
  const {
    title,
    description,
    imageLinks,
    authors,
    publisher,
    publishedDate,
    pageCount,
    categories,
    language,
  } = volumeInfo;

  const handleAdd = () => {
    const watchedBook = {
      id: selectedBook.id,
      title: title,
      authors: authors,
      image: imageLinks?.thumbnail
        ? imageLinks.thumbnail
        : "https://fakeimg.pl/300x300?text=Image+not+available",
      rating: rating,
    };
    handleAddBook(watchedBook);
  };

  const isAlreadyWatched = watchedBooks.some(
    (book) => book.id === selectedBook.id
  );

  const ratingBook = watchedBooks.find((book) => book.id === selectedBook.id);

  return (
    <BookDetailWrapper>
      <button onClick={handleCloseBook}>&larr; Back</button>
      <h3>{title}</h3>
      <p>
        <strong>Authors:</strong> {authors?.join(", ")}
      </p>
      <img
        src={
          imageLinks?.thumbnail
            ? imageLinks.thumbnail
            : "https://fakeimg.pl/300x300?text=Image+not+available"
        }
        alt={title}
      />
      <p>{description}</p>
      <p>
        <strong>Publisher:</strong> {publisher || "Unknown Publisher"}
      </p>
      <p>
        <strong>Published Date:</strong> {publishedDate}
      </p>
      <p>
        <strong>Page Count:</strong> {pageCount}
      </p>
      <p>
        <strong>Categories:</strong> {categories?.join(", ")}
      </p>
      <p>
        <strong>Language:</strong> {language}
      </p>
      <StarRating
        rating={ratingBook ? ratingBook.rating : rating}
        setRating={setRating}
      />
      {!isAlreadyWatched ? (
        <button className="addBook" onClick={handleAdd}>
          + Add to list
        </button>
      ) : (
        <p className="alreadyWatched">Already in your list</p>
      )}
    </BookDetailWrapper>
  );
}

export default BookDetail;
