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
          product_id: 1,
          product_name: 'Product 1',
          quantity: 100,
          description: 'Description for Product 1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 2,
          product_name: 'Product 2',
          quantity: 200,
          description: 'Description for Product 2',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 3,
          product_name: 'Product 3',
          quantity: 150,
          description: 'Description for Product 3',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 4,
          product_name: 'Product 4',
          quantity: 50,
          description: 'Description for Product 4',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          product_id: 5,
          product_name: 'Product 5',
          quantity: 300,
          description: 'Description for Product 5',
          created_at: new Date(),
          updated_at: new Date()
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
