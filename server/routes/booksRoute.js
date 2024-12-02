import express from "express";
import Books from "../models/bookModel.js";

const bookRouter = express.Router();

// Route to POST a new book data into the DB
bookRouter.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Books.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to GET all books from the DB
bookRouter.get("/", async (req, res) => {
  try {
    const books = await Books.find({});

    // status 200 & send fetched books to the client i.e. res.json(books)
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to GET books by _id from the DB
bookRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Books.findById(id);

    // status 200 & send fetched books to the client i.e. res.json(books)
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to UPDATE a book in the DB
bookRouter.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = req.params;

    const result = await Books.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to DELETE a book by _id from DB
bookRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Books.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default bookRouter;
