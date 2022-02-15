"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Turmas", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Turmas", "deletedAt");
  },
};
