import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ bookCoverUrl, bookCoverHeight, bookTitle, bookAuthor }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: bookCoverHeight,
            backgroundImage: bookCoverUrl,
          }}
        ></div>
        <BookshelfChanger />
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  );
};

export default Book;
