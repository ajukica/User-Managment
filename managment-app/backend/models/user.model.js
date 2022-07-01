const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    ime: {
      type: String,
      minlength: 3,
    },
    prezime: {
      type: String,
      minlength: 3,
    },
    email: {
      type: String,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
