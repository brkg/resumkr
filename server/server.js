const path = require("path");
const express = require("express");
const app = express();

// const apiRouter = require("./routes/api.js");
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// handle requests for static files
app.use(express.static(path.resolve(__dirname, "../src")));

// app.use("/api", apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("<h1> 404 sorry dude </h1>"));

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "../dist")));
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

// @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
