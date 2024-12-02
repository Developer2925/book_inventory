import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bookRouter from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
// To handle CORS policy error
// Option 1: Allow all Origins with default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins (Preferred)
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
/* 
-   CORS - Cross-Origin Resource Sharing
-   CORS is a security mechanics in web-browsers that restricts the 
    ability of a webpage to make request to a different domain. 
-   It's a web-security mechanics that prevents unauthorised Cross origin access
    to a resource or a server.
-   When a webpage makes a request to a different domain, the browser sends a request to the target server.
-   The server will check, whether the request is permitted or not. 
-   Server can check: Origins, Methods, Headers & can allow or deny the requests.
*/

const port = process.env.PORT;
const mongoDBURI = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome");
});

app.use("/books", bookRouter);

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is Running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
