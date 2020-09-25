import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import ListPage from "./ListPage";
import "./App.css";

const BooksApp = () => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const fetchedBooks = await BooksAPI.getAll();
    setBooks(fetchedBooks);
    setLoading(false);
  };

  const handleShelfChange = (event, affectedBook) => {
    const newBooks = books.map((oldBook) => {
      const newBookItem = books.find((book) => book.id === oldBook.id);
      if (newBookItem.id === affectedBook.id)
        newBookItem.shelf = event.target.value;
      return newBookItem;
    });
    setBooks(newBooks);

    BooksAPI.update(affectedBook, event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <main>
        <Switch>
          <Route
            path="/"
            render={() => (
              <ListPage
                loading={loading}
                books={books}
                handleShelfChange={handleShelfChange}
              />
            )}
            exact
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage handleShelfChange={handleShelfChange} books={books} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

export default BooksApp;
