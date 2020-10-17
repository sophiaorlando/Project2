require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
