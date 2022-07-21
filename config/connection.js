const Sequelize = require('sequelize')

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSBD_URL)
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW,
        {
            username: 'root',
            password: null,
            database: 'schema.sql',
            host: 'localhost',
            dialect: 'mysql',
            port: '3306'
        }
    )
}

module.exports = sequelize;