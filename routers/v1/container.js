const express = require("express");
const router = express.Router();

const{getById, getAll, update, destroy, create} = require('../../controllers/containerControllers');

router.post("/", create);
router.get("/:id",getById);
router.get("/", getAll);
router.put("/:id",update);
router.delete("/:id",destroy);

module.exports = router;
