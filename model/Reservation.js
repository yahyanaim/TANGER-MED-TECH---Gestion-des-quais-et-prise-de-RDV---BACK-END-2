const {Schema, model} = require("mongoose");
const reservationSchema = new Schema({
  from: {
    type: Date,
    required: [true, "Please fill this field!"],
  },
  to: {
    type: Date,
    required: [true, "Please fill this field!"],
  },
  numberOfContainer: {
    type: Number,
    required: [true, "Please fill this field!"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  ship: 
    {
      type: Schema.Types.ObjectId,
      ref: "Ship",
    },

    dock: 
    {
      type: Schema.Types.ObjectId,
      ref: "Docks",
    },
});

module.exports = model("Reservation",reservationSchema);



