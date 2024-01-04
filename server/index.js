const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MessageModel = require('./model/message');
const BlogPostModal = require('./model/blogpost');
// const UserModel = require('../client/src/Users.jsx');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 4000;

app.use(cors(
// <<<<<<< HEAD
    // {
    //     origin : [""],
    //     method : ["POST", "GET"],
    //     credentials : true
    // }
// =======
    {
        origin : ["https://portfolio-sagarck.vercel.app"],
        method : ["POST", "GET"],
        credentials : true
    }
// >>>>>>> fda2edc19181764b6167f64443740dee7bcee663
))
app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");

//Atlaas
const dbUrl = process.env.DATABASE_URL
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
    res.json('Hello, Nothing else on this route... Just me and my blogposts')
})

app.get('/blog/:id', async (req, res) => {
    const blog = await BlogPostModal.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  });
// app.post("/sendMessage", (req, res)=>{
//     MessageModel.create(req.body)
//     .then(m => {
//         console.log(m)
//         res.json(m)
//     })
//     .catch(err => console.log(err))
// })

app.post("/sendBlog", (req, res)=>{
    BlogPostModal.create(req.body)
    .then(m => {
        console.log(m)
        res.json(m)
    })
    .catch(err => console.log(err))
})


app.listen(PORT, () => {
    console.log("Server is running on 3000")
}) 
