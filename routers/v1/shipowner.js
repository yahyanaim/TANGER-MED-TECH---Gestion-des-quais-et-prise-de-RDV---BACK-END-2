const express = require("express");
const router = express.Router();

const{ getById, getAll, create, update, destroy} = require('../../controllers/shipOwnerControllers');

router.get("/:id",getById);
router.get("/", getAll);
router.post("/", create);
router.put("/:id",update);
router.delete("/:id",destroy);

module.exports = router;