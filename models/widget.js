"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class widget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      widget.belongsTo(models.widget_type, { foreignKey: "widget_type_id" });
    }
  }
  widget.init(
    {
      name: DataTypes.STRING,
      display_name: DataTypes.STRING,
      order: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "widget",
    }
  );
  return widget;
};
