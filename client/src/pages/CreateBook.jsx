import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ReturnButton from "../components/ReturnButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const backendURL = import.meta.env.VITE_BACKENDURL;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post(`${backendURL}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured. Please check console!");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-4 text-[#f6f6f6]">
        <ReturnButton />
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border border-slate-600 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black px-4 py-2 w-full rounded focus:outline-none"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-300">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="text-black px-4 py-2 w-full rounded focus:outline-none"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-300">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="text-black px-4 py-2 w-full rounded focus:outline-none"
            />
          </div>
          <button
            className="p-2 w-24 text-sm text-white font-medium bg-sky-500 my-8 rounded"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
