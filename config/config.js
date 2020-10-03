require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_username,
    "password": process.env.DB_password,
    "database": process.env.DB_database,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
