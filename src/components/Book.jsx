function Book({ book, handleSelectedBook }) {
  const { volumeInfo } = book;
  const { title, imageLinks, authors } = volumeInfo;
  return (
    <div onClick={() => handleSelectedBook(book.id)}>
      {imageLinks?.smallThumbnail ? (
        <img src={imageLinks.smallThumbnail} alt={title} />
      ) : (
        <img
          src="https://fakeimg.pl/130x200?text=Image+not+available"
          alt="Image note available"
        />
      )}
      <h2>{title}</h2>
      <p>{authors?.join(", ")}</p>
    </div>
  );
}

export default Book;
