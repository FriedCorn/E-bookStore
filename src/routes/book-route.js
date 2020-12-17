const { Router } = require("express");

const bookService = require("../services/book-service");

const bookRouter = Router({ mergeParams: true });

bookRouter.get("/", (req, res) => {
  bookService.getAllBooks((error, books) => {
    res.render("home", { books });
  });
});

module.exports = bookRouter;