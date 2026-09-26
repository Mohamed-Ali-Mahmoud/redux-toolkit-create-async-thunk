import React, { useRef } from "react";

// import action
import { insertBooks } from "../store/bookSlice";

// import dispatch
import { useDispatch, useSelector } from "react-redux";

const AddForm = () => {
  // create a dispatch function using useDispatch hook from react-redux.
  const dispatch = useDispatch();

  // create refs for the form inputs using useRef hook from react.
  const title = useRef(),
    price = useRef(),
    description = useRef();

  const handleSubmit = (e) => {
    // prevent the default behavior of the form submission
    e.preventDefault();

    // create a bookData object with the values from the form inputs
    const bookData = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };

    //send the bookData to the insertBooks action using dispatch.
    dispatch(insertBooks(bookData));
  };

  // get the isLoggedIn state from the auth reducer using useSelector hook.
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="w-100">
      <h2 className="text-4xl text-center">Insert Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="text-gray-700 text-xl font-bold mb-3">
          Title
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-5"
          id="title"
          required
          ref={title}
        />

        <label htmlFor="price" className="text-gray-700 text-xl font-bold mb-3">
          Price
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-5"
          id="price"
          required
          ref={price}
        />

        <label htmlFor="Description" className="font-bold text-xl">
          Description
        </label>
        <textarea
          id="Description"
          required
          className="w-100 border rounded p-2 focus:outline-none focus:shadow-outline"
          ref={description}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-3 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isLoggedIn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
