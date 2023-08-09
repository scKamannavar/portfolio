const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MessageModel = require('./model/message');
// const UserModel = require('../client/src/Users.jsx');
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");

app.post("/sendMessage", (req, res)=>{
    MessageModel.create(req.body)
    .then(m => {
        console.log(m)
        res.json(m)
    })
    .catch(err => console.log(err))
})

app.listen(3000, () => {
    console.log("Server is running on 3000")
}) 