'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', { 
      
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      id_user: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
      },

      status: {
        type: Sequelize.STRING,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tasks');
  }
};
