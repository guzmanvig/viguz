'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstName: DataTypes.STRING,
    order: DataTypes.STRING,
    randomId: DataTypes.INTEGER
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};