const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require("./routes/user.routes")
dotenv.config();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));


app.use("/api/user", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  connectDb();
  console.log(`App listening at http://localhost:${port}`);
});

// Req.params and Req.query
// Req.params are used to extract values from the URL path, while Req.query is used to extract values from the query string of the URL.
// Example of Req.params: In the URL /user/:id, :id is a route parameter that can be accessed using req.params.id.
// Example of Req.query: In the URL /search?term=javascript, term is a query parameter that can be accessed using req.query.term.