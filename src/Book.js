import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, handleShelfChange }) => {
  const backgroundImage = book.imageLinks
    ? `url("${book.imageLinks.thumbnail}")`
    : "";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: "inherit",
            backgroundImage: backgroundImage,
          }}
        ></div>
        <BookshelfChanger book={book} handleShelfChange={handleShelfChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        <ul>
          {book.authors &&
            book.authors.map((author) => <li key={author}>{author}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Book;
