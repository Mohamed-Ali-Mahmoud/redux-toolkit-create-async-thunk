import React from "react";

const BookInfo = () => {
  return (
    <div className="w-100">
      <h2 className="text-4xl">Book Info</h2>
      <div className="bg-gray-200 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center">
          <h2>there's no book selected yet. please selecte!</h2>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
