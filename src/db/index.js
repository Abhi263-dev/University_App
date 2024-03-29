const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite' // Path to your SQLite database file
});

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     logging:false
// });

sequelize.authenticate().then(() => {
    console.log('Connected')
}).catch((err) => {
    console.log(err)
})

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize

//require models
db.chapter=require('../models/chapter')(sequelize,DataTypes)
db.subchapter=require('../models/subchater')(sequelize,DataTypes)


//One to Many between users and orders
db.chapter.hasMany(db.subchapter,{foreignKey:'chapterId'})
db.subchapter.belongsTo(db.chapter,{foreignKey:'chapterId'})

sequelize.sync()
  .then(() => {
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });


module.exports = db