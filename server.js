const express = require("express")
const dotenv =  require("dotenv")

const {connect} = require('./config/db')

dotenv.config({path: "./config/private.env"})

connect(process.env.URI)

const app = express()

const PORT = 9000

app.listen(process.env.PORT, ()=>{
    console.log(`App Is Running On PORT:${PORT}`)
})