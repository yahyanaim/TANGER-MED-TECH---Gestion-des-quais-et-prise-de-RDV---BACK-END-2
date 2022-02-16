
const Reservation = require('../model/Reservation');

module.exports = {

/* GET ALL RESERVATION */
getAll : async(req, res, next)  => {
  const reservations = await Reservation.find();
    res.json ({
      data: reservations,
    }); 
},


getById :  async (req, res) => {
  const reservation = await User.findById(req.params.id);
  if (!user) {
      return res.status(404).json({
          message: "user Not Found",
      });
  }

  res.json(reservation);
},


create : async(req, res) => {

  const reservation = new User(req.body);

  await reservation.save();

  res.status(201).json({
      message: "reservations created successfully",
      data: reservationr,
  });
},


update :  async(req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body);

  if (!reservation) {
      return res.status(404).json({
          message: "reservation not found",
      });
  }

  res.json({
      message: "reservation updated successfully",
      data: reservation
  });
}, 


destroy : async (req, res) => {

  const reservation = await Reservation.findByIdAndDelete(req.params.id);

  if (!reservation) {
      res.status(404).json({
          message: "resrvation Not Found",
      });
  }

  res.status(202).json({
      message: "resrvation deleted sccessfully",
      data: reservation
  });
},    

}
