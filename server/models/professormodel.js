const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    Professor: { type: String, required: true },
    dept_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dept",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("teacher", teacherSchema);
