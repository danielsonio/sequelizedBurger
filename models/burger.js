

module.exports = function(sequelize, DataTypes) {

 var Burger = sequelize.define('Burger', {

  burger_name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [1]
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
    }
  });
  return Burger;
};
