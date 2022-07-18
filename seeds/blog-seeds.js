const { Blogs } = require("../models/blogs")

const blogsData = [
  {
    title: "Test post",
    content: "Test",
    user_id: 1,
  },

  {
    title: "Test post 2",
    content: "Test",
    user_id: 2,
  },

]
const seedBlogs = () => Blogs.bulkCreate(blogsData);

module.exports = seedBlogs; 