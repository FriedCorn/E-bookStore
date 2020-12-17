const { Router } = require("express");

const userService = require("../services/user-service");

const staffRouter = Router({ mergeParams: true });

staffRouter.get("/", (req, res) => {
   res.send("staff");
})

module.exports = staffRouter;