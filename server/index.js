const express = require("express");
const mongoose = require("mongoose");
const classcontroller = require("./controllers/classcontroller");
const app = express();

app.use("/class", classcontroller);

module.exports = app;
