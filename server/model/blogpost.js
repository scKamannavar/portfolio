const mongoose = require('mongoose')
const BlogPostSchema = new mongoose.Schema({
    title: String, 
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
})

const BlogPostModal = mongoose.model("BlogPosts", BlogPostSchema)

module.exports = BlogPostModal