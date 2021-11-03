module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(11),

    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING(255),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE(),
    },
    dueDateMonth: {
      allowNull: true,
      type: Sequelize.INTEGER(11),
    },
    dueDateDay: {
      allowNull: true,
      type: Sequelize.INTEGER(11),
    },
    dueDateYear: {
      allowNull: true,
      type: Sequelize.INTEGER(11),
    },
    status: {
      allowNull: false,
      defaultValue: 'New',
      type: Sequelize.STRING(255),
    }
  });

  return Task;
};
