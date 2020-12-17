const { Router } = require("express");

const userService = require("../services/user-service");

const customerRouter = Router({ mergeParams: true });

customerRouter.get("/", (req, res) => {
   res.send("cuatomer");
})

module.exports = customerRouter;