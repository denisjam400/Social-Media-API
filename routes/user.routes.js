const { createUser, updateUser, getAllUser, getUser } = require("../controllers/user");

const express = require("express");


const router = express.Router();

router.post("/signup", createUser);
router.get('/users', getAllUser);
router.get('/user/:id', getUser)
router.put("/user/:id" , updateUser);


module.exports = router;
