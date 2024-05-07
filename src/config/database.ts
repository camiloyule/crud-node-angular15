import { Sequelize } from 'sequelize';
const DB_NAME = 'for_crud';
const DB_USER = 'maiadmin';
const DB_PASSWORD = 'qwertyuiop0A!';
const DB_HOST = 'localhost';
const DB_PORT = 3306; // Default MySQL port

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
  });

export default sequelize;