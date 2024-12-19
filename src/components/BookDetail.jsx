import { useState } from "react";
import StarRating from "./StarRating";

function BookDetail({ selectedBook, handleAddBook }) {
  const [rating, setRating] = useState(0);

  if (!selectedBook) return <div>Select a book</div>;

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

  return (
    <div>
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
        <strong>Publisher:</strong> {publisher}
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
      <StarRating rating={rating} setRating={setRating} />
      <div className="addBook" onClick={handleAdd}>
        + Add to list
      </div>
    </div>
  );
}

export default BookDetail;
