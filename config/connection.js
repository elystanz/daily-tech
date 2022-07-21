// const Sequelize = require('sequelize')

// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     },
//   );
// }

// module.exports = sequelize;

'use strict';

const Sequelize = require('sequelize');
require('dotenv').config();


const DB = 'users';
const USER = 'user';
const PASSWORD = 'password';
const HOST = 'host';
const DIALECT = 'mysql';
const PORT = 5432;

const sequelize = new Sequelize(
    DB,
    USER, 
    PASSWORD, 
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT,
    }
)

module.exports.sequelize = sequelize;