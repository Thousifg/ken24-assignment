const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema(
  {
    coursename: { type: String, require: true },
    Section: { type: String, required: true },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
      required: true,
    },
    slots_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "slots",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("clasroom", classroomSchema);
