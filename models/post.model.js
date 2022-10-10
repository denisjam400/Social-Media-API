const { types } = require('joi')
const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
    user : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },

    reaction : {
        type: String,
        enum : ["sad", "love", "care", "angry", "like"]
    }
})

const commentSchema = mongoose.Schema({
    user : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },

    message : {
        type: String,
    }
})

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    caption : {
        type: String,
        required: true,
        trim: true
    },

    medias: {
        type : [String]
    },

    likes : {
            type: [likeSchema]
        }
    ,
    Comment : {
        type : [commentSchema]
    }


})

module.exports = mongoose.model('Post', postSchema)