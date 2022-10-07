const {createUser} = require("../controllers/user")

const express = require('express')

const router = express.Router()

router.post('/signup', createUser)

module.exports = router