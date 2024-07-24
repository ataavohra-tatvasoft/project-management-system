'use strict'

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          productId: 1,
          productName: 'Product 1',
          quantity: 100,
          description: 'Description for Product 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          productName: 'Product 2',
          quantity: 200,
          description: 'Description for Product 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          productName: 'Product 3',
          quantity: 150,
          description: 'Description for Product 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 4,
          productName: 'Product 4',
          quantity: 50,
          description: 'Description for Product 4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 5,
          productName: 'Product 5',
          quantity: 300,
          description: 'Description for Product 5',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
