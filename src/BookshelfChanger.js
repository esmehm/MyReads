import React, { useState } from "react";

const BookshelfChanger = ({ book, handleShelfChange }) => {
  const [bookInQuestion, setBookInQuestion] = useState(book);

  const handleChange = (event) => {
    const affectedBook = { ...bookInQuestion };
    affectedBook.shelf = event.target.value;
    setBookInQuestion(affectedBook);
    handleShelfChange(event, affectedBook);
  };

  return (
    <div className="book-shelf-changer">
      <select value={bookInQuestion.shelf || "none"} onChange={handleChange}>
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
