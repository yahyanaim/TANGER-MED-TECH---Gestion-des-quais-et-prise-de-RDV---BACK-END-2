const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  y: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  z: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  container: {
    type: Schema.Types.ObjectId,
    ref: "container",
  },

  Placeholder: 
    {
      type: Schema.Types.ObjectId,
      ref: "Placeholder",
    },

});

const Block = mongoose.model("block", blockSchema);

module.exports = Block;