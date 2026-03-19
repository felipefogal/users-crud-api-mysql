import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
    itensPedido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomeUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    meioPagamento: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Order;