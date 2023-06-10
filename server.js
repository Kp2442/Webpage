const express = require("express");
const app = express();
const router = require("./routes/routes.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Handovers");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000);
