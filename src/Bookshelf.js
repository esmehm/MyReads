import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelf, books = [], getData }) => {
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key);

  //TODO: add comment about empty shelf

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} getData={getData} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
