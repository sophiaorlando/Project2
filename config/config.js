require("dotenv").config();

module.exports = {
  development: {
    username: "kc8ltxt5xjkywh0c",
    password: "i8jx0yajrxrok3p1",
    database: "iem3211s5bdww0v4",
    host: "f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "mysql://kc8ltxt5xjkywh0c:i8jx0yajrxrok3p1@f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/iem3211s5bdww0v4",
    dialect: "mysql",
  },
};
