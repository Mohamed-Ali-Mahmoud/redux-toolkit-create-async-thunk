import React from "react";

const AddForm = () => {
  return (
    <div className="w-100">
      <h2 className="text-4xl text-center">Insert Book</h2>
      <form>
        <label htmlFor="title" className="text-gray-700 text-xl font-bold mb-3">
          Title
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-5"
          id="title"
          required
        />

        <label htmlFor="price" className="text-gray-700 text-xl font-bold mb-3">
          Price
        </label>
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline mb-5"
          id="price"
          required
        />

        <label htmlFor="Description" className="font-bold text-xl">
          Description
        </label>
        <textarea
          id="Description"
          required
          className="w-100 border rounded p-2 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
