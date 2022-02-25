const mongoose = require("mongoose");

const placeholderSchema = new mongoose.Schema({
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "categorie",
  },
  placeholder: {
    type: Schema.Types.ObjectId,
    ref: "placeholder",
  },
});

const Placheolder = mongoose.model("placeholder", placeholderSchema);

module.exports = Placheolder;