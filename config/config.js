require('dotenv').config();
const env = process.env

const development = {
    "username": env,
    "password": "test1234",
    "database": "sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
};
const test = {
    "username": "root",
    "password": "test1234",
    "database": "sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
};
const production = {
    "username": "root",
    "password": "test1234",
    "database": "sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
};

module.exports = { development, test, production };

