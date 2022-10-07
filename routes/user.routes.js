const {createUser} = require("../controllers/user")

const express = require('express')

const app = express()

app.post('/signup', createUser)

module.exports =  app