const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    name : String,
    email : String,
    bodym : String
})

const MessageModal = mongoose.model("messages", MessageSchema)

module.exports = MessageModal