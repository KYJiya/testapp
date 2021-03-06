const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataType) => {
    return sequelize.define('product', {
        productname: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()')
        }
    }, {
        timestamp: false
    });
};