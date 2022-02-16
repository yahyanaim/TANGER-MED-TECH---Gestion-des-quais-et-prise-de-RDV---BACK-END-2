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
    ref: "user",
  },

  ship: 
    {
      type: Schema.Types.ObjectId,
      ref: "ship",
    },
  
  quay: 
    {
      type: Schema.Types.ObjectId,
      ref: "quay",
    },

});

module.exports = model("Reservation",reservationSchema);



