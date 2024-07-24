'use strict'

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      projectId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      projectName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 20]
        }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [0, 250]
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    })
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects')
  }
}
