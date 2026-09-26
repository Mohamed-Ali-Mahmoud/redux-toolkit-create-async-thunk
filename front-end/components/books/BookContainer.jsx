import React, { useEffect } from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";

// import dispatch and useSelector from react-redux
import { useDispatch, useSelector } from "react-redux";

// import action
import { getBooks, deleteBooks } from "../../store/bookSlice";

const BookContainer = () => {
  // dispatch the action to get books
  const dispatch = useDispatch();

  // useSelector to get the isLoading state from the store
  const { isLoading, books } = useSelector((state) => state.book);

  // useEffect to dispatch the action when the component mounts
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // get the isLoggedIn state from the auth reducer using useSelector hook.
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="container mx-auto">
      <div className="flex justify-around">
        <BookList
          isLoading={isLoading}
          books={books}
          isLoggedIn={isLoggedIn}
          dispatch={dispatch}
          deleteBooks={deleteBooks}
        />
        <BookInfo />
      </div>
    </div>
  );
};

export default BookContainer;
