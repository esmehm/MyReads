import React from "react";
import { Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./SearchPage";
import ListPage from "./ListPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <main>
          <Switch>
            <Route path="/" component={ListPage} exact />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default BooksApp;
