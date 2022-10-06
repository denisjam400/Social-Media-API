const express = require("express")
const dotenv =  require("dotenv")

const app = express()

dotenv.config({path: "./env/private.env"})

const PORT = 9000

app.listen(process.env.PORT, ()=>{
    console.log(`App Is Running On PORT:${PORT}`)
})