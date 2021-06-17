const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'dakota_bear',
    email: 'dakota_bear@gmail.com',
    password: 'password123'
  },
  {
    username: 'BenjiBoi',
    email: 'BenjiBoi@gmail.com',
    password: 'password123'
  },
  {
    username: 'clurburr',
    email: 'clairesylvstr@gmail.com',
    password: 'password123'
  },
  {
    username: 'gsyl',
    email: 'gsyl@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;