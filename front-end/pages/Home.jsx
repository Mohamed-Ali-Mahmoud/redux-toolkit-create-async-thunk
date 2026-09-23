import React from "react";
import AddForm from "../components/AddForm";
import BookContainer from "../components/books/BookContainer";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <AddForm />
      <BookContainer />
    </div>
  );
};

export default Home;
