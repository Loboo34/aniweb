const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add Name"],
    },
    email: {
      type: String,
      required: [true, "Please add Email"],
      unique: [true, "Email already in use"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//ep
module.exports = mongoose.model("User", userSchema);
