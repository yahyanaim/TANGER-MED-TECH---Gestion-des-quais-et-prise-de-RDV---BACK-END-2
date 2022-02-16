const express = require("express");
const router = express.Router();

const{register, login, getById, getAll, update, destroy} = require('../../controllers/authControllers');

router.post("/register", register);
router.post("/login", login);
router.get("/:id",getById);
router.get("/", getAll);
router.put("/:id",update);
router.delete("/:id",destroy);

module.exports = router;
