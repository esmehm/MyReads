import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelf, books = [], handleChange }) => {
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        {booksOnShelf.length ? (
          <ol className="books-grid">
            {booksOnShelf.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} handleChange={handleChange} />
                </li>
              );
            })}
          </ol>
        ) : (
          <div>No books on this shelf yet</div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
