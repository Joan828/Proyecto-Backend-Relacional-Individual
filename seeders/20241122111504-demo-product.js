'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      name: "Subaru Outback",
      price: 3500,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Dacia Sandero",
      price: 14200,
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Dacia Duster",
      price: 17800,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Honda HRV",
      price: 2500,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Suzuki Grand Vitara",
      price: 6000,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
