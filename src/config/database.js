import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('users_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;