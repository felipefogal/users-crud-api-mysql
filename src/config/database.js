import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

// /* Conexão AWS */
// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     min: 1,
//     max: 5,
//     idle: 10000, // Desconexão após 10s de inatividade
//   },
// });

/*Conexão local*/
const sequelize = new Sequelize(process.env.DB_LOCAL_NAME, process.env.DB_LOCAL_USER, process.env.DB_LOCAL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

export default sequelize;
