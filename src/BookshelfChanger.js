import React from "react";

const BookshelfChanger = ({ book, handleChange }) => {
  const handleThatChange = (event) => {
    handleChange(event, book);
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={handleThatChange}>
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
