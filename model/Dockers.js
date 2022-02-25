const mongoose = require("mongoose");

const dockerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  age: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  driverLincense: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  trucks: [
    {
      type: Schema.Types.ObjectId,
      ref: "truck",
    },
  ],
});

const Docker = mongoose.model("docker", dockerSchema);

module.exports = Docker;