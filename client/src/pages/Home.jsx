import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdFormatLineSpacing } from "react-icons/md";
import { PiCardsThree } from "react-icons/pi";
import { IoAddCircle } from "react-icons/io5";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import bookSVG from "../assets/book.svg";

const Home = () => {
  const backendURL = import.meta.env.VITE_BACKENDURL;
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendURL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4 text-[#f6f6f6]">
        <div className="flex justify-center items-center gap-x-4">
          {showType === "table" ? (
            <button
              className="text-white hover:scale-110 duration-300 font-semibold px-4 py-1 rounded-lg"
              onClick={() => setShowType("card")}
            >
              <PiCardsThree />
            </button>
          ) : (
            <button
              className="text-white hover:scale-110 duration-300 font-semibold px-4 py-1 rounded-lg"
              onClick={() => setShowType("table")}
            >
              <MdFormatLineSpacing />
            </button>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-3xl my-8 flex items-center gap-2">
            {" "}
            <img src={bookSVG} alt="" className="w-10" /> Book Inventory
          </div>
          <Link to="/books/create">
            <IoAddCircle className=" text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
};

export default Home;
