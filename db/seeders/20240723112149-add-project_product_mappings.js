'use strict'

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    // Insert sample data into the 'project_product_mappings' table
    await queryInterface.bulkInsert(
      'project_product_mappings',
      [
        {
          project_id: 1,
          product_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_id: 2,
          product_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_id: 3,
          product_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_id: 4,
          product_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          project_id: 5,
          product_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    // Remove all records from 'project_product_mappings' table
    await queryInterface.bulkDelete('project_product_mappings', null, {})
  }
}
