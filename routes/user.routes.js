const { createUser, updateUser, getAllUser, getUser,deleteUser } = require("../controllers/user");

const express = require("express");


const router = express.Router();

router.post("/signup", createUser);
router.get('/', getAllUser);
router.get('/:id', getUser)
router.put("/:id" , updateUser);
router.delete("/:id" , deleteUser);



module.exports = router;
