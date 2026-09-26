import React from "react";

const BookList = ({ isLoading, books, isLoggedIn, dispatch, deleteBooks }) => {
  const bookList =
    books.length > 0 ? (
      books?.map((book) => {
        return (
          <li className="flex justify-between items-center mb-5" key={book.id}>
            <h2>{book.title}</h2>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-3">
                Read
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded cursor-pointer"
                disabled={!isLoggedIn}
                onClick={() => dispatch(deleteBooks(book.id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <h2>there is no book available! </h2>
    );
  console.log("isLoggedIn:", isLoggedIn);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="w-100">
          <h2 className="text-4xl">Book List</h2>
          <div className="bg-gray-200 rounded-lg p-4 mt-4">
            <ul>{bookList}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BookList;
