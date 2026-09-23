import React from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
const BookContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <BookList />
        <BookInfo />
      </div>
    </div>
  );
};

export default BookContainer;
