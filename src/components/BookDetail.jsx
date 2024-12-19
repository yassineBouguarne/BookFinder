function BookDetail({ selectedBook }) {
  if (!selectedBook) return <div>Select a book</div>;

  return <div>{selectedBook.id}</div>;
}

export default BookDetail;
