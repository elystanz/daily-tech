const { Comment } = require("../models/comments")

const commentData = [
  {
    comment_text: "Test comment",
    user_id: 1,
    blog_id: 1,
  },

  {
    comment_text: "Test comment 2",
    user_id: 2,
    blog_id: 2,
  },

  {
    comment_text: "Test comment 3",
    user_id: 3,
    blog_id: 3,
  }
];

const seedComment = () => Comment.bulkCreate(commentData)
module.exports = seedComment