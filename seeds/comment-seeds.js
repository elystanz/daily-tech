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

];

const seedComment = () => Comment.bulkCreate(commentData)
module.exports = seedComment;