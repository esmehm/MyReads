import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, handleChange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: "inherit",
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <BookshelfChanger book={book} handleChange={handleChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        <ul>
          {book.authors.map((author) => (
            <li key={author}>{author}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
