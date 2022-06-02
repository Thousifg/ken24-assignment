const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb://localhost:25015/ken42");
};
