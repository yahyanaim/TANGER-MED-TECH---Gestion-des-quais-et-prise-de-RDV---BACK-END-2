const { Router } = require("express");
const express = require("express");
const  app = express();
const router = express.Router()

//Import Route auth
const authRoute = require('./auth');

//Import Route reservation
const resrvRoute = require('./reserv');

//Route Midllewares
router.use("/user", authRoute);
router.use("/reservation", resrvRoute);

module.exports = router