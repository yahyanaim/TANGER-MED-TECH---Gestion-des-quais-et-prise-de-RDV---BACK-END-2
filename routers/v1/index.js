const { Router } = require("express");
const express = require("express");
const  app = express();
const router = express.Router()

//Import Route auth
const authRoute = require('./auth');

//Import Route reservation
const resrvRoute = require('./reserv');

// import Route admin
const adminRoute = require('./admin');

// import Route categorie
const categorieRoute = require('./categorie');

// import Route categorie
const dockRoute = require('./dock');

//Route Midllewares
router.use("/user", authRoute);
router.use("/reservation", resrvRoute);
router.use("/admin", adminRoute);
router.use("/categorie", categorieRoute);
router.use("/dock", dockRoute);

module.exports = router