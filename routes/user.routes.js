const { createUser, updateUser, deleteUser } = require("../controllers/user");

const express = require("express");

const router = express.Router();

router.post("/signup", createUser);
router.put("/edit/:id", updateUser);
router.put("/delete/:id", deleteUser);

module.exports = router;
