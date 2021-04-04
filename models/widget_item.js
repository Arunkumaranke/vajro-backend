"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class widget_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      widget_item.belongsTo(models.widget, { foreignKey: "widget_id" });
    }
  }
  widget_item.init(
    {
      name: DataTypes.STRING,
      image_url: DataTypes.STRING,
      redirect_url: DataTypes.STRING,
      order: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "widget_item",
    }
  );
  return widget_item;
};
