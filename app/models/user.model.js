module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  },
  first_name: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "first_name"
  },
  last_name: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "last_name"
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
    field: "email"
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: "password"
  },
  role: {
    type: Sequelize.STRING(50),
    field: 'role',
    allowNull: true
  }
});

return User;
};
