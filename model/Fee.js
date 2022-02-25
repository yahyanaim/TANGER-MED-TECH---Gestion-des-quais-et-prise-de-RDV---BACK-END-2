const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  montant: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
});

const fee = mongoose.model("fee", feeSchema);

module.exports = fee;