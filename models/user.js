'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate((user) => {

    user.password = bcrypt.hashSync(user.password,10);
    
  })
  return User;
};
