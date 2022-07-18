const Blog = require("./blogs")
const Comment = require("./comments")
const User = require("./users")

User.hasMany(Blog, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogs_id",
  onDelete: "SET NULL",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Blog.hasMany(Comment, {
  foreignKey: "blogs_id",
});

module.exports = { Blog, User, Comment };