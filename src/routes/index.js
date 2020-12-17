const { Router } = require("express");

const bookRouter = require("./book-route");
const customerRouter = require("./customer-route");
const staffRouter = require("./staff-route");

const router = Router({ mergeParams: true });

router.use("/books", bookRouter);
router.use("/customers", customerRouter);
router.use("/staffs", staffRouter);

module.exports = router;