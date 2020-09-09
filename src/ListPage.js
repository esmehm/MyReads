import React, { useState, useEffect } from "react";
import AppTitle from "./AppTitle";
import Bookshelf from "./Bookshelf";
import { getAll, update } from "./BooksAPI";
import { Link } from "react-router-dom";

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

  const handleChange = (event, book) => {
    update(book, event.target.value).then(getData);
  };

  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const fetchedBooks = await getAll();
    setBooks(fetchedBooks);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list-books">
      <AppTitle />
      {loading ? (
        <div>Loading... </div>
      ) : (
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Bookshelf
                shelf={shelf}
                books={books}
                key={shelf.key}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>
      )}

      <div className="open-search">
        <Link className="open-search-link" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default ListPage;
