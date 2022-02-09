const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
     pages:{
        type: Number,
        required: true
    },
    readStatus: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Posts', PostSchema)