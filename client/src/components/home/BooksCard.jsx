import React, { useState } from "react";
import BookSingleCard from "./BookSingleCard";
import SearchBar from "../SearchBar";

const BooksCard = ({ books }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books
          .filter((book) => {
            return search.toLowerCase() === ""
              ? book
              : book.title.toLowerCase().includes(search) ||
                  book.author.toLowerCase().includes(search) ||
                  book.publishYear.toLowerCase().includes(search) ||
                  book._id.toLowerCase().includes(search);
          })
          .map((book) => (
            <BookSingleCard key={book._id} book={book} />
          ))}
      </div>
    </>
  );
};

export default BooksCard;
