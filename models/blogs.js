const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Blogs extends Model {}

Blogs.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        },

    content: {
        type: DataTypes.STRING,
        allowNull: false,
        },

    user_id: {
        type: DataTypes.STRING,
        references: {
            model: "users",
            key: "id",
            }
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "blogs",
      }
);

module.exports = Blogs;