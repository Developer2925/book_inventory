import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <>
      <div
        className="bg-black w-full fixed bg-opacity-60 top-0 left-0 ring-0 bottom-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()} // No action will be performed onClicking here
          className="w-[600px] max-w-full h-[400px] bg-black rounded-xl p-4 flex flex-col relative"
        >
          <AiOutlineClose
            className="absolute right-6 top-6 text-3xl text-gray-600 hover:text-gray-300 duration-500 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="w-fit px-3 py-1 text-xs text-gray-500 border border-gray-500 rounded-full">
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
          <p className="mt-4 text-gray-300">Description</p>
          <p className="my-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            accusantium aut, quisquam eveniet numquam fuga nisi quos. Aut natus
            vitae ipsa, necessitatibus blanditiis hic eveniet quibusdam corrupti
            eius dolorum possimus amet libero! Dolor cupiditate quos
            reprehenderit delectus doloremque veniam ullam.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookModal;
