import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelf, books = [] }) => {
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  bookCoverUrl={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthor={book.authors[0]}
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
