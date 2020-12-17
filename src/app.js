const express = require("express");
const exphbs = require("express-handlebars");
// const {nhanvien} = require("./middlewares/auth")

const router = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.json());

app.use("/", router);


// app.get("/", (req, res) => {
//   getAllBooks((error, books) => {
//     res.render("home", { books });
//   });
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


