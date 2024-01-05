const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MessageModel = require('./model/message');
const BlogPostModal = require('./model/blogpost');
// const UserModel = require('../client/src/Users.jsx');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://127.0.0.1:3000");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  app.use(cors())


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

app.get("/blog",(req,res)=>{
    res.json('Hello, Randomness')
})


app.get("/",(req,res)=>{
    res.json('Hello, Nothing else on this route... Just me and my blogposts and some tacnhical posts yes')
})

app.get('/blog/:id', async (req, res) => {
    const blog = await BlogPostModal.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  });
app.get('/allBlogs/:category', async (req, res) => {
  const { category } = req.params
  const blog = await BlogPostModal.find();
  const filteredBlogs = blog.filter(blog => blog.category === category);
    if (!filteredBlogs) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(filteredBlogs);
  });

  app.get('/allBlogs', async (req, res) => {
    const blog = await BlogPostModal.find();
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
