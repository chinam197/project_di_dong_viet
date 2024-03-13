"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      //Khai báo cột ở trong table
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
      provider_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
      //Mặc định Sequelize có sẵn 2 trường: createdAt, updatedAt
      createdAt: "created_at",
      updatedAt: "updated_at",
      //Nếu muốn bỏ 2 trường createdAt và updatedAt --> Khai báo timestamps: false
      // timestamps: false,
      // paranoid: true,
      // deletedAt: "deleted_at",
      tableName: "users",
    }
  );
  return User;
};
