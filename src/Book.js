import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, handleChange }) => {
  const bookCoverUrl = book.imageLinks.thumbnail;
  const bookTitle = book.title;
  const bookAuthor = book.authors[0];

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: "inherit",
            backgroundImage: `url("${bookCoverUrl}")`,
          }}
        ></div>
        <BookshelfChanger book={book} handleChange={handleChange} />
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  );
};

export default Book;
