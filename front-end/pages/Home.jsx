import React from "react";
import AddForm from "../components/AddForm";
import BookContainer from "../components/books/BookContainer";

// import useSelector to get state from book reducer.
import { useSelector } from "react-redux";
import Header from "../components/Header";
const Home = () => {
  // get error state from book reducer.
  const { error } = useSelector((state) => state.book);
  return (
    // if it has error show it. (if error it's true)
    <div className="flex justify-center items-center flex-col">
      {error && (
        <div className="bg-red-300 text-black px-2 py-2 w-full">
          faild to fetch data
        </div>
      )}
      <Header />
      <AddForm />
      <BookContainer />
    </div>
  );
};

export default Home;
