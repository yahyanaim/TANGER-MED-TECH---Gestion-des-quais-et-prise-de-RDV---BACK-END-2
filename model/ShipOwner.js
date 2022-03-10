const {Schema, model} = require("mongoose");
const shipOwnerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  phone: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  description: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  nationality: {
    type: String,
    required: [true, "Please fill this field!"],
  },
});

module.exports = model("shipOwner", shipOwnerSchema);
