import React from "react";
import AppTitle from "./AppTitle";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

const ListPage = ({ loading, books, handleShelfChangeInsideList }) => {
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
                handleChange={handleShelfChangeInsideList}
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
