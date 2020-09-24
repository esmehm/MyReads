import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

const SearchPage = ({ handleShelfChange, books }) => {
  const handleSearchChange = (event) => {
    getSearchResults(event.target.value);
  };

  const [searchResults, setSearchResults] = useState([]);

  //TODO: use loading indicator
  // const [loading, setLoading] = useState(false)
  const getSearchResults = async (searchTerm) => {
    searchTerm ? doSearch(searchTerm) : setSearchResults([]);
  };

  const doSearch = async (searchTerm) => {
    const booksWithSearchTerm = await search(searchTerm);
    const combined = booksWithSearchTerm.length
      ? booksWithSearchTerm.map((bookWithSearchTerm) => {
          const shelvedItem = books.find(
            (bookOnShelf) => bookOnShelf.id === bookWithSearchTerm.id
          );
          bookWithSearchTerm.shelf = shelvedItem ? shelvedItem.shelf : null;
          return bookWithSearchTerm;
        })
      : [];
    setSearchResults(combined);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {/* TODO: remove zero for when no results */}
          {/* TODO: what should it say for no results */}
          {searchResults.length &&
            searchResults.map((book) => {
              return (
                <li key={book.id}>
                  {/* TODO: tidy up naming here */}
                  <Book book={book} handleChange={handleShelfChange} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
