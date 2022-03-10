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

// import Route container
const containerRoute = require('./container');

// import Route ship
const shipRoute = require('./ship');

// import Route shipowner
const shipownerRoute = require('./shipowner');

//Route Midllewares
router.use("/user", authRoute);
router.use("/reservation", resrvRoute);
router.use("/admin", adminRoute);
router.use("/categorie", categorieRoute);
router.use("/dock", dockRoute);
router.use("/container", containerRoute);
router.use("/ship", shipRoute);
router.use("/shipowner", shipownerRoute);

module.exports = router