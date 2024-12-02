import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="bg-black border border-gray-900 rounded-lg px-4 py-2 m-4 relative duration-300"
      key={book._id}
    >
      <h2 className="absolute top-1 right-2 px-3 py-1 text-xs text-gray-500 border border-gray-500 rounded-full">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-50">{book._id}</h4>
      <div className="flex items-center justify-start gap-x-2">
        <PiBookOpenTextLight className="text-sky-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex items-center justify-start gap-x-2">
        <BiUserCircle className="text-sky-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-gray-700 hover:text-gray-400 duration-500 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-sky-800 hover:text-sky-500 duration-500" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-700 hover:text-yellow-500 duration-500" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-red-500 duration-500" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
