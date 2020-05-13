const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

/* GET users listing. */
router.post("/api/v1/users", userController.create);
router.get("/api/v1/users", userController.fetch);

module.exports = router;
