import React, { useState } from "react";
import { update } from "./BooksAPI";

const BookshelfChanger = ({ book, getData }) => {
  const [value, setValue] = useState(book.shelf);

  const handleChange = (e) => {
    //TODO: make sure this updates correctly everytime and refreshes - maybe look into controlled and uncontrolled components
    update(book, e.target.value).then(setValue(e.target.value)).then(getData());
  };

  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
