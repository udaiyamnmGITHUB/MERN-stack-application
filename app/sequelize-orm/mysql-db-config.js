const Sequelize = require('sequelize');

module.exports = function(){

var sequelize = new Sequelize('mysql://root:@localhost:3306/petdb');

/*var sequelize = new Sequelize('petdb', 'root', null, {
  host: 'localhost',
  port:'3306',
  dialect: 'mysql'
});*/

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
};