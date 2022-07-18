const { User } = require('../models/users');

const userData = [
    {
        username: 'helloworld52',
        email: 'hiworld@nba.com',
        password: 'password'
    },

    {
        username: 'freddiem232',
        email: 'fm@mercury.org',
        password: 'password'
    }

];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;