import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelf, books }) => {
  const booksOnShelf = books.filter((book) =>
    shelf.books.includes(book.bookTitle)
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => {
            return (
              <li>
                <Book
                  bookCoverUrl={book.bookCoverUrl}
                  bookCoverHeight={book.bookCoverHeight}
                  bookTitle={book.bookTitle}
                  bookAuthor={book.bookAuthor}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
