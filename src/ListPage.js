import React, { useState, useEffect } from "react";
import AppTitle from "./AppTitle";
import Bookshelf from "./Bookshelf";
import { getAll } from "./BooksAPI";

const ListPage = () => {
  const shelves = [
    {
      title: "Currently Reading",
      key: "currentlyReading",
    },
    {
      title: "Want to Read",
      key: "wantToRead",
    },
    {
      title: "Read",
      key: "read",
    },
  ];

  const [books, setBooks] = useState();

  const getData = async () => {
    const fetchedBooks = await getAll();
    setBooks(fetchedBooks);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list-books">
      <AppTitle />
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Bookshelf shelf={shelf} books={books} key={shelf.key} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default ListPage;
