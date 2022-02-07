module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('alunos'),
};
