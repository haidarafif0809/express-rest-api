'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let users = [];
    for (var i = 0; i < 10; i++) {
      let name = faker.name.findName();
      let email = faker.internet.email();
      users.push({
        email: email,
        name: name,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
