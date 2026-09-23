import React from "react";

const BookList = () => {
  return (
    <div className="w-100">
      <h2 className="text-4xl">Book List</h2>
      <div className="bg-gray-200 rounded-lg p-4 mt-4">
        <ul>
          <li className="flex justify-between items-center">
            <h2>Learn Vue Js</h2>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mr-3">
                Read
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookList;
