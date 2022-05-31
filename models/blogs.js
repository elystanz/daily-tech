const { Model, DataType } = require('sequelize')
const sequelize = require('../config/connection')

class Blogs extends Model {}

Blogs.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    created: {
        type: DataTypes.DATE,
        allowNull: false
    },

    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
});