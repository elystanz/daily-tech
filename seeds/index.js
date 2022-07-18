const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedBlogs();
    await seedUsers();
    await seedComments();

    process.exit(0);
};

seedAll();