'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Clients', [{
      firstName: 'El vitto',
      order: 'Cerveza 1;Cerveza 2',
      randomId: 1211,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      firstName: 'El guz',
      order: 'Cerveza 3;Cerveza 4',
      randomId: 3242,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
