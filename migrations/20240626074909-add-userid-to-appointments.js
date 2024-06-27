'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Appointments', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: true, // or false depending on your schema
      references: {
        model: 'Users', // name of the referenced table
        key: 'id', // name of the referenced column
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' or 'RESTRICT' depending on your use case
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Appointments', 'UserId');
  },
};
