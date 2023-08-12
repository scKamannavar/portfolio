const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MessageModel = require('./model/message');
// const UserModel = require('../client/src/Users.jsx');
const app = express();

app.use(cors(
    {
        origin : [""],
        method : ["POST", "GET"],
        credentials : true
    }
))
app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");

//Atlaas
const dbUrl = "mongodb+srv://sagar080897:XK8BdC3GlIDreVuB@cluster0.8chijri.mongodb.net/Portfolio?retryWrites=true&w=majority";
const connectionParams ={
    useNewUrlParser : true,
    useUnifiedTopology : true,
}

mongoose.connect(dbUrl,connectionParams)
.then(()=>{
    console.info('Mongo Atlas Connected')
})
.catch((err)=>{
    console.log(err)
})
//Atlaas
app.get("/",(req,res)=>{
    res.json('Hello, Nothing else on this route... Just me ')
})
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