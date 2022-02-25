const express = require("express");
const router = express.Router();

const{login,create} = require('../../controllers/adminControllers');

router.post("/login", login);
router.post("/", create);


module.exports = router;
