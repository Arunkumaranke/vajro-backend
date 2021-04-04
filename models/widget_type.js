'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class widget_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  widget_type.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'widget_type',
  });
  return widget_type;
};