const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// model connect
db.Member = require('./member')(sequelize, Sequelize);
// db.Product = require('./product')(sequelize, Sequelize);
// db.Purchase = require('./purchase')(sequelize, Sequelize);

// db.Member.hasMany(db.Purchase, {
//   foreignKey: 'fk_memberid',
//   sourceKey: 'id'
// });
// db.Purchase.belongsTo(db.Member, {
//   foreignKey: 'fk_memberid',
//   targetKey: 'i'
// });
// db.Product.hasMany(db.Purchase, {
//   foreignKey: 'fk_productid',
//   sourceKey: 'id'
// });
// db.Purchase.belongsTo(db.Product, {
//   foreignKey: 'fk_productid',
//   targetKey: 'id'
// });

module.exports = db;