const express = require("express");
const { createUser, getAllUsers } = require("../controllers/user.contoller");
const router = express.Router();


router.get("/create",createUser);
router.get("/all",getAllUsers)
// router.post()

module.exports = router