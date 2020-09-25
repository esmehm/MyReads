import React, { useState } from "react";

const BookshelfChanger = ({ book, handleChange }) => {
  const [bookInQuestion, setBookInQuestion] = useState(book);

  const handleThatChange = (event) => {
    const affectedBook = { ...bookInQuestion };
    affectedBook.shelf = event.target.value;
    setBookInQuestion(affectedBook);
    handleChange(event, affectedBook);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={bookInQuestion.shelf || "none"}
        onChange={handleThatChange}
      >
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
