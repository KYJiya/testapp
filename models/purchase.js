const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('purchase', {
        memberid: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        productid: {
            type: DataTypes.INTEGER(),
            allowNull: false
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