import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { getAll, update } from "./BooksAPI";
import SearchPage from "./SearchPage";
import ListPage from "./ListPage";

const BooksApp = () => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const fetchedBooks = await getAll();
    setBooks(fetchedBooks);
    setLoading(false);
  };

  const handleShelfChangeInsideList = (event, book) => {
    update(book, event.target.value).then(getData);
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
                handleShelfChangeInsideList={handleShelfChangeInsideList}
              />
            )}
            exact
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                handleShelfChange={handleShelfChangeInsideList}
                books={books}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

export default BooksApp;
