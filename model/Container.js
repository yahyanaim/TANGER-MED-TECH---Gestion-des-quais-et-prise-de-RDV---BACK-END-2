const {Schema, model} = require("mongoose");
const containerSchema = new Schema({
  weight: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  dimensions: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  brand: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  serviceDate: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  importStatus: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  customFeesStatus: {
    type: Boolean,
    required: [true, "Please fill this field!"],
  },
  certificat: {
    type: String,
    required: [true, "Please fill this field!"],
  },
fee:{
    type: Schema.Types.ObjectId,
    ref: "Fee",
  },
categories: {
  type: Schema.Types.ObjectId,
  ref: "Categorie",
},
});
module.exports = model("container", containerSchema);

