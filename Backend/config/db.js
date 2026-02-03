
const { Sequelize } = 
require("sequelize");

const sequelize = new Sequelize(
    "crud_app",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;