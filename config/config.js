require('dotenv').config()
module.exports = {
  development: {
    username: process.env.JB_username,
    password: process.env.JB_password,
    database: process.env.JB_database,
    host: process.env.JB_host,
    dialect: 'mysql',
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWS_URL',
    dialect: 'mysql',
  },
}