const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        trim: true
    },
    lastname : {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,

    },
    authenticated: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["user", "admin", "superAdmin"],
        default: "user"
    }

})

module.exports = mongoose.model('User', userSchema)